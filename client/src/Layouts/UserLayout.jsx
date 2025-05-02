import React from "react";
import Header from "../Components/Header.jsx"
import Navbar from "../Components/Navbar/Navbar.jsx";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <>
     <Header/>
     <Navbar/>
     <Outlet/>
    </>
  );
};

export default UserLayout;
