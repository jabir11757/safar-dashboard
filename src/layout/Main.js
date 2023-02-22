import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";

const Main = () => {
  return (
    <div>
      <Sidebar></Sidebar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
