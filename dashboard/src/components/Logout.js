import React, { useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import user from "../img/images.png"  
import { userContext } from "../App";
const About = () => {
  const {state, dispatch} = useContext(userContext);
  const history = useHistory();
  useEffect(()=>{
    fetch('/logout', {
      method: "GET",
      headers: {
        Accept:"application/json",
        "Content-Type":"application/json"
      },
      credentials:"include"

      }).then((res)=>{
        dispatch({type:"USER", payload: false})
        history.push('/login', { replace : true });
        if(!res.status === 200){
          const err = new Error(res.error);
          throw err;
        }
    }).catch((err)=>{
      console.log(err)
    });

  });
  return (
    <>
    <h1>Logout</h1>
    </>
  )
}
export default About