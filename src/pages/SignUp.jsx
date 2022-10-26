import React, { useState } from "react";
import { Button, Input } from "../components/formStyles";
import userList from "./../server";
import "./Login.css";
function SignUp() {
  const [user, setUser] = useState({
    email: "",
    name: "",
    username: "",
    password: "",
  });
  const [emailValidat, setEmailValidat] = useState(null);

  const hanldeChage = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    userList.addUser(user.username, user.password, user.name, user.email);
  };

  const handleFocusOut = () => {
    console.log(user.email);
    const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const output = user.email?.match(pattern);
    if (output) {
      setEmailValidat(true);
    } else {
      setEmailValidat(false);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="container">
        <Input
          type={"text"}
          name="name"
          onChange={hanldeChage}
          placeholder="name"
          value={user.name}
        />
        <Input
          type={"text"}
          name="email"
          onChange={hanldeChage}
          onBlur={handleFocusOut}
          placeholder="email"
          value={user.email}
        />
        {emailValidat === false ? (
          <p className="warnning">ایمیل نامعتبر است</p>
        ) : null}
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
        <Button>SignUp</Button>
      </form>
    </div>
  );
}

export default SignUp;
