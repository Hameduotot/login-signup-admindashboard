import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../components/formStyles";
import userList from "./../server";
import "./Login.css";

function Login({ setauth, setauthAdmin }) {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [isLogin, setIsLogin] = useState(null);

  const hanldeChage = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLogin(userList.login(user.username, user.password));
  };

  useEffect(() => {
    if (isLogin) {
      if (userList.getuser(user.username).role === "admin") {
        navigate("/admindashboard");
        setauthAdmin(true);
      } else {
        navigate("/dashboard");
        setauth(true);
      }
    }
  }, [isLogin]);

  return (
    <div>
      <form onSubmit={handleSubmit} className="container">
        <Input
          type={"text"}
          name="username"
          onChange={hanldeChage}
          placeholder="username"
          value={user.username}
        />
        <Input
          type={"password"}
          name="password"
          onChange={hanldeChage}
          placeholder="password"
          value={user.password}
        />
        <Button>Login</Button>
      </form>
      {isLogin === false ? (
        <p className="warnning">یوزرنیم یا پسورد اشتباه میباشد</p>
      ) : null}
    </div>
  );
}

export default Login;
