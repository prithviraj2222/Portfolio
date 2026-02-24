import React from "react";
import Navbar from "../sections/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../sections/Footer";
import ThemeToggle from "../../ThemeToggle";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <ThemeToggle />
      <Footer />
    </>
  );
}

export default Layout;
