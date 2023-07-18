import React, { useEffect, useRef, useState } from "react";
import { UserService } from "./UserService";
import {
  DataTable,
  DataTableExpandedRows,
  DataTableRowEvent,
  DataTableValueArray,
} from "primereact/datatable";
import { Column } from "primereact/column";
import "./User.css";
import { Rating } from "primereact/rating";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";
import { Toast } from "primereact/toast";
import { useLocation, useNavigate } from "react-router-dom";
import { Dialog } from "primereact/dialog";
import { Toolbar } from "primereact/toolbar";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { classNames } from "primereact/utils";
import MenuBar from "../MenuBar";

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

const UserList = () => {
  let emptyUser: User = {
    id: "",
    userName: "",
    companyID: "",
    companyName: "",
    userType: "",
  };

  const navigate = useNavigate();
  const location = useLocation();

  const [users, setUsers] = useState<User[]>([]);
  const [expandedRows, setExpandedRows] = useState<
    DataTableExpandedRows | DataTableValueArray | undefined
  >(undefined);
  const toast = useRef<Toast>(null);

  const [user, setUser] = useState<User>(emptyUser);
  const [deleteUserDialog, setDeleteUserDialog] = useState<boolean>(false);

  const [editUserDialog, setEditUserDialog] = useState<boolean>(false);

  const [selectedUser, setSelectedUser] = useState<User>(emptyUser);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  //let _products = [...location.state];
  console.log("printing " + location.state);
  useEffect(() => {
    if (location.state == null) {
      console.log("printing  inside useeffect");
      UserService.getUserWithProjectData().then((data) => setUsers(data));
    } else {
      console.log("printing  else");
      setUsers([...location.state]);
    }
  }, [location?.state]);

  const rowExpansionTemplate = (data: User) => {
    return (
      <div className="p-3">
        <h5>Projects for {data.userName}</h5>
        <DataTable value={data.projects}>
          <Column field="id" header="Id" sortable></Column>
          <Column field="projectName" header="Project Name" sortable></Column>
        </DataTable>
      </div>
    );
  };
  const allowExpansion = (rowData: User) => {
    return rowData.projects!.length >= 0;
  };

  const onRowExpand = (event: DataTableRowEvent) => {
    toast.current?.show({
      severity: "info",
      summary: "User Expanded",
      detail: event.data.name,
      life: 1000,
    });
  };

  const onRowCollapse = (event: DataTableRowEvent) => {
    toast.current?.show({
      severity: "success",
      summary: "User Collapsed",
      detail: event.data.name,
      life: 1000,
    });
  };

  const confirmDeleteUser = (user: User) => {
    setUser(user);
    setDeleteUserDialog(true);
  };
  const hideDeleteUserDialog = () => {
    setDeleteUserDialog(false);
  };

  const deleteUser = () => {
    let _users = users.filter((val) => val.id !== user.id);

    setUsers(_users);
    setDeleteUserDialog(false);
    setUser(emptyUser);
    toast.current?.show({
      severity: "success",
      summary: "Successful",
      detail: "User Deleted",
      life: 3000,
    });
  };

  const deleteUserDialogFooter = (
    <React.Fragment>
      <Button
        label="No"
        icon="pi pi-times"
        outlined
        onClick={hideDeleteUserDialog}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        severity="danger"
        onClick={deleteUser}
      />
    </React.Fragment>
  );

  const handleEdit = (user: User) => {
    const [user1] = users.filter((user1) => user1.id == user.id);
    setSelectedUser({ ...user1 });
    setIsEditing(true);
    // actionEditUser();
    console.log("inside handle edit");
  };

  const editUser = (user: User) => {
    setUser({ ...user });
    setEditUserDialog(true);
  };

  // const actionEditUser = () => {
  //   console.log("action handle edit");
  //   return <div>{isEditing &&
  //   <EditUser setIsEditing={setIsEditing} />}</div>;
  // };

  const actionBodyTemplate1 = (rowData: User) => {
    return (
      <React.Fragment>
        <Button
          icon="pi pi-pencil"
          rounded
          outlined
          className="mr-2"
          tooltip={"Edit"}
          tooltipOptions={{
            position: "bottom",
            mouseTrack: true,
            mouseTrackTop: 15,
          }}
          onClick={() => editUser(rowData)}
        />
        <Button
          style={{ marginLeft: "12px" }}
          icon="pi pi-trash"
          rounded
          outlined
          severity="danger"
          tooltip={"Delete "}
          tooltipOptions={{
            position: "bottom",
            mouseTrack: true,
            mouseTrackTop: 15,
          }}
          onClick={() => confirmDeleteUser(rowData)}
        />
      </React.Fragment>
    );
  };

  const leftToolbarTemplate = () => {
    return (
      <div className="flex flex-wrap gap-2">
        <Button
          label="New User"
          icon="pi pi-plus"
          severity="success"
          onClick={() => navigate("/newUser", { state: users })}
        />
      </div>
    );
  };
  const hideDialog = () => {
    setSubmitted(false);
    setEditUserDialog(false);
  };

  const onInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    userName: string
  ) => {
    const val = (e.target && e.target.value) || "";
    let _user = { ...user };

    console.log("------------" + val);

    // @ts-ignore
    _user[`${userName}`] = val;

    setUser(_user);
  };

  const findIndexById = (id: string) => {
    let index = -1;

    for (let i = 0; i < users.length; i++) {
      if (users[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  };

  const saveUser = () => {
    setSubmitted(true);

    if (user.userName.trim()) {
      console.log("inside save " + user.userName.trim());
      let _users = [...users];
      let _user = { ...user };

      if (user.id) {
        const index = findIndexById(user.id);

        _users[index] = _user;
        toast.current?.show({
          severity: "success",
          summary: "Successful",
          detail: "User Updated",
          life: 3000,
        });
      }

      setUsers(_users);
      setEditUserDialog(false);
      setUser(emptyUser);
    }
  };

  const usertDialogFooter = (
    <React.Fragment>
      <Button label="Cancel" icon="pi pi-times" outlined onClick={hideDialog} />
      <Button label="Save" icon="pi pi-check" onClick={saveUser} />
    </React.Fragment>
  );

  return (
    <>
      <Toast ref={toast} />
      <div className="card">
        <Toolbar className="mb-4" left={leftToolbarTemplate}></Toolbar>
        <DataTable
          value={users}
          expandedRows={expandedRows}
          onRowToggle={(e) => setExpandedRows(e.data)}
          onRowExpand={onRowExpand}
          onRowCollapse={onRowCollapse}
          rowExpansionTemplate={rowExpansionTemplate}
          dataKey="id"
          tableStyle={{ minWidth: "60rem" }}
        >
          <Column expander={allowExpansion} style={{ width: "5rem" }} />
          <Column field="id" header="ID"></Column>
          <Column field="userName" header="Name"></Column>
          <Column field="companyID" header="Company ID"></Column>
          <Column field="companyName" header="Company Name"></Column>
          <Column field="userType" header="User Type"></Column>
          <Column
            header="Action"
            body={actionBodyTemplate1}
            exportable={false}
            style={{ minWidth: "12rem" }}
          ></Column>
        </DataTable>
        <div className="btnHome">
          <Button severity="success" onClick={() => navigate("/home")}>
            Back to Home
          </Button>
        </div>
      </div>

      <Dialog
        visible={deleteUserDialog}
        style={{ width: "32rem" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
        header="Confirm"
        footer={deleteUserDialogFooter}
        onHide={hideDeleteUserDialog}
      >
        <div className="confirmation-content">
          <i
            className="pi pi-exclamation-triangle mr-3"
            style={{ fontSize: "2rem" }}
          />
          {user && (
            <span>
              Are you sure you want to delete <b>{user.userName}</b>?
            </span>
          )}
        </div>
      </Dialog>

      <Dialog
        visible={editUserDialog}
        style={{ width: "32rem" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
        header="User Details"
        modal
        className="p-fluid"
        footer={usertDialogFooter}
        onHide={hideDialog}
      >
        <div className="field">
          <label htmlFor="userName" className="font-bold">
            User Name
          </label>
          <InputText
            id="userName"
            onChange={(e) => onInputChange(e, "userName")}
            required
            value={user.userName}
            className={classNames({
              "p-invalid": submitted && !user.userName,
            })}
          />
          {submitted && !user.userName && (
            <small className="p-error"> Name is required.</small>
          )}
        </div>

        <div className="field">
          <label htmlFor="userType" className="font-bold">
            User Type
          </label>
          <InputText
            id="userType"
            onChange={(e) => onInputChange(e, "userType")}
            required
            value={user.userType}
            className={classNames({
              "p-invalid": submitted && !user.userType,
            })}
          />
          {submitted && !user.userType && (
            <small className="p-error">User Type is required.</small>
          )}
        </div>
      </Dialog>
    </>
  );
};

export default UserList;
