import React, { Component } from 'react';

class ProjectBoard extends Component {
    render() {
        return (
            <div className="container">
                <a href="/addProjectTask" className="btn btn-primary mb-3">
                    <i className="fas fa-plus-circle"> Crear tarea</i>
                </a>
                <br />
                <hr />
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card text-center mb-2">
                                    <div className="card-header bg-secondary text-white">
                                        <h3>TO DO</h3>
                                    </div>
                                </div>
                                {/* {todoItems} */}
                            </div>
                            <div className="col-md-4">
                                <div className="card text-center mb-2">
                                    <div className="card-header bg-primary text-white">
                                        <h3>In Progress</h3>
                                    </div>
                                </div>
                                {/* {inProgressItems} */}
                            </div>
                            <div className="col-md-4">
                                <div className="card text-center mb-2">
                                    <div className="card-header bg-success text-white">
                                        <h3>Done</h3>
                                    </div>
                                </div>
                                {/* {doneItems} */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default ProjectBoard;