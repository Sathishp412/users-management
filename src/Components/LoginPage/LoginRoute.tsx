import React from "react";
import RouteConfig from "../RouteConfig";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Login from "./Login";

const LoginRoute = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="/routeConfig" element={<RouteConfig />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default LoginRoute;
