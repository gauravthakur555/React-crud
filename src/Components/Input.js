import React, { useState } from 'react'

const Input = ({addData}) => {
    const[title, setTitle]= useState("");

    const handle=(e)=>{
        e.preventDefault();
        addData(title);
        setTitle('');   
    }
 
  return (
    <div>
      <form onSubmit={handle}>
        <label>Name</label>
        <input type='text' required value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <input type='submit' value="ADD"/>


      </form>
    </div>
  )
}

export default Input
