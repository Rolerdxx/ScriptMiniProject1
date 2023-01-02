import React from "react";
import { useState } from "react";
import "./SignUp.css";
import img from "./unnamed.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const SignUp = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [Cpassword, setCpassword] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);

  const Upuser = (e) => {
    setusername(e.target.value);
    if (username.length < 3 || username.length > 25 || username==="") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const Upmail = (e) => {
    setemail(e.target.value);
    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    if (!regex.test(email) || email==="") {
      setIsActive1(true);
    } else {
      setIsActive1(false);
    }
  };

  const Uppass = (e) => {
    setpassword(e.target.value);
    let regex = new RegExp("(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*W)");
    if (password.length <= 8 || !regex.test(password) || password==="") {
      setIsActive2(true);
    } else {
      setIsActive2(false);
    }
  };

  const Upcpass = (e) => {
    setCpassword(e.target.value);
    if (password !== Cpassword || Cpassword==="") {
      setIsActive3(true);
    } else {
      setIsActive3(false);
    }
  };

  const sub = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <img src={img} alt="Logo" />
      <div id="d1">
        <form onSubmit={sub}>
          <h1 style={{ color: "black" }}>Sign Up</h1>
          <TextField
            error={isActive}
            onChange={event => Upuser(event)}
            id={isActive ? "outlined-error-helper-text" : "outlined-required"}
            label="Username"
            helperText={isActive ? 'Username must be higher than 3 and lower than 25 letters' : ' '}
          />
          <TextField
            error={isActive1}
            onChange={event => Upmail(event)}
            id={isActive1 ? "outlined-error-helper-text" : "outlined-required"}
            label="Email"
            helperText={isActive1 ? 'You have to respect the email format' : ' '}
          />
          <TextField
            error={isActive2}
            onChange={event => Uppass(event)}
            id={isActive2 ? "outlined-error-helper-text" : "outlined-required"}
            label="Password"
            helperText={isActive2 ? 'Your password has to be lower than 8 letters and has aleast 1 uppercase 1 lowercase 1 number 1 and 1 non letter' : ' '}
          />
          <TextField
            error={isActive3}
            onChange={event => Upcpass(event)}
            id={isActive3 ? "outlined-error-helper-text" : "outlined-required"}
            label="Confirm Password"
            helperText={isActive3 ? 'Its not the same password' : ' '}
          />
          <br />
          <Button variant="contained" href="/ScriptMiniProject1/pro">Sign Up</Button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
