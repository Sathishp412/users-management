import React from "react";
import { Menu } from "primereact/menu";
import { MenuItem } from "primereact/menuitem";
import "../App.css";
import Footer from "./Footer";
import Header from "./Header";
import { Menubar } from "primereact/menubar";
import { useNavigate } from "react-router-dom";
import { render } from "react-dom";
import "primeicons/primeicons.css";

const MenuBar = ({ children }: any) => {
  const navigate = useNavigate();
  const doLogout = () => {
    localStorage.removeItem("Isauth");
    localStorage.removeItem("uname");
    // render(<Logout></Logout>, document.getElementById("root"));

    navigate("/login");
  };
  const items: MenuItem[] = [
    {
      label: "Home",
      icon: "pi pi-home",
      url: "/home",
    },
    {
      label: "Users List",
      icon: "pi pi-list",
      url: "/userList",
    },
    {
      label: "About",
      icon: "'pi pi-fw pi-info' ",
      url: "/about",
    },
    {
      label: "Logout",

      icon: "pi pi-sign-out",
      command: doLogout,
      url: "/login",
    },
  ];

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <Header></Header>
        <div className="menubar">
          <Menu
            style={{
              backgroundColor: "lightgray",
              fontSize: 20,
              fontWeight: "bold",
            }}
            model={items}
          ></Menu>
          <div style={{ overflow: "auto" }}>{children}</div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};
function SideBar() {
  return <div></div>;
}

export default MenuBar;
