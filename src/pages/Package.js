import React, { useState } from 'react'
import '../styles/Package.css'
const Package = () => {
  const [id,setId]=useState('AAA1');
  const [pname,setPname]=useState('Cappucino');
  const [cate,setCate]=useState('Drink');
  const [price,setPrice]=useState('$3');
  const [desc,setDesc]=useState('A Cappucino is an espreso-based coffe drink that originated in Italy and is traditionally prepared with boiled milk');
  const changeid=(e)=>{
    setId(e.target.value);
  }
  const changecate=(e)=>{
    setCate(e.target.value);
  }
  const changedesc=(e)=>{
    setDesc(e.target.value);
  }
  const changeprice=(e)=>{
    setPrice(e.target.value);
  }
  const changepname=(e)=>{
    setPname(e.target.value);
  }
  const btnclick=()=>{
    alert('button clicked')
  }
  return (
    <div className="package">
      <h1>Edit Product</h1>
      <form className='form' >
        <div className="id">
        <label htmlFor="id" className='label'> <h2 className='h2'>ID</h2></label>
        <input type="text" id="id" className='input' name="id" value={id} onChange={changeid} />
        </div>
        <div className="photo">
          <div className="frame">

          </div>
          <div className="text">
          <label htmlFor="picture"><h2>select a picture</h2></label>
        <input type="file" />
        </div>
        </div>
        <div className="product">
        <label htmlFor="pname" className='label'> <h2>Product Name</h2></label>
        <input type="text" id="pname" className='input' name="pname" value={pname} onChange={changepname} />
        
        </div>
        <div className="categ">
        <label htmlFor="cate" className='label'> <h2>Category</h2></label>
        <input type="text" id="cate" className='input' name="cate" value={cate} onChange={changecate} />
        
        </div>
        <div className="price">
        <label htmlFor="price" className='label'> <h2>Price</h2></label>
        <input type="text" id="price" className='input' name="price" value={price} onChange={changeprice} />
        
        </div>
        <div className="desc">
        <label htmlFor="desc" className='label'> <h2>Description</h2></label>
        <input type='text' id="desc" className='idesc' value={desc} onChange={changedesc} />
        
        </div>
        
      </form>
      <div className="submit">
          <button className='btn1' onClick={btnclick}>Save</button>
          <button className='btn2' onClick={btnclick}>Cancel</button>
        </div>
    </div>
  )
}

export default Package