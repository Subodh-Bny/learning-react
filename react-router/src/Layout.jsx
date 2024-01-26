import { Outlet } from "react-router-dom";

import React from "react";
import { Header, Footer } from "./Components";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
