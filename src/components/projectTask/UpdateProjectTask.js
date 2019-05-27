import React, { Component } from 'react'
import { connect }  from 'react-redux';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProjectTask, addProjectTask } from '../../actions/projectTaskActions';

class UpdateProjectTask extends Component {

    constructor(){
        super();
        this.state = {
            id:"",
            summary: "",
            acceptanceCriteria: "",
            status: "",
            limitDate: "",
            errors: {}
        };
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.errors){
            this.setState({errors: nextProps.errors});
        }
    
        const {
        id,
        summary,
        acceptanceCriteria,
        status,
        limitDate
        } = nextProps.project_task;

        var str = limitDate.toString();
        var res = str.substr(0, 10);
    
        this.setState({
        id,
        summary,
        acceptanceCriteria,
        status,
        limitDate: res
        });
    }
    
    componentDidMount() {
    const { project_task_id } = this.props.match.params;
    this.props.getProjectTask(project_task_id);
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        const updatedTask = {
        id: this.state.id,
        summary: this.state.summary,
        acceptanceCriteria: this.state.acceptanceCriteria,
        status: this.state.status,
        limitDate: this.state.limitDate
        };

    this.props.addProjectTask(updatedTask, this.props.history);
    }

    onChangeInput = (e) => {
        this.setState({[e.target.name]: e.target.value });
    }

    render() {
        const { errors, summary, acceptanceCriteria, status, limitDate } = this.state;

        return (
            <div className="addProjectTask">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h4 className="display-4 text-center">Agregar /Actualizar tarea</h4>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        className={classnames("form-control form-control-lg", {
                                        "is-invalid": errors.summary
                                        })}
                                        name="summary" 
                                        placeholder="Project Task summary" 
                                        value={summary}
                                        onChange={this.onChangeInput}
                                    />
                                    {
                                    errors.summary && (
                                        <div className="invalid-feedback">{errors.summary}</div>
                                    )
                                }
                                </div>
                                <div className="form-group">
                                    <textarea 
                                        className="form-control form-control-lg" 
                                        placeholder="Acceptance Criteria" 
                                        name="acceptanceCriteria"
                                        value={acceptanceCriteria}
                                        onChange={this.onChangeInput}
                                    >
                                    </textarea>
                                        
                                </div>
                                <div className="form-group">
                                    <select 
                                        className="form-control form-control-lg" 
                                        name="status"
                                        value={status}
                                        onChange={this.onChangeInput}
                                    >
                                        <option value="">Seleccione estado</option>
                                        <option value="1">TO DO</option>
                                        <option value="2">IN PROGRESS</option>
                                        <option value="3">DONE</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input 
                                    type='date' 
                                    className="form-control" 
                                    name="limitDate"
                                    value={limitDate}
                                    onChange={this.onChangeInput}
                                 />
                                </div>
                                <input type="submit" className="btn btn-primary btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
      }
}

UpdateProjectTask.propTypes = {
    project_task: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    getProjectTask: PropTypes.func.isRequired,
    addProjectTask: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    project_task: state.project_task.project_task,
    errors: state.errors
});

export default connect(mapStateToProps, { getProjectTask, addProjectTask })(UpdateProjectTask);