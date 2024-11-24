import { Outlet } from "react-router-dom";

import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import { useState } from "react";

export default function MainLayout() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="bg-[#cdcae9] w-full min-h-screen">
      <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      {/**this below <outlet is import when need to load the private routes */}
      <div className="ml-0 lg:ml-[260px] pt-[95px] transition-all">
        <Outlet />
        {/** ml : margin-left pt: padding-top */}
      </div>{" "}
    </div>
  );
}
