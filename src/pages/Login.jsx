import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../components/formStyles";
import { useAuth } from "../context/auth";
import userList from "./../server";
import "./Login.css";

function Login(
 
) {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const auth = useAuth();
  const [isLogin, setIsLogin] = useState(null);

  const hanldeChage = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const isLoggedIn = userList.login(user.username, user.password);

    let role = "";
    if (isLoggedIn) {
      role = userList.getuser(user.username).role;
      auth.setUser({
        isAuthenticated: isLoggedIn,
        role,
      });
      navigate(role === "admin" ? "/admindashboard" : "/dashboard");
    }

    // setIsLogin(userList.login(user.username, user.password));
  };

  // useEffect(() => {
  //   if (isLogin) {
  //     if (userList.getuser(user.username).role === "admin") {
  //       navigate("/admindashboard");
  //       setauthAdmin(true);
  //     } else {
  //       navigate("/dashboard");
  //       setauth(true);
  //     }
  //   }
  // }, [isLogin]);

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
