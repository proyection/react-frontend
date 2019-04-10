import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from '../components/Navbar';
import ProyectionList from '../components/ProyectionList';
import { connect } from 'react-redux';
import ProyectionActionButton from '../components/ProyectionActionButton';
import { DragDropContext } from 'react-beautiful-dnd';

// import ProjectBoard from '../components/ProjectBoard';
// import AddProjectTask from '../components/projectTask/AddProjectTask';
// import UpdateProjectTask from '../components/projectTask/UpdateProjectTask';

class App extends Component {

  onDragEnd = () => {
    //TODOS reordering logic
  }

  render() {

    const { lists } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Router>
          <div className="App">
            <Navbar />
            <div style={styles.listsContainer}>
              <Route exact path="/" component={(props) => 
              lists.map(list => (
                <ProyectionList 
                  {...props}  
                  key={list.id} 
                  title={list.title}
                  cards={list.cards}  
                  listID={list.id}
                />))}
              />
              
              <ProyectionActionButton list/>
            </div>
            {/* <Route exact path="/" component={ProjectBoard} />
            <Route exact path="/addProjectTask" component={AddProjectTask} />
            <Route exact path="/updateProjectTask/:project_task_id" component={UpdateProjectTask} /> */}
          </div>
        </Router>
      </DragDropContext>
    );
  }
}

const styles = {
  listsContainer: {
    display: 'flex',
    flexDirection: 'row',
  }
}

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps, null)(App);
