import React, { useEffect, useState } from "react";
import TotalUsers from "./components/TotalUsers";
import User from "./components/User";
import { Helmet } from "react-helmet";
import userList from "../../server";

function AdminDashboad({ auth }) {
  const users = Object.keys(userList.getusers());
  const [usershow, setUserShow] = useState(users);

  useEffect(() => {
    setUserShow(users);
  }, []);

  if (auth)
    return (
      <>
        <Helmet>
          <title>Dashboard</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no"
          />
          <meta
            name="description"
            content="This is an example dashboard created using build-in elements and components."
          />
          <meta name="msapplication-tap-highlight" content="no" />
          <link
            href="https://demo.dashboardpack.com/architectui-html-free/main.css"
            rel="stylesheet"
          />
        </Helmet>

        <>
          <TotalUsers userNum={users.length} />

          <div className="main-card mb-3 card">
            <div className="card-header">
              Active Users
              <div className="btn-actions-pane-right">
                <div role="group" className="btn-group-sm btn-group"></div>
              </div>
            </div>
            <div className="table-responsive">
              <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                <thead>
                  <tr>
                    <th className="text-center">#</th>
                    <th>Users</th>
                    <th className="text-center">Email</th>
                    <th className="text-center">Password</th>
                    <th className="text-center">Status</th>
                    <th className="text-center">Edite</th>
                    <th className="text-center">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {usershow.map((user, index) => (
                    <User
                      key={user}
                      userkey={user}
                      index={index}
                      onDelete={() =>
                        setUserShow(usershow.filter((u) => user !== u))
                      }
                    />
                  ))}
                </tbody>
              </table>
            </div>
            <div className="d-block text-center card-footer"></div>
          </div>
        </>
      </>
    );
}

export default AdminDashboad;
