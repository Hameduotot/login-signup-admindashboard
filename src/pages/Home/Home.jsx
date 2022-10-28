import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <p>
        <button
          id="destroyInit"
          className="init"
          onClick={() => navigate("/login")}
        >
          <span>Login</span>
          <span>Init</span>
        </button>
      </p>
      <p>
        <button
          id="destroyInit"
          className="init"
          onClick={() => navigate("/signup")}
        >
          <span>SignUp</span>
          <span>Init</span>
        </button>
      </p>
    </div>
  );
}

export default Home;
