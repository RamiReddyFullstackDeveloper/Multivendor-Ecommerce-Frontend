import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PropagateLoader } from "react-spinners";
import toast from "react-hot-toast";
import { adminLogin, messageClear } from "../../stores/auth/authReducer";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [state, setState] = useState({ email: "", password: "" });
  const dispatch = useDispatch(); //for this we  need to install react-redux
  const navigate = useNavigate();
  const { loader, successMessage, errorMessage } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear()); //messageclear is an function which will take two args(state, payload) in authReducers in reducer object.
    }
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
      navigate("/register"); //if login is success then we will nvigate to home page
    }
  }, [errorMessage, successMessage]);

  //override the propageloader css
  const overrideCSSStyle = {
    display: "flex",
    margin: "0 auto",
    height: "24px",
    justifyContent: "center",
    alignItem: "center",
  };

  const inputHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("AdminLogin state ===>", state);
    dispatch(adminLogin(state));
  };

  return (
    <div className="min-w-screen min-h-screen bg-[#cdcae9] flex items-center justify-center">
      <div className="w-[350px] text-[#ffffff] p-2 ">
        <div className="bg-[#6f68d1] p-4 rounded-md">
          <div className="h-[70px] flex items-center justify-center">
            <div className="w-[180px] h-[50px]">
              <img
                className="w-full h-full"
                src="/images/logo.png"
                alt="admin-image"
              ></img>
            </div>
          </div>

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
            <button
              disabled={loader ? true : false} //if loader true then disable the button
              className="bg-slate-800 w-full hover:shadow-blue-300/ hover:shadow-lg text-white rounded-md px-3 py-2 mb-3"
            >
              {loader ? (
                <PropagateLoader color="#fff" cssOverride={overrideCSSStyle} />
              ) : (
                "Login"
              )}
            </button>

            <div className="w-full flex justify-center items-center mb-3">
              <div className="w-[45%] bg-slate-700 h-[1px]"></div>
              <div className="w-[10%] flex justify-center items-center">
                <span className="pb-1">Or</span>
              </div>
              <div className="w-[45%] bg-slate-700 h-[1px] "></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
