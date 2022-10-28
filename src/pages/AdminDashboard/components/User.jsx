import React, { useState } from "react";
import userList from "../../../server";

function User({ userkey, index, onDelete }) {
  const [editemode, setEdireMode] = useState(false);
  let { email, username, pass, role, name } = userList.getuser(userkey);

  const [userdata, setUserData] = useState({
    email,
    name,
    username,
    password: pass,
    role,
  });

  const hanldeChage = (e) => {
    setUserData({ ...userdata, [e.target.name]: e.target.value });
  };

  const submitEdireMode = () => {
    userList.editeUser(
      userkey,
      userdata.username,
      userdata.password,
      userdata.name,
      userdata.email,
      userdata.role
    );
    setEdireMode(false);
  };
  return (
    <>
      <tr>
        <td className="text-center text-muted">{index + 1}</td>
        <td>
          <div className="widget-content p-0">
            <div className="widget-content-wrapper">
              <div className="widget-content-left mr-3">
                <div className="widget-content-left"></div>
              </div>
              <div className="widget-content-left flex2">
                <div className="widget-heading">
                  {editemode === false ? (
                    userdata.username
                  ) : (
                    <input
                      name="username"
                      type={"text"}
                      onChange={hanldeChage}
                      value={userdata.username}
                    />
                  )}
                </div>
                <div className="widget-subheading opacity-7">
                  {editemode === false ? (
                    userdata.name
                  ) : (
                    <input
                      name="name"
                      type={"text"}
                      onChange={hanldeChage}
                      value={userdata.name}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </td>

        <td className="text-center">
          {editemode === false ? (
            userdata.email
          ) : (
            <input
              name="email"
              type={"text"}
              onChange={hanldeChage}
              value={userdata.email}
            />
          )}
        </td>
        <td className="text-center">
          {editemode === false ? (
            userdata.password
          ) : (
            <input
              name="password"
              type={"text"}
              onChange={hanldeChage}
              value={userdata.password}
            />
          )}
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
            {editemode === false ? (
              role
            ) : (
              <input
                name="role"
                type={"text"}
                onChange={hanldeChage}
                value={userdata.role}
              />
            )}
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
              onClick={() => setEdireMode(true)}
              type="button"
              id="PopoverCustomT-1"
              className="btn btn-primary btn-sm"
            >
              Edite
            </button>
          )}
        </td>
        <td className="text-center">
          <button
            type="button"
            id="PopoverCustomT-1"
            className="btn btn-secondary btn-sm"
            onClick={() => {
              onDelete();
              userList.deleteUser(userkey);
            }}
          >
            X
          </button>
        </td>
      </tr>
    </>
  );
}

export default User;
