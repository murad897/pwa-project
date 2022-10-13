import { useState } from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./RegisterStyles";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const styles = useStyles();

  const registerSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form className={styles.loginForm}>
        <div className={styles.title}>REGISTER</div>
        <div className={styles.formGroup}>
          <label htmlFor="exampleInputPassword1">first name</label>
          <input
            type="text"
            className={styles.formControll}
            id="exampleInputPassword1"
            placeholder="Password"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="exampleInputPassword1">last name</label>
          <input
            type="text"
            className={styles.formControll}
            id="exampleInputPassword1"
            placeholder="Password"
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
          />
        </div>
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
          <div className={styles.buttons} onClick={registerSubmitHandler}>
            <Link type="submit">register</Link>
          </div>
          <div className={styles.buttons}>
            <Link to="/login" type="submit">
              login
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
