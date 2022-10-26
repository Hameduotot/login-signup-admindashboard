import React, { useState } from "react";
import userList from "../../../server";

function User({ userkey, index }) {
  const [editemode, setEdireMode] = useState(false);
  const [userdata, setUserData] = useState({
    email: "",
    name: "",
    username: "",
    password: "",
  });
  const { email, username, pass, role, name } = userList.getuser(userkey);
  const hanldeChage = (e) => {
    setUserData({ ...userdata, [e.target.name]: e.target.value });
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
                    username
                  ) : (
                    <input type={"text"} onChange={hanldeChage} />
                  )}
                </div>
                <div className="widget-subheading opacity-7">
                  {editemode === false ? (
                    name
                  ) : (
                    <input name={name} type={"text"} onChange={hanldeChage} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </td>

        <td className="text-center">
          {editemode === false ? (
            email
          ) : (
            <input type={"text"} onChange={hanldeChage} />
          )}
        </td>
        <td className="text-center">
          {editemode === false ? (
            pass
          ) : (
            <input type={"text"} onChange={hanldeChage} />
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
            {role}
          </div>
        </td>
        <td className="text-center">
          <button
            onClick={() => setEdireMode(true)}
            type="button"
            id="PopoverCustomT-1"
            className="btn btn-primary btn-sm"
          >
            E
          </button>
        </td>
        <td className="text-center">
          <button
            type="button"
            id="PopoverCustomT-1"
            className="btn btn-secondary btn-sm"
            onClick={() => userList.deleteUser(userkey)}
          >
            X
          </button>
        </td>
      </tr>
    </>
  );
}

export default User;
