import React, { Component } from 'react';

class ProjectTaskItem extends Component {
    render() {
        const {project_task} = this.props;
        return (
            <div className="card mb-1 bg-light">
    
                <div className="card-header text-primary">
                    ID: {project_task.id}
                </div>
                <div className="card-body bg-light">
                    <h5 className="card-title">{project_task.summary}</h5>
                    <p className="card-text text-truncate ">
                        {project_task.acceptanceCriteria}
                    </p>
                    <p className="card-text text-truncate ">
                        Fecha límite: {project_task.limitDate}
                    </p>
                    <a href={`updateProjectTask/${project_task.id}`} className="btn btn-primary">
                        View / Update
                    </a>
    
                    <button className="btn btn-danger ml-4"
                    // onClick={this.onDeleteClick.bind(this, project_task.id)}
                    >
                        Delete  
                    </button>
                </div>
            </div>
        )
    }
}

export default ProjectTaskItem;