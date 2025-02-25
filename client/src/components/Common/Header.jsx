import React from "react";
import TopBar from "../Layout/TopBar";
import NavBar from "./NavBar";
//import CartDrawer from "../Layout/CartDrawer";

function Header() {
  return (
    <header className="border-b border-gray-200">
      {/* TopBar */}
      <TopBar />
      {/* NavBar */}
      <NavBar/>
      {/* Cart-Drawer */}
      {/* <CartDrawer/> */}
    </header>
  );
}

export default Header;
