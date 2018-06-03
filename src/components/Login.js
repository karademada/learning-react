import React, { Component } from 'react';
import AuthService from '../utils/auth-service';

class Login extends Component {
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.Auth = new AuthService();
    }

    handleChange(e){
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }
    handleFormSubmit(e){
        e.preventDefault();

        this.Auth.login(this.state.username,this.state.password)
            .then(() =>{
               this.props.history.replace('/');
            })
            .catch(err =>{
                alert(err);
            })
    }

    componentWillMount(){
        if(this.Auth.loggedIn())
            this.props.history.replace('/');
    }

    render() {
        return (
            <div className="login">
                <div className="card">
                    <div className="card-body">
                        <h1 className="text-center">Login</h1>
                        <form onSubmit={this.handleFormSubmit}>
                            <div className="form-group">
                                <label>Username</label>
                                <input
                                    className="form-control"
                                    placeholder="Username goes here..."
                                    name="username"
                                    type="text"
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    className="form-control"
                                    placeholder="Password goes here..."
                                    name="password"
                                    type="password"
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    value="SUBMIT"
                                    type="submit"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }


}

export default Login;
