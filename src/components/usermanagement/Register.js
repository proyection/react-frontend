import React, { Component } from 'react';
import { createNewUser } from "../../actions/securityActions"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import classnames from "classnames" 

class Register extends Component {

    constructor() {
        super();
        this.state = {
            "username": "",
            "firstname": "",
            "lastname": "",
            "password": "",
            "confirmPassword": "",
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        const { username, firstname, lastname, password, confirmPassword } = this.state;
        const newUser = {
            "username": username,
            "firstname": firstname,
            "lastname": lastname,
            "password": password,
            "confirmPassword": confirmPassword,
        }

        this.props.createNewUser(newUser, this.props.history);
    }

    onChange(e) {
        this.setState({ [e.target.name] : e.target.value})
    }

    render() {
        return(
            <div className="register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Sign Up</h1>
                            <p className="lead text-center">Create your Account</p>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        className="form-control form-control-lg" 
                                        placeholder="John" 
                                        name="firstname"   
                                        value={this.state.firstname}  
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        className="form-control form-control-lg" 
                                        placeholder="Doe" 
                                        name="lastname"   
                                        value={this.state.lastname}  
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        className="form-control form-control-lg" 
                                        placeholder="Johndoe@projection.com" 
                                        name="username" 
                                        value={this.state.username}
                                        onChange={this.onChange}
                                    />

                                </div>
                                <div className="form-group">
                                    <input 
                                        type="password" 
                                        className="form-control form-control-lg" 
                                        placeholder="Password" 
                                        name="password" 
                                        value={this.state.password}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="password" 
                                        className="form-control form-control-lg" 
                                        placeholder="Confirm Password"
                                        name="confirmPassword" 
                                        value={this.state.confirmPassword}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <input type="submit" className="btn btn-info btn-block mt-4" value="Registrarse" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Register.propTypes = {
    createNewUser: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(mapStateToProps, {createNewUser})(Register);