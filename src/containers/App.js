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

