import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addProjectTask } from '../../actions/projectTaskActions';
import classnames from 'classnames';

class AddProjectTask extends Component {
    constructor(){
        super();
        this.state = {
            summary: "",
            acceptanceCriteria: "",
            status: "",
            limitDate: "",
            errors: {}
        };
    }  

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors){
            this.setState({errors: nextProps.errors });
        }
      }
    
    onChangeInput = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }
    
    onSubmit = (e) => {
        e.preventDefault() //don't refresh the page
        const { summary, acceptanceCriteria, status, limitDate } = this.state;
        
        const newProjectTask = {
            summary: summary,
            acceptanceCriteria: acceptanceCriteria,
            status: Number(status),
            limitDate: limitDate
        };
    
        this.props.addProjectTask(newProjectTask, this.props.history);
    }

    render() {
        const { errors, summary, acceptanceCriteria, status, limitDate } = this.state;

        return (
            <div className="addProjectTask">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <Link to="/" className="btn btn-light">
                                Regresar al administrador de tareas
                            </Link>
                            <h4 className="display-4 text-center">Agregar /Actualizar tarea</h4>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        className={classnames("form-control form-control-lg", {
                                            "is-invalid": errors.summary
                                        })}
                                        name="summary" 
                                        value={summary}
                                        placeholder="descripción de la tarea"
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
                                        placeholder="Criterio de aceptación" 
                                        name="acceptanceCriteria"
                                        value={acceptanceCriteria}
                                        onChange={this.onChangeInput}>
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

AddProjectTask.propTypes = {
    addProjectTask: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(mapStateToProps, {addProjectTask} ) (AddProjectTask);