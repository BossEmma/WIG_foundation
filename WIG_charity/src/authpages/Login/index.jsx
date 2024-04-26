import React from "react";
import Footer from "../../components/Footer";

function Login() {
  return (
    <>
      <section>
        <div className="w-[70%] h-screen mx-auto flex flex-row p-3 mb-4 mt-4 glass">
          <div className="w-1/2 h-full p-4">
            <div className="h-full flex flex-col items-center justify-center">
              <div className="w-full text-center pb-4 pt-8">
                <h1 className="text-3xl font-semibold">Create Your Account.</h1>
                <p className="text-base font-medium">Sign up today.</p>
              </div>
              <form action="" className="flex flex-col gap-3">
                <div className="block">
                  <label htmlFor="emailAddress">Email Address</label>
                  <input
                    placeholder="example: you@email.com"
                    className="w-full mt-2 py-2 px-2 rounded-lg"
                    type="text"
                  />
                </div>
                <div className="block">
                  <label htmlFor="password">Password</label>
                  <input
                    placeholder="enter your password"
                    className="w-full mt-2 py-2 px-2 rounded-lg"
                    type="text"
                  />
                </div>

                <button className="py-2 mt-4 mb-5 rounded-full border-2 border-green-500 hover:bg-green-600 hover:text-white">
                  Login
                </button>
              </form>
              {/* create account prompt */}
              <p className="text-center">
                New member?{" "}
                <span className="hover:text-green-600">
                  {" "}
                  <a href="#">Create an account!</a>
                </span>
              </p>

              {/*  forgot password ?*/}
              <p className="text-center text-base pt-3">
                Forgot password?{" "}
                <span className=" hover:text-green-600">
                  {" "}
                  <a href="#">Change password.</a>
                </span>
              </p>
            </div>
          </div>
          <div className="w-1/2 h-full">
            <img
              className="w-full h-full object-cover rounded-md "
              src="./assets/login_bg.jpg"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* footer component */}
      <Footer/>
    </>
  );
}

export default Login;