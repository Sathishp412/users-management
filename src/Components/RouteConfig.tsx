import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import About from "./About";

import UserList from "./UserPage/UserList";
import MenuBar from "./MenuBar";
import NewUser from "./UserPage/NewUser";
import Login from "./LoginPage/Login";

const RouteConfig = () => {
  console.log(localStorage.getItem("Isauth"));
  if (localStorage.getItem("Isauth") === null) {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/logout" element={<Logout />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    );
  } else {
    return (
      <div>
        <BrowserRouter>
          <MenuBar>
            <Routes>
              {/* <Route index element={<Dashboard />} /> */}
              {/* <Route path="/" element={<Dashboard />} /> */}
              {/* <Route index element={<Home />} /> */}
              {/* <Route path="login" element={<Login />} />
            <Route path="/dashBoard" element={<DashBoard />} /> */}
              {/* <Route path="/login" element={<Login />} />
              <Route path="/" element={<Login />} /> */}
              {/* <Route path="dashboard" element={<DashBoard />} /> */}
              <Route index element={<Home />} />
              <Route path="/login" element={<Home />} />

              <Route path="/home" element={<Home />} />
              <Route path="/userList" element={<UserList />} />
              <Route path="/about" element={<About />} />
              <Route path="/newUser" element={<NewUser />} />
            </Routes>
          </MenuBar>
        </BrowserRouter>
      </div>
    );
  }
};

export default RouteConfig;
