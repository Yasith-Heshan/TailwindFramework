"use client";
import React from "react";
import NavBar from "./NavBar";

const NavBarProvider = () => {
  const mainMenu = [
    { name: "Home", route: "/" },
    { name: "Buttons", route: "/buttons" },
    { name: "Spinners", route: "/spinners" },
    { name: "Form Inputs", route: "/formInputs" },
    { name: "Validate Form", route: "/validated_form" },
    { name: "Typography", route: "/typography" },
    { name: "LoadingSection", route: "/loadingSection" },
    { name: "SideBar", route: "/sidebar" },
    { name: "Pagination", route: "/pagination" },
    { name: "Modal", route: "/modal" },
  ];
  const userDetails = {
    name: "John Doe",
    email: "john@gmail.com",
    avatar: "/images/user_avatar.png",
  };
  const handleSignOut = () => {
    alert("Sign out");
  };
  const handleSettings = () => {
    alert("Settings");
  };
  const userMenu = [
    { name: "Sign out", handler: handleSignOut },
    { name: "Settings", handler: handleSettings },
  ];
  return (
    <div>
      <NavBar
        websiteName="Dialog"
        logoSrc="/images/logo.png"
        logoAlt="Dialog Logo"
        userDetails={userDetails}
        mainMenu={mainMenu}
        userMenu={userMenu}
      />
    </div>
  );
};

export default NavBarProvider;
