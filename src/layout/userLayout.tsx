import Footer from "@/components/homepage/footer";
import Navbar from "@/components/homepage/navbar";
import React from "react";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default UserLayout;
