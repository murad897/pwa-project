import React from "react";
import axios from "axios";
import { useStyles } from "./LoginStyles";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const styles = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginEvent = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form className={styles.loginForm}>
        <div className={styles.title}>LOGIN</div>
        <div className={styles.formGroup}>
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className={styles.formControll}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className={styles.formControll}
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.loginButtons}>
          <div className={styles.buttons} onClick={loginEvent}>
            <Link type="submit">login</Link>
          </div>
          <div className={styles.buttons}>
            <Link to="/register" type="submit">
              register
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
