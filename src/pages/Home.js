import React from 'react'
import food from '../db/food.json';
import '../styles/Home.css';
const Home = () => {

  return (
   <div className="home">

<div className="cards">
<div className="searchbar">
<input type="text" placeholder='🔍 search here...' />
</div>
<h2>Food</h2>
    <div className="food">
       
{food.food.map((item,index)=>(
 
 
  <div className="container" key={index}>
   <div className="smallcard">

   </div>
    
    <b>{item.name}</b>
    <p>${item.price}</p>
    </div>
   
    ))

  }
  </div>
  <h2>Drink</h2>
    <div className="drink">
    
    {food.drink.map((item,index)=>(
  <div className="container" key={index}>
     <div className="smallcard">
     
      </div>
   <b>{item.name}</b>
    <p >${item.price}</p>
    </div>
    ))

  }
    </div>
    </div>
  

   </div>
  )
}

export default Home