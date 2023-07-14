import React, { createContext, useReducer } from 'react'
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar.js"
import Dashboard from "./components/Dashboard.js"
import './App.css'
import FormDesig from "./components/FormDesig.js";
import {Login} from "./components/Login.js";
import Signup from "./components/Signup.js";
import Logout from "./components/Logout.js";
import Errorpage from "./components/Errorpage.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { initialState, reducer } from './reducer/UseReducer.js';
import  Form  from './components/Form.js';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

// contextAPI using hook
export const userContext = createContext();
console.log(userContext);

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>
      
      <Route path="/formdesign">
      <DndProvider backend={HTML5Backend}>
        <FormDesig />
        </DndProvider>
      </Route>
      

      <Route path="/form">
        <Form />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/signup">
        <Signup />
      </Route>

      <Route path="/logout">
        <Logout />
      </Route>

      <Route>
        <Errorpage />
      </Route>
    </Switch>
  )
}
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log("state");
  console.log(state)
  console.log(dispatch);
  return (
    <>
      <userContext.Provider value={{ state, dispatch }}>
        <NavBar />
        <Routing />
      </userContext.Provider>

    </>
  )
}
export default App