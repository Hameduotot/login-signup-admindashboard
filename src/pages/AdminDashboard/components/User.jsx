import React, { useState } from "react";
import userList from "../../../server";
import InputAdminOrData from "./InputAdminOrData";

function User({ userData = {}, index = "#", setUserShow, addUser = false }) {
  const [editemode, setEditeMode] = useState(false);
  let { email, username, password, role, name } = userData;

  let initState = !!addUser
    ? {
        email: "",
        name: "",
        username: "",
        password: "",
        role: "user",
      }
    : {
        email,
        name,
        username,
        password,
        role,
      };

  const [userdata, setUserData] = useState(initState);

  const hanldeChage = (e) => {
    setUserData({ ...userdata, [e.target.name]: e.target.value });
  };

  const handleDeleteUser = () => {
    if (!addUser) {
      userList.deleteUser(username);
      const userAfterDelete = userList.getusers();
      setUserShow(userAfterDelete);
    } else if (addUser) {
      setEditeMode(true);
    }
  };

  const submitEdireMode = () => {
    userList.editeUser(
      userData,
      userdata.username,
      userdata.password,
      userdata.name,
      userdata.email,
      userdata.role
    );
    setEditeMode(false);
  };
  return (
    <>
      <tr>
        <td className="text-center">
          <button
            type="button"
            id="PopoverCustomT-1"
            className="btn btn-secondary btn-sm"
            onClick={handleDeleteUser}
          >
            {addUser ? "+" : "-"}
          </button>
        </td>
        <td className="text-center text-muted">{index + 1}</td>
        <td>
          <div className="widget-content p-0">
            <div className="widget-content-wrapper">
              <div className="widget-content-left mr-3">
                <div className="widget-content-left"></div>
              </div>
              <div className="widget-content-left flex2">
                <div className="widget-heading">
                  <InputAdminOrData
                    value={userdata.username}
                    name={"username"}
                    editemode={editemode}
                    onChange={hanldeChage}
                  />
                </div>
                <div className="widget-subheading opacity-7">
                  <InputAdminOrData
                    value={userdata.name}
                    name={"name"}
                    editemode={editemode}
                    onChange={hanldeChage}
                  />
                </div>
              </div>
            </div>
          </div>
        </td>

        <td className="text-center">
          <InputAdminOrData
            value={userdata.email}
            name={"email"}
            editemode={editemode}
            onChange={hanldeChage}
          />
        </td>
        <td className="text-center">
          <InputAdminOrData
            value={userdata.password}
            name={"password"}
            editemode={editemode}
            onChange={hanldeChage}
          />
        </td>

        <td className="text-center">
          <div
            className={`badge ${
              role === "admin"
                ? "badge-success"
                : role === "owner"
                ? "badge-danger"
                : "badge-warning"
            }`}
          >
            <InputAdminOrData
              value={userdata.role}
              name={"role"}
              editemode={editemode}
              onChange={hanldeChage}
            />
          </div>
        </td>
        <td className="text-center">
          {editemode ? (
            <button
              onClick={submitEdireMode}
              type="button"
              id="PopoverCustomT-1"
              className="btn btn-secondary btn-sm"
            >
              Ok
            </button>
          ) : (
            <button
              onClick={() => setEditeMode(true)}
              type="button"
              id="PopoverCustomT-1"
              className="btn btn-primary btn-sm"
            >
              Edite
            </button>
          )}
        </td>
      </tr>
    </>
  );
}

export default User;
