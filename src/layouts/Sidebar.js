import { Link, useLocation } from "react-router-dom";
import { BiLogOutCircle } from "react-icons/bi";
import { useEffect, useState } from "react";
import { getNav } from "../navigations";

export default function Sidebar({ showSidebar, setShowSidebar }) {
  //this two pros we defined at MainLayout component
  const { pathname } = useLocation(); //this will give current path

  const [allNav, setAllNav] = useState([]);

  useEffect(() => {
    const navs = getNav("admin");
    console.log("navs ====>", navs);

    setAllNav(navs);
  }, []);

  const logout = () => {
    console.log("logout");
  };
  return (
    <div>
      <div
        onClick={() => setShowSidebar(false)}
        className={`fixed duration-200 ${
          showSidebar ? "visible" : "invisible"
        } w-screen h-screen bg-[#8cbce780] top-0 left-0 z-10`} //this w-screen h-screen css will help us when we click the mouse where ever on the screen it will set to invisible
      ></div>
      <div
        className={`w-[260px]  fixed bg-[#e6e7fb] top-0 z-50 h-screen shadow-[0_0_15px_0_rgb(34_41_47_/5%)] transition-all ${
          showSidebar ? "left-0" : "-left-[260px] lg:left-0" //this "-left-[260px] lg:left-0 css means if showside bar is false hide the side bar when small screens, if large screens then show the side bar from left 0 px
        }`}
      >
        {/** the below div for multi vendor logo that  displays on the sidebar componet and when we click it, it will go to hme page */}
        <div className="h-[70px] flex justif-center items-center">
          <Link to="/" className="w-[180px] h-[70px]">
            <img
              className="w-full h-full"
              src="/images/logo.png"
              alt="multivendor ecommerce logo"
            ></img>
          </Link>
        </div>
        <div className="px-[16px]">
          <ul>
            {allNav.map((navObj, index) => (
              <li key={index}>
                <Link
                  to={navObj.path}
                  className={`${
                    pathname === navObj.path
                      ? "bg-blue-600 shadow-indigo-500/50 text-white duration-500"
                      : "text-[#030811] font-bold duration-200 "
                  } px-[12px] py-[9px] rounded-sm flex justify-start items-center gap-[12px] hover:pl-4 transition-all w-full mb-1 `}
                >
                  <span>{navObj.icon}</span>
                  <span>{navObj.title}</span>
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={() => logout}
                className="text-[#030811] font-bold duration-200 px-[12px] py-[9px] rounded-sm flex justify-start items-center gap-[12px] hover:pl-4 transition-all w-full mb-1"
              >
                <span>
                  <BiLogOutCircle />
                </span>
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
