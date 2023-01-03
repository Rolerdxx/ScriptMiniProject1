import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Slider from "@mui/material/Slider";
import { useState } from "react";
import Critem from "../item/critem";
import items from "./items";
import Typography from "@mui/material/Typography";


const cats = [
  {
    name: "JS",
  },
  {
    name: "HTML",
  },
  {
    name: "PHP",
  },
];

const AllCourses = () => {
  const [filter, setFilter] = useState(items);
  const [slidvalue, setslidvalue] = useState(0);

  const filterCat = (cat) => {
    const updated = items.filter((x) => x.type === cat);
    setFilter(updated);
  };

  const filterPrice = (price) => {
    setslidvalue(price);
    const updated = items.filter((x) => x.price <= Number(price));
    setFilter(updated);
  };

  const filterTitle = (title) => {
    const updated = items.filter((x) =>
      x.title.toLowerCase().includes(title.toLowerCase())
    );
    setFilter(updated);
  };

  return (
    <div className="container" id="maindiv">
      <div style={{ width: "100%" }} className="row">
        <div
          className="col-md-3"
          style={{ backgroundColor: "rgba(0,0,0,0.2)", paddingTop: "20px" }}>
            <div style={{backgroundColor: "rgba(255,255,255,0.6)", padding:"8px", borderRadius:"10px"}}>
            <TextField
              sx={{ color: "white",width:"100%" }}
              id="outlined-basic"
              label="Search"
              variant="outlined"
              onChange={(e) => {
                filterTitle(e.target.value);
              }}
            />
            </div>
            
          

          <p style={{ color: "white" }}>Category</p>

          <ButtonGroup
            style={{ width: "100%" }}
            orientation="vertical"
            aria-label="vertical outlined button group">
            <Button
              variant="contained"
              style={{ width: "100%" }}
              key="all"
              onClick={() => setFilter(items)}>
              ALL
            </Button>
            {cats.map((c) => {
              return (
                <Button
                  variant="contained"
                  style={{ width: "100%" }}
                  key={c.name}
                  onClick={() => filterCat(c.name)}>
                  {c.name}
                </Button>
              );
            })}
          </ButtonGroup>
          <p style={{ color: "white" }}>Price : {slidvalue} $</p>
          <Slider
            aria-label="Temperature"
            defaultValue={slidvalue}
            valueLabelDisplay="auto"
            step={10}
            marks
            min={0}
            max={100}
            onChange={(e, v) => filterPrice(v)}
          />
        </div>
        <div
          className="col-md-9"
          style={{ backgroundColor: "rgba(0,0,0,0.2)" }}>
          <div className="row">
            {filter.length === 0 ? (
              <Typography sx={{fontSize:"100px"}}>There Are No Items</Typography>
            ) : (
              filter.map((i) => {
                return (
                  <div className="col">
                    <Critem
                      className="items"
                      title={i.title}
                      price={i.price}
                      image={i.image}
                    />
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
