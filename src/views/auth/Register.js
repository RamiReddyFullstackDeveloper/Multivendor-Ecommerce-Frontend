import React, { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Register() {
  //using below makes lines of code increase and also not make scense, just assume that if you have 100 of inputs fields in that case we need to define 100 times useState to over come this we follow advance approach
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //advance approach
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  //map input values to state object
  const inputHandler = (e) => {
    //this input handler we need to  pass evey input text etc, instead of
    setState({ ...state, [e.target.name]: e.target.value }); //every time this input handler will call and map to respective field internally. so it reduces the lines of code and simple.
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("register state ===> ", state);
  };

  return (
    <div className="min-w-screen min-h-screen bg-[#cdcae9] flex items-center justify-center">
      <div className="w-[350px] text-[#ffffff] p-2 ">
        <div className="bg-[#6f68d1] p-4 rounded-md">
          <h2 className="test-xl mb-3 font-bold">
            Welcome to Ecommerce Website
          </h2>
          <p className="text-sm mb-3 font-medium">
            Please register your account
          </p>
          <form onSubmit={onSubmit}>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className="px-3 py-2 outline-none border border-slate-400 rounded-md text-black"
                // value={name}
                // onChange={(e) => setName(e.target.value)}
                //we can use above case also
                onChange={inputHandler}
                value={state.name}
              ></input>
            </div>

            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                className="px-3 py-2 outline-none border border-slate-400 rounded-md text-black"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                onChange={inputHandler}
                value={state.email}
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
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
                onChange={inputHandler}
                value={state.password}
              ></input>
            </div>
            <button className="bg-slate-800 w-full hover:shadow-blue-300/ hover:shadow-lg text-white rounded-md px-3 py-2 mb-3">
              Sign Up
            </button>

            <div className="flex items-center w-full gap-3 mb-3">
              <input
                className="w-4 h-4 text-blue-600 overflow-hidden bg-gray-200 rounded border-gray-300 focus:ring-blue-500"
                type="checkbox"
                name="checkbox"
                id="checkbox"
              />
              <label htmlFor="checkbox">
                {" "}
                I agree to privacy terms & conditions
              </label>
            </div>

            <div className="flex w-full gap-3 mb-3 justify-center items-center">
              <p className="">
                Already have an account ?{" "}
                <Link className="font-bold" to={"/login"}>
                  Sign In
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
