import React, { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [state, setState] = useState({ email: "", password: "" });

  const inputHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("login state ===>", state);
  };

  return (
    <div className="min-w-screen min-h-screen bg-[#cdcae9] flex items-center justify-center">
      <div className="w-[350px] text-[#ffffff] p-2 ">
        <div className="bg-[#6f68d1] p-4 rounded-md">
          <h2 className="test-xl mb-3 font-bold">
            Welcome to Ecommerce Website
          </h2>
          <p className="text-sm mb-3 font-medium">
            Please Sign into your account
          </p>
          <form onSubmit={onSubmit}>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                className="px-3 py-2 outline-none border border-slate-400 rounded-md text-black"
                // value={state.email}
                // onChange={(e) => setState(e.target.value)}
                value={state.email}
                onChange={inputHandler}
              ></input>
            </div>

            <div className="flex flex-col  gap-1 mb-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="px-3 py-2 outline-none border border-slate-400 rounded-md text-black"
                // value={state.password}
                // onChange={(e) => setState(e.target.value)}
                //new approach
                value={state.password}
                onChange={inputHandler}
              ></input>
            </div>
            <button className="bg-slate-800 w-full hover:shadow-blue-300/ hover:shadow-lg text-white rounded-md px-3 py-2 mb-3">
              Sign In
            </button>

            <div className="flex w-full gap-3 mb-3 justify-center items-center">
              <p className="">
                Don't have an account ?{" "}
                <Link className="font-bold" to={"/register"}>
                  Sign Up
                </Link>{" "}
              </p>
            </div>

            <div className="w-full flex justify-center items-center mb-3">
              <div className="w-[45%] bg-slate-700 h-[1px]"></div>
              <div className="w-[10%] flex justify-center items-center">
                <span className="pb-1">Or</span>
              </div>
              <div className="w-[45%] bg-slate-700 h-[1px] "></div>
            </div>

            {/*below we are using react provided icons for this we installed  react-icons */}

            <div className="flex justify-center items-center gap-3">
              <div className="w-[135px] h-[35px] flex rounded-md bg-orange-700 shadow-lg hover:shadow-orange-700/50 justify-center cursor-pointer items-center overflow-hidden">
                <span>
                  <FaGoogle />
                </span>
              </div>

              <div className="w-[135px] h-[35px] flex rounded-md bg-blue-700 shadow-lg hover:shadow-blue-700/50 justify-center cursor-pointer items-center overflow-hidden">
                <span>
                  <FaFacebook />
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
