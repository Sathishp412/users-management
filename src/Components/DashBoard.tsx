import React from "react";
import MenuBar from "./MenuBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import UserList from "./UserPage/UserList";
import About from "./About";
import NewUser from "./UserPage/NewUser";

const DashBoard = ({ children }: any) => {
  return (
    <div>
      <MenuBar>
        <Routes>
          {/* <Route index element={<Dashboard />} /> */}
          {/* <Route path="/" element={<Dashboard />} /> */}
          {/* <Route index element={<Home />} /> */}
          {/* <Route path="login" element={<Login />} />
            <Route path="/dashBoard" element={<DashBoard />} /> */}

          <Route path="dashboard" element={<DashBoard />} />

          <Route path="/home" element={<Home />} />
          <Route path="/userList" element={<UserList />} />
          <Route path="/about" element={<About />} />
          <Route path="/newUser" element={<NewUser />} />
        </Routes>
      </MenuBar>
    </div>
  );
};

export default DashBoard;
