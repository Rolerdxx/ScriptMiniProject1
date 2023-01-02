import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Slider from "@mui/material/Slider";
import { useState } from "react";
import Critem from "../item/critem";
import items from "./items"

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

  
 
  const filterCat = (cat) => {
    const updated = items.filter((x) => x.type === cat);
    setFilter(updated);
  };

  const filterPrice = (price) => {
    console.log(price);
    const updated = items.filter((x) => x.price<=Number(price))
    setFilter(updated);
  };

  const filterTitle = (title) => {
    const updated = items.filter((x) => x.title.toLowerCase().includes(title.toLowerCase()))
    setFilter(updated);
  };

  return (
    <div className="container" id="maindiv">
      <div style={{ width: "100%" }} className="row">
        <div className="col-md-3" style={{backgroundColor:"rgba(0,0,0,0.2)", borderRadius:"10px"}}>
          <TextField id="outlined-basic" label="Search" variant="outlined" onChange={(e)=>{filterTitle(e.target.value)}}/>
          <p style={{ color: "black" }}>Category</p>

          <ButtonGroup
            style={{ width: "100%" }}
            orientation="vertical"
            aria-label="vertical outlined button group">
            <Button
              style={{ width: "100%" }}
              key="all"
              onClick={() => setFilter(items)}>
              ALL
            </Button>
            {cats.map((c) => {
              return (
                <Button
                  style={{ width: "100%" }}
                  key={c.name}
                  onClick={() => filterCat(c.name)}>
                  {c.name}
                </Button>
              );
            })}
          </ButtonGroup>
          <p style={{ color: "black" }}>Price</p>
          <Slider
            aria-label="Temperature"
            defaultValue={100}
            valueLabelDisplay="auto"
            step={10}
            marks
            min={0}
            max={100}
            onChange={(e,v) => filterPrice(v)}
          />
        </div>
        <div className="col-md-9" style={{backgroundColor:"rgba(0,0,0,0.2)", borderRadius:"10px"}}>
        <div className="row" style={{width:"100%"}}>
          {filter.map((i) => {
            return (            
                <div className="col" style={{width:"100%"}}>
                    <Critem className="items" title={i.title} price={i.price} image={i.image}/>
                </div>
            );
          })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
