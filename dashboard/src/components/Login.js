import React, { useContext, useState, useEffect } from 'react'
import { NavLink, useHistory } from "react-router-dom";
import { userContext } from "../App";

const Login = () => {
  let role;
  const {state, dispatch} = useContext(userContext);
  const history = useHistory();
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState('');
  const loginemp = async (e) => {
    e.preventDefault();
    const res = await fetch('/signin', {
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email, password
      })
    });
    const data = res.json();
    if (res.status === 400 || !data) {
      window.alert("Invalid Creds")
    }
    else {
      await data.then((data)=>{
        role = data;
      })
      dispatch({type:"USER", payload: role})
      window.alert("Login successfull")
      history.push("/");
    }
  }
  return (
    <>
      <section className='sign-in'>
        <div className='container mt-5'>
          <div className='signin-content'>
            <div className='signin-form'>
              <h2 className='form-title'>Sign in</h2>
              <form method='POST' className='register-form' id="register-form">
                <div className='form-group'>
                  <label htmlFor='name'>
                    <i class="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input type="email" name="name" id="name" autoComplete='off'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter Email Id' />
                </div>
                <div className='form-group'>
                  <label htmlFor='password'>
                    <i class="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input type="password" name="password" id="password" autoComplete='off'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Enter Password' />
                </div>
                <div className='form-group form-button'>
                  <input type="submit" name="signin" id="signin" className='form-submit'
                    value="Log in"
                    onClick={loginemp} />
                </div>
              </form>
            </div>
            {/* <div className='signin-image'>
            <figure>
              <img src={sign} alt='signpic' />
            </figure>
            <NavLink to="/login" className="signin-image-link">Already Register</NavLink>
          </div> */}
          </div>
        </div>

      </section>
    </>
  )
}

export {Login}
