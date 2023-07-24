import React, { useState, useEffect } from "react";

import { UserService } from "./UserPage/UserService";
import { Card } from "primereact/card";
import "primeicons/primeicons.css";

import { useNavigate } from "react-router-dom";

interface User {
  id: string;
  userName: string;
  companyID: string;
  companyName: string;
  userType: string;
  projects?: Project[];
}

interface Project {
  id: string;
  projectName: string;
}

const Home = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    UserService.getUserWithProjectData().then((data) => setUsers(data));
  }, []);

  return (
    <>
      <div className="card flex justify-content-center ">
        <div>
          <Card
            className="m-3"
            style={{
              display: "flex",
              flexDirection: "column",
              height: "18vh",
              width: "10vw",
              backgroundColor: "ButtonFace",
              background: "linear-gradient(to left, #00800075, white)",
            }}
            title="Users"
            onClick={() => {
              navigate("/userList");
            }}
          >
            <p
              className=""
              style={{
                fontSize: 20,
                fontWeight: "bold",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Total: {users.length}
            </p>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Home;
