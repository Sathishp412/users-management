import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import React, { useState } from "react";
import ReactDOM, { render } from "react-dom";

import { Password } from "primereact/password";
import "primereact/resources/themes/vela-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import RouteConfig from "../RouteConfig";
import "./Login.css";
import Header from "../Header";
const Login = () => {
  // const navigate = useNavigate();
  let [uname, setUname] = useState("");
  let [pwd, setPwd] = useState("");

  const doLogin = () => {
    if (uname === "" || pwd === "") {
      alert("username or password can't blank");
      return;
    }
    if (uname === "admin" && pwd === "admin") {
      console.log("inside the condition");
      localStorage.setItem("uname", uname);
      localStorage.setItem("Isauth", "true");
      render(<RouteConfig></RouteConfig>, document.getElementById("root"));
      //navigate("/routConfig");
    } else {
      alert("Login not successful try again...");
      return;
    }
  };

  const handleReset = () => {
    setUname("");
    setPwd("");
  };

  return (
    <>
      <Header></Header>
      <div className="container">
        <div className="card flex justify-content-center flex flex-column gap-2">
          <h1>Login Page</h1>
          <div className="flex flex-column gap-2">
            <label htmlFor="uname" className="font-bold">
              User Name
            </label>
            <InputText
              id="uname"
              value={uname}
              required
              onChange={(e) => {
                setUname(e.target.value);
              }}
            ></InputText>
          </div>
          <div className="flex flex-column gap-2">
            <label htmlFor="pwd" className="font-bold">
              Password
            </label>
            <Password
              id="pwd"
              required
              value={pwd}
              onChange={(e) => {
                setPwd(e.target.value);
              }}
            ></Password>
          </div>
          <div style={{ marginTop: "30px" }}>
            <Button label="Login" outlined onClick={doLogin} />
            <Button
              style={{ marginLeft: "15px" }}
              outlined
              label="Reset"
              onClick={handleReset}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
