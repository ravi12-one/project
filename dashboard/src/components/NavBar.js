import React, { useContext } from 'react'
// import { Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import logo from "../img/images.png"
import 'bootstrap/dist/css/bootstrap.css'
import { userContext } from '../App';
const NavBar = () => {
  const { state, dispatch } = useContext(userContext)
  const Functionality = () => {
    if (state==='user') {
      return (
        <>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/">Dashboard <span className="sr-only">(current)</span></NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/form">Form <span className="sr-only">(current)</span></NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/logout">Logout</NavLink>
          </li>
        </>
      )
    }if (state==='admin') {
      return (
        <>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/">Dashboard <span className="sr-only">(current)</span></NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/formdesign">Form-Design <span className="sr-only">(current)</span></NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/logout">Logout</NavLink>
          </li>
        </>
      )
    } else {
      return (
        <>

          <li className="nav-item">
            <NavLink className="nav-link" to="/login">Login</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/signup">Signup</NavLink>
          </li>
        </>
      )
    }
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <naveLink className="navbar-brand" to="Formdesign">
          <img src={logo} alt='logo' />
        </naveLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <Functionality />
          </ul>
        </div>
      </nav>
    </>
  )
}
export default NavBar