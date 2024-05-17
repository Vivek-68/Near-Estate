import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const Layout = () => {
  return (
    <>
      <div className="md:hidden top-0 w-screen h-[max(7.5dvh,2.5rem)] fixed z-0 bg-[#FAFAFA]"></div>
      <div className="max-[767px]:pt-4 max-w-[85rem] lg:h-screen m-auto px-5 md:px-20 ">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
