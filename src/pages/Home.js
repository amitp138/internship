import React, { useState } from "react";
import food from "../db/food.json";
import "../styles/Home.css";
const Home = () => {
  const [style,setStyle]=useState('catlink')
  const click=()=>{
    setStyle('catlink2')
  }
 
 
  return (
    <div className="home">
      <div className="cards">
        <div className="searchbar">
          <input type="text" placeholder="🔍 search here..." />
        </div>
        <nav className="categories">
          <ul>
           <li className={style} onClick={click} >All</li>
           <li className='catlink' >Food</li>
           <li className='catlink'>Drink</li>
           <li className='catlink' >Snack</li>
           <li className='catlink'>Packages</li>
          </ul>
        </nav>
        <h2>Food</h2>
        <div className="food">
          {food.food.map((item, index) => (
            <div className="container" key={index}>
              <div className="smallcard"></div>

              <b>{item.name}</b>
              <p>${item.price}</p>
            </div>
          ))}
        </div>
        <h2>Drink</h2>
        <div className="drink">
          {food.drink.map((item, index) => (
            <div className="container" key={index}>
              <div className="smallcard"></div>
              <b>{item.name}</b>
              <p>${item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
