import React from "react";

function TotalUsers({userNum}) {
  return (
    <>
      <div className="col-md-6 col-xl-4">
        <div className="card mb-3 widget-content bg-midnight-bloom">
          <div className="widget-content-wrapper text-white">
            <div className="widget-content-left">
              <div className="widget-heading">Total Users</div>
            </div>
            <div className="widget-content-right">
              <div className="widget-numbers text-white">
                <span>{userNum}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TotalUsers;
