import { React, useState } from "react";
import data from "./home_test"
import Restaurant from "./home_components/restaurantDetails"
import BottomTab from "../common/bottomTab/bottomTab"
import "./home.css"
import TextField from "@mui/material/TextField";


export default function App() {
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
      //convert input text to lower case
      var lowerCase = e.target.value.toLowerCase();
      setInputText(lowerCase);
    };
  
    return (
        <>
      <div className="main">
        <h1>React Search</h1>
        <div className="search">
          <TextField
            id="outlined-basic"
            onChange={inputHandler}
            variant="outlined"
            fullWidth
            label="Search"
          />
        </div>
        <Restaurant input={inputText} />
      </div>
        <Home></Home>
      </>
    );
  }



export function Home() {
    // const restaurant = data.map(item => {
    //     return (
    //         <div>
    //             <Restaurant
    //                 key={item.id}
    //                 {...item}
    //             />
    //         </div>
    //     )
    // })        
    
    return (
        <div>
            <div>
                <section className="restaurant-list">
                    {/* {restaurant} */}
                </section>
            </div>
            <div>
                <BottomTab></BottomTab>
            </div>
        </div>
    )
}
