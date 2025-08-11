import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function onSubmit(e) {
    e.preventDefault();

    // const usrdata = {
    //   uname: username,
    //   pass: pass,
    // };

    fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ uname: username, pass: pass }),
    })
      .then((res) => {
        console.log(res);
        if (res.status == 200) {
          toast.success("Welcome Student");
          window.sessionStorage.setItem("username", username);
          navigate("/student");
        } else if (res.status == 201) {
          toast.success("Welcome Admin");
          window.sessionStorage.setItem("username", username);
          navigate("/admin");
        } else if (res.status == 202) {
          toast.success("Welcome Resolver");
          window.sessionStorage.setItem("username", username);
          navigate("/resolver");
        } else {
          toast.error("Invalid Username or password");
        }
      })
      .catch((err) => {
        console.log(err);
      });


  }

  return (
    <div>
      
      <div className="h-screen md:flex">
        <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
          <div>
            <h1 className="text-white font-bold text-4xl font-sans">
              SANKALP - LOGIN
            </h1>
            <p className="text-white mt-1">
              A platform to RESOLVE your queries
            </p>
          </div>
          <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" />
          <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" />
          <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" />
          <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" />
        </div>
        <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
          <form onSubmit={onSubmit} className="bg-white">
            <h1 className="text-gray-800 font-bold text-2xl mb-1">
              Please Login to Continue
            </h1>
            <p className="text-sm font-normal text-gray-600 mb-7">
              Welcome to SANKALP
            </p>

        <div className="flex items-center border-2 my-4 rounded-2xl">
          <select
              className="form-select py-2 px-3 rounded-2xl"
              name="role"
              required
              defaultValue=""
          >
            <option value="" disabled>
              Select your Role
            </option>
              <option value="Admin">Admin</option>
              <option value="Resolver">Resolver</option>
              <option value="Student">Student</option>
          </select>
         </div>

            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                />
              </svg>
              <input
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                className="pl-2 outline-none border-none"
                type="text"
                name=""
                id=""
                placeholder="Username"
                required
              />
            </div>

      <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
      {/* Lock Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-gray-400"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
          clipRule="evenodd"
        />
      </svg>

      {/* Password Input */}
      <input
        onChange={(e) => setPass(e.target.value)}
        className="pl-2 outline-none border-none flex-1"
        type={showPassword ? "text" : "password"}
        name="pass"
        placeholder="Password"
        required
      />

      {/* Simple Eye Icon */}
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="focus:outline-none"
      >
        {showPassword ? (
          // Eye Open
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600 hover:text-gray-800"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 3C5 3 1.73 7.11 1 10c.73 2.89 4 7 9 7s8.27-4.11 9-7c-.73-2.89-4-7-9-7zm0 12a5 5 0 110-10 5 5 0 010 10z" />
            <path d="M10 7a3 3 0 100 6 3 3 0 000-6z" />
          </svg>
        ) : (
          // Eye Closed
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600 hover:text-gray-800"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M4.03 3.97a.75.75 0 10-1.06 1.06l1.757 1.757C3.17 8.03 2.06 9.92 1 10c.73 2.89 4 7 9 7a8.96 8.96 0 004.273-1.07l1.697 1.697a.75.75 0 001.06-1.06l-13-13z" />
          </svg>
        )}
      </button>
    </div>

            <button
              type="submit"
              className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
            >
              Login
            </button>
            <a href="/register">
              <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">
                Not registed ? Click here to register
              </span>
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
