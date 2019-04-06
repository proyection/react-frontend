import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from '../components/Navbar';
import ProjectBoard from '../components/ProjectBoard';
import AddProjectTask from '../components/projectTask/UpdateProjectTask';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={ProjectBoard} />
          <Route exact path="/addProjectTask" component={AddProjectTask} />
        </div>
      </Router>
    );
  }
}

export default App;
