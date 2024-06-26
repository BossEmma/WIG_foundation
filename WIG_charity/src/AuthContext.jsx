import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import axiosInstance from './api';
import { jwtDecode } from "jwt-decode";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    

    const user_signup = async (email, password, first_name, last_name, phone_number, role) => {
      try {
          const response = await axiosInstance.post('api/user/register/', { email, password, first_name, last_name, phone_number, role });
          console.log(response)
          const { access, refresh } = response.data.tokens;
          localStorage.setItem('access_token', access);
          localStorage.setItem('refresh_token', refresh);
          axios.defaults.headers.common['Authorization'] = `Bearer ${access}`;
          setIsAuthenticated(true);
      } catch (error) {
          console.error('Signup failed', error);
          setIsAuthenticated(false);
      }
    };

    const user_login = async (email, password, callback) => {
        try {
            const response = await axiosInstance.post('api/user/login/', { email, password });
            console.log(response);
            const { access, refresh } = response.data.tokens;
            const isSuperuser = response.data.is_superuser;
            localStorage.setItem('access_token', access);
            localStorage.setItem('refresh_token', refresh);
            localStorage.setItem('is_superuser', isSuperuser);
            axios.defaults.headers.common['Authorization'] = `Bearer ${access}`;
            
            callback(isSuperuser);
        } catch (error) {
            console.error('Login failed', error);
            callback(null); 
        }
    };


    const user_logout = async () => {
        try{
            const refresh_token = localStorage.getItem('refresh_token');

            if (!refresh_token) {
                console.error("No refresh token found");
                return;
            }

            const response = await axiosInstance.post('api/logout/', {
                refresh: refresh_token
            }, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                }
            });

            if (response.status === 205) {
                localStorage.removeItem('access_token');
                localStorage.removeItem('refresh_token');
                delete axios.defaults.headers.common['Authorization'];
                setIsAuthenticated(false);
                alert('Logged out successfully');
            }
    
        } catch (error){
            console.error('Logout failed', error);
        }
    };



    return (
      <AuthContext.Provider value={{ isAuthenticated, user_signup, user_login, user_logout }}>
        {children}
      </AuthContext.Provider>
    );
};

export const useAuth = () => {
  return useContext(AuthContext);
};


/*
            {data.users.map(user => (
              <tr key={user.id}>
                <td className="text-nowrap text-center">{user.first_name}</td>
                <td className="text-nowrap text-center">{user.last_name}</td>
                <td className="text-nowrap text-center">{user.email}</td>
                <td className="text-nowrap text-center">{user.role}</td>
                <td className="text-nowrap text-center">{user.phone_number}</td>
              </tr>
            ))}
              */