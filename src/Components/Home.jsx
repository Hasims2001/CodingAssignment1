import React, { useContext } from 'react'
import { getData } from '../Context/Api';
import { StoredContext } from '../App';

export const Home = () => {
  let {userData, setUserData} = useContext(StoredContext)
    const handleSearch = async()=>{
      const username = document.querySelector("#username");
      if(username.value !== ""){
        let obj = await getData(username.value)
        if(!obj.issue){
          setUserData(obj.data)
        }else{
          alert(obj.data)
        }
      }else{
        alert('please write the username.')
      }
    }   
  return (
    <div style={{padding:"3rem 0", display: "flex", justifyContent: "center", alignItems:"center"}}>
        <input type='text' id='username' placeholder='Github username...'></input>
        <button onClick={handleSearch}>Search</button>
    </div>
  )
}
