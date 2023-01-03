import "./body.css";
import Critem from "../item/critem";
import Button from "@mui/material/Button";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import items from "../AllCourses/items";

const Body = () => {
  const [shouldRedirect,setRe] = useState(false);

  const navigate = useNavigate();

  React.useEffect(() => {
    if (shouldRedirect) {
      navigate('/ScriptMiniProject1/items');
    }
  });

  return (
    <div style={{ marginTop: "20px" }} className="container">
      <div className="row" id="divtst">
        <div id="blackdiv">
          <h1>Eat(), Sleep(), Code(), Repeat()</h1>
          <p>While You Are Alive</p>
          <Button variant="contained" size="medium" onClick={()=>setRe(true)}>
            COURSES LIST
          </Button>
        </div>
      </div>
      <div className="row align-items-center" style={{ width: "12%",margin:"auto" }}>
        <p id="Courses">
          <span id="slash">/ </span>Courses
        </p>
      </div>
      <div className="row align-items-center" id="crrow">
        <div className="col">
          <Critem title={items[0].title} price={items[0].price} image={items[0].image}/>
        </div>
        <div className="col">
        <Critem title={items[1].title} price={items[1].price} image={items[1].image}/>
        </div>
        
      </div>
      <div
        className="row align-items-center"
        style={{ width: "12%", margin: "auto" }}>
        <Button variant="contained" size="medium" onClick={()=>setRe(true)}>
            COURSES LIST
          </Button>
      </div>
      <div className="row align-items-center" style={{ width: "100%" }}>
        <p style={{width: "20%", margin: "auto" ,color:"grey"}}>
          Bilal Motassim
        </p>
      </div>
    </div>
  );
};

export default Body;
