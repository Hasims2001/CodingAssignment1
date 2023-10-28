import React, { useContext } from 'react'
import { StoredContext } from '../App';

export const RepoCard = () => {
    const {userData, setUserData} = useContext(StoredContext);
  return (
    <div style={{width: "80vw", margin: "auto"}}>
        {userData.length > 0 && userData.map((item, ind)=>(
            <div key={ind} style={{margin: '1rem', borderRadius: "1rem", padding: "2rem 1rem", backgroundColor: '#EFEFEF', display: "flex", gap: "1.5rem"}}>
                <img src={item.owner.avatar_url} width={"10%"} style={{borderRadius: "50%"}} alt='userAvatar' />
                <div>
                    <h2>{item.full_name}  <span style={{fontWeight: "normal", borderRadius: "40%", color:'#fff', padding: ".3rem .7rem", background: "#000"}}>{item.visibility}</span></h2>
                
                <p>{item.language}</p>  
                </div>
            </div>
        ))}
    </div>
  )
}
