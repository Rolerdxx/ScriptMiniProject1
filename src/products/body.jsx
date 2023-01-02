import "./body.css";
import Critem from "../item/critem";
import Button from "@mui/material/Button";
import img from "./phpCRUD.png"

const Body = () => {
  return (
    <div style={{ marginTop: "20px" }} className="container">
      <div className="row" id="divtst">
        <div id="blackdiv">
          <h1>Eat(), Sleep(), Code(), Repeat()</h1>
          <p>While You Are Alive</p>
          <Button variant="contained" size="medium" href="/ScriptMiniProject1/items">
            COURSES LIST
          </Button>
        </div>
      </div>
      <div className="row align-items-center" style={{ width: "100%" }}>
        <p id="Courses">
          <span id="slash">/ </span>Courses
        </p>
      </div>
      <div className="row align-items-center" id="crrow">
        <div className="col">
          <Critem title="JS" price="8$" img={img}/>
        </div>
        <div className="col">
          <Critem title="JS" price="8$"/>
        </div>
        
      </div>
      <div
        className="row align-items-center"
        style={{ width: "100%", margin: "20px" }}>
        <Button variant="contained" size="medium" href="/ScriptMiniProject1/items">
            COURSES LIST
          </Button>
      </div>
      <div className="row align-items-center" style={{ width: "100%" }}>
        <p style={{ color: "black", width: "20%", margin: "auto" }}>
          Bilal Motassim
        </p>
      </div>
    </div>
  );
};

export default Body;
