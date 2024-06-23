import React from 'react';
import { useAuth } from '../../AuthContext';
import { useNavigate } from 'react-router-dom';

function SideBar({ onLinkClick }) {
  const navigate = useNavigate();
  const { user_logout } = useAuth();

  const handleLogout = (e) => {
      e.preventDefault();
      try {
        user_logout();
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } catch (error) {
        console.error("Logout failed", error);
      }
    };

    return (
        <div className="sm:basis-[100px] lg:basis-[200px] rounded-lg bg-white shadow-md flex-grow hidden md:block 2xl:max-w-7xl">
          <div className="p-2 flex flex-col justify-between h-auto pt-28">
            <ul className="list-none flex flex-col gap-4">
              <li className="h-10 flex items-center px-4 gap-2 text-lg hover:bg-[#EDF7F5] rounded-md">
                <img className="h-6 w-6" src="./assets/shild.png" alt="" />
                <button onClick={() => onLinkClick("Dashboard")}>
                  Dashboard
                </button>
              </li>
              <li className="h-10 flex items-center px-4 gap-2 text-lg hover:bg-[#EDF7F5] rounded-md">
                <img className="h-6 w-6" src="./assets/shild.png" alt="" />
                <button onClick={() => onLinkClick("Users")}>
                  Users
                </button>
              </li>
              <li className="h-10 flex items-center px-4 gap-2 text-lg hover:bg-[#EDF7F5] rounded-md">
                <img className="h-6 w-6" src="./assets/shild.png" alt="" />
                <button onClick={() => onLinkClick("Projects")}>
                  Projects
                </button>
              </li>
              <li className="h-10 flex items-center px-4 gap-2 text-lg hover:bg-[#EDF7F5] rounded-md">
                <img className="h-6 w-6" src="./assets/shild.png" alt="" />
                <button onClick={() => onLinkClick("Blog")}>
                  Blog
                </button>
              </li>
              <li className="h-10 flex items-center px-4 gap-2 text-lg hover:bg-[#EDF7F5] rounded-md">
                <img className="h-6 w-6" src="./assets/shild.png" alt="" />
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
            <div className="mt-[120px]">
              <p>Any trouble?</p>
              <button className="text-base mt-1 px-7 py-2 rounded-full border-2 border-green-500 hover:bg-green-600 hover:text-white">
                Contact admin
              </button>
            </div>
          </div>
        </div>
    )
}

export default SideBar
