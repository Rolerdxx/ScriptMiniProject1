import React from "react";
import { useState } from "react";
import "./SignUp.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";

const SignUp = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [Cpassword, setCpassword] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [shouldRedirect,setRe] = useState(false);

  const navigate = useNavigate();

  React.useEffect(() => {
    if (shouldRedirect) {
      navigate('/ScriptMiniProject1/pro');
    }
  });

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

  return (
    <>
      <div className="container" id="d1">

        <div className="row">
        <h1 style={{ color: "black" ,width:"100%",textAlign:"center"}}>Sign Up</h1>
        </div>
        <div className="row ii">
        <TextField
            error={isActive}
            onChange={event => Upuser(event)}
            id={isActive ? "outlined-error-helper-text" : "outlined-required"}
            label="Username"
            helperText={isActive ? 'Username must be higher than 3 and lower than 25 letters' : ' '}
          />
        </div>
        <div className="row ii">
          <TextField
            error={isActive1}
            onChange={event => Upmail(event)}
            id={isActive1 ? "outlined-error-helper-text" : "outlined-required"}
            label="Email"
            helperText={isActive1 ? 'You have to respect the email format' : ' '}
          />
        </div>
        <div className="row ii">
        <TextField
            error={isActive2}
            onChange={event => Uppass(event)}
            id={isActive2 ? "outlined-error-helper-text" : "outlined-required"}
            label="Password"
            helperText={isActive2 ? 'Your password has to be lower than 8 letters and has aleast 1 uppercase 1 lowercase 1 number 1 and 1 non letter' : ' '}
          />
        </div>
        <div className="row ii">
        <TextField
            error={isActive3}
            onChange={event => Upcpass(event)}
            id={isActive3 ? "outlined-error-helper-text" : "outlined-required"}
            label="Confirm Password"
            helperText={isActive3 ? 'Its not the same password' : ' '}
          />
        </div>
        <div style={{width:"10%",margin:"auto"}}>
          <Button variant="contained" onClick={()=>!isActive&&!isActive1&&!isActive2&&!isActive3 ? setRe(true) : alert("Error")}>Sign Up</Button>
        </div>          
      </div>
    </>
  );
};

export default SignUp;
