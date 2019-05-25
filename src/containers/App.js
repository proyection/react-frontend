import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from '../components/Navbar';
import { connect } from 'react-redux';
import ProjectBoard from '../components/ProjectBoard';
import AddProjectTask from '../components/projectTask/AddProjectTask';
import UpdateProjectTask from '../components/projectTask/UpdateProjectTask';
import Register from '../components/usermanagement/Register';
import Login from '../components/usermanagement/Login';
import jwt_decode from 'jwt-decode';
import setJWT from '../securityutils/setJWT';
import { GET_ERRORS, SET_CURRENT_USER } from "../actions/types";
import { logout } from '../actions/securityActions';  
import store from '../store';


const jwt = localStorage.jwtToken

if (jwt) {
  setJWT(jwt)
  const decode_jwt = jwt_decode(jwt);
  store.dispatch({
    type: SET_CURRENT_USER,
    payload: decode_jwt
  });

  const currentTime = Date.now()/1000;
  if(decode_jwt.exp < currentTime) {
    store.dispatch(logout());
    window.location.href("/");
  }
}

export default class App extends Component {

  render() {
    return (
        <Router>
          <div className="App">
            <Navbar />
            {
              //public routes
            }
            <Route exact path="/" component = {Login} />
            <Route exact path="/register" component = {Register} />
            {
              //private routes
            }
            <Route exact path="/dashboard" component={ProjectBoard} />
            <Route exact path="/addProjectTask" component={AddProjectTask} />
            <Route exact path="/updateProjectTask/:project_task_id" component={UpdateProjectTask} />
          </div>
        </Router>
    );
  }
}

