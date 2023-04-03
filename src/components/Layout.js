import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";

function Layout() {
  return (
    <div className="position-relative">
      <Header />
      <SideBar />
      <Outlet />
    </div>
  );
}

export default Layout;
