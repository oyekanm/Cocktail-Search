import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

function SharedLayout() {
  return (
    <>
      <Navbar />

      <div className="shared">
        <Outlet />
      </div>
    </>
  );
}

export default SharedLayout;
