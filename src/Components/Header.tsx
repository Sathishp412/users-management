import React from "react";
import "primeicons/primeicons.css";

const Header = () => {
  return (
    <div
      className="pi pi-users"
      style={{
        height: 60,
        backgroundColor: "black",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bold",
        fontSize: 40,
        width: "auto",
      }}
    >
      User Management
    </div>
  );
};

export default Header;
