import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserService } from "./UserService";
import { Button } from "primereact/button";

interface User {
  id: string;
  userName: string;
  companyID: string;
  companyName: string;
  userType: string;
}
interface Project {
  id: string;
  projectName: string;
}
const NewUser = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [users, setUsers] = useState<User[]>([]);

  const [userName, setUserName] = useState("");
  const [companyID, setCompanyID] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [userType, setUserType] = useState("");
  const [projects, setProjects] = useState<Project[]>([]);

  const textInput = useRef(null);

  //   useEffect(() => {
  //     UserService.getUserWithProjectData().then((data) => setUsers(data));
  //   }, []);

  // if (location.state !== null) {
  //   setUsers([location.state]);
  //   console.log(users);
  // }

  console.log(location.state);

  const handleAddUser = (e: any) => {
    e.preventDefault();
    if (!userName || !companyID || !companyName || !userType) {
      alert("All fields are required.");
    }
    const projectData = [
      {
        id: "1",
        projectName: "SAMS",
      },
      {
        id: "2",
        projectName: "SMAS2",
      },
    ];

    const userlist = [...location.state];

    let id = "";
    id = String(userlist.length + 1);
    const newUser = {
      id,
      userName,
      companyID,
      companyName,
      userType,
      projects: projectData,
    };

    userlist.push(newUser);
    // users.push(newUser);
    // setUsers(users);
    console.log(userlist);
    navigate("/userList", { state: userlist });
  };

  return (
    <div className="card flex justify-content-left">
      <form onSubmit={handleAddUser} className="flex flex-column gap-1">
        <h1>Add New User</h1>

        <label htmlFor="userName">User Name</label>
        <InputText
          className="p-inputtext-sm"
          id="userName"
          type="text"
          ref={textInput}
          name="userName"
          value={userName}
          required
          autoFocus
          onChange={(e) => setUserName(e.target.value)}
        />
        <label htmlFor="companyName">Company Name</label>
        <InputText
          className="p-inputtext-sm"
          id="companyName"
          type="text"
          required
          ref={textInput}
          name="companyName"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <label htmlFor="companyID">Company ID</label>
        <InputText
          className="p-inputtext-sm"
          id="companyID"
          type="text"
          required
          ref={textInput}
          name="companyID"
          value={companyID}
          onChange={(e) => setCompanyID(e.target.value)}
        />
        <label htmlFor="userType">User Type</label>
        <InputText
          className="p-inputtext-sm"
          id="userType"
          type="text"
          required
          ref={textInput}
          name="userType"
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
        />

        <div style={{ marginTop: "30px" }}>
          <Button type="submit">Add User</Button>
          <Button
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => navigate("/userList", { state: location?.state })}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NewUser;
4;
