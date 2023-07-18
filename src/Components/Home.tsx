import React, { useState, useEffect } from "react";
import MenuBar from "./MenuBar";
import { UserService } from "./UserPage/UserService";
import { Card } from "primereact/card";

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
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    UserService.getUserWithProjectData().then((data) => setUsers(data));
  }, []);

  return (
    <>
      <div className="card flex justify-content-center">
        <div>
          <Card title="User Counts">
            <p
              className="m-0"
              style={{
                fontSize: 25,
                fontWeight: "bold",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {users.length}
            </p>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Home;
