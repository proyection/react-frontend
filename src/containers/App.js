import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from '../components/Navbar';
import ProyectionList from '../components/ProyectionList';
// import ProjectBoard from '../components/ProjectBoard';
// import AddProjectTask from '../components/projectTask/AddProjectTask';
// import UpdateProjectTask from '../components/projectTask/UpdateProjectTask';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={(props) => <ProyectionList {...props} title={"test"}
                                />}
            />
            {/* <Route exact path="/" component={ProjectBoard} />
            <Route exact path="/addProjectTask" component={AddProjectTask} />
            <Route exact path="/updateProjectTask/:project_task_id" component={UpdateProjectTask} /> */}
          </div>
        </Router>
    );
  }
}

export default App;
