import React, { useState } from 'react'
import { NavLink, useHistory } from "react-router-dom";
const Signup = () => {
  const history = useHistory();
  const [employ, setUser] = useState({
    name: "", email: "",password: ""
  })
  let name, value;
  const handlebackendform = (e) => {
    name = e.target.name
    value = e.target.value
    console.log(name, value);

    setUser({ ...employ, [name]: value })

  }
  const Postdata = async (e) => {
    e.preventDefault();
    const { name, email, password } = employ;
    const resp = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, password
      })
    });
    const res = await resp.json();
    if (res.status === 422 || !res) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration")
    } else {
      window.alert("Successfull register");
      console.log("successful registration")
      history.push("/login");
    }
  }

  return (
    <>
      <section className='signup'>
        <div className='container mt-5'>
          <div className='signup-content'>
            <div className='signup-form'>
              <h2 className='form-title'>Sign up</h2>
              <form method='POST' className='register-form' id="register-form">
                <div className='form-group'>
                  <label htmlFor='name'>
                    <i class="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input type="text" name="name" id="name" autoComplete='off'
                    value={employ.name} onChange={handlebackendform} placeholder='Enter name' />
                </div>

                <div className='form-group'>
                  <label htmlFor='email'>
                    <i class="zmdi zmdi-email"></i>
                  </label>
                  <input type="email" name="email" id="email" autoComplete='off'
                    value={employ.email} onChange={handlebackendform} placeholder='Enter Email' />
                </div>
                <div className='form-group'>
                  <label htmlFor='password'>
                    <i class="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input type="password" name="password" id="password" autoComplete='off'
                    value={employ.password} onChange={handlebackendform} placeholder='Enter Password' />
                </div>
                <div className='form-group form-button'>
                  <input type="submit" name="signup" id="signup" className='form-submit' value="Register"
                    onClick={Postdata} />
                </div>
              </form>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}
export default Signup