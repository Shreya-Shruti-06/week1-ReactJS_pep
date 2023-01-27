import React,{Component} from "react";


const Test=({user="",setName})=>{
  return (
  <>
    <h1>The name is :{user}</h1>
    <input type="text" onChange={(e)=> setName(e.target.value)} />
  </>)
}
export default Test;