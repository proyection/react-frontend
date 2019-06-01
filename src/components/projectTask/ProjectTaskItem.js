import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { deleteProjectTask, addProjectTask } from '../../actions/projectTaskActions';
class ProjectTaskItem extends Component {
    constructor() {
        super();
        this.state = {
            status: 'todo',
            isChecked: false
        }
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.onCheckboxChange = this.onCheckboxChange.bind(this);
    }

    componentDidMount() {
        this.setState({ status: this.props.project_task.status })
    }

    onDeleteClick(project_task_id) {
        this.props.deleteProjectTask(project_task_id)
    }

    handleOptionChange(e) {
        this.setState({ status: e.target.value })  
    }

    onCheckboxChange(e) {
        debugger
        this.setState({ isChecked: !this.state.isChecked})
    }

    onSubmit = (e) => {
        const {project_task} = this.props;

        if (this.state.isChecked) {
            this.props.deleteProjectTask(project_task.id)
        }
        
        const updatedTask = {
            id: project_task.id,
            summary: project_task.summary,
            acceptanceCriteria: project_task.acceptanceCriteria,
            status: this.state.status,
            limitDate: project_task.limitDate
        };
        
        this.props.addProjectTask(updatedTask, this.props.history);
    }
  
    render() {
        const {project_task, id} = this.props;
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
                    <Link to={`updateProjectTask/${project_task.id}`} className="btn btn-primary">
                        Ver / Actualizar
                    </Link>
    
                    <button className="btn btn-danger ml-4"
                    onClick={this.onDeleteClick.bind(this, project_task.id)}
                    >
                        Eliminar  
                    </button>

                    <br/>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <div className="row">
                                <div className="custom-control custom-radio" style={divStyle}>
                                    <input type="radio" className="custom-control-input" id={id.toString()+id.toString()}
                                    onChange={this.handleOptionChange} value="1"
                                    checked={this.state.status == '1'} name={project_task.id}/>
                                    <label className="custom-control-label" htmlFor={id.toString()+id.toString()}>To do</label>
                                </div>

                                <div className="custom-control custom-radio" style={divStyle}>
                                    <input type="radio" className="custom-control-input" id={(id+1).toString()+id.toString()}
                                    onChange={this.handleOptionChange} value="2"
                                    checked={this.state.status == '2'} name={project_task.id}/>
                                    <label className="custom-control-label" htmlFor={(id+1).toString()+id.toString()}>In Progress</label>
                                </div>

                                <div className="custom-control custom-radio" style={divStyle}>
                                    <input type="radio" className="custom-control-input" id={(id+2).toString()+id.toString()} 
                                    onChange={this.handleOptionChange} value="3"
                                    checked={this.state.status == '3'} name={project_task.id}/>
                                    <label className="custom-control-label" htmlFor={(id+2).toString()+id.toString()}>Done</label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id={id.toString()+id.toString()+"done"}
                                    checked={this.state.isChecked} onChange={this.onCheckboxChange}/>
                                <label className="custom-control-label" htmlFor={id.toString()+id.toString()+"done"}>done</label>
                            </div>
                        </div>
                        <input type="submit" className="btn btn-primary btn-block mt-4" />
                    </form>
                </div>
            </div>
        )
    }
}

var divStyle = {
    marginLeft: '20px',
    marginTop: '20px'
  };

ProjectTaskItem.propTypes = {
    deleteProjectTask: PropTypes.func.isRequired,
    addProjectTask: PropTypes.func.isRequired
};

export default connect(null, {deleteProjectTask, addProjectTask}) (ProjectTaskItem);
