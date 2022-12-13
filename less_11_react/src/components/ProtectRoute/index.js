import React from "react";
import { Outlet } from "react-router-dom";
import LoginPage from "../../containers/LoginPage";

export default function ProtectRoute() {
  const isLogin = localStorage.getItem("username");
  return isLogin ? <Outlet /> : <LoginPage />;
}
