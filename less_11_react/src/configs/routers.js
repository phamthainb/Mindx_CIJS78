import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import AboutPage from "../containers/AboutPage";
import HomePage from "../containers/HomePage";
import LoginPage from "../containers/LoginPage";
import ProfilePage from "../containers/ProfilePage";
import React from "react";
import ProtectRoute from "../components/ProtectRoute";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
       <Route element={<ProtectRoute />}>
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Route>
  )
);
