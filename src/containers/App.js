import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Navbar from '../components/Navbar';
import ProjectBoard from '../components/ProjectBoard';
import AddProjectTask from '../components/projectTask/UpdateProjectTask';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={ProjectBoard} />
            <Route exact path="/addProjectTask" component={AddProjectTask} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
