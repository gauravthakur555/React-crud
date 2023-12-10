import React, { useState } from 'react'
import Input from './Input';

const Data = () => {
    const [check, setCheck]=useState([
        {name:"Gaurav",id:1}
    ]);
    const addData=(name,id)=>{
        setCheck([...check,{name,id}])
    }
  return (
    <div>
      <ul>
        {check.map(check=>{
            return(<li key={check.id}>{check.name}</li>)
        })}
      </ul>
      <Input addData={addData}/>
    </div>
  )
}

export default Data
