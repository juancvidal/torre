import React, { Component } from 'react';
import FormLogin from './forms/FormLogin';
import './Login.css';


class Login extends Component {
    
    render() {
        return (
            <div id="card-login" className="row">
                <div className="col l4 m6 offset-l4">
                    <div className="card-panel hoverable">
                        <div className="card-content">
                            <span className="card-title col l12 center-align">
                                <i className="material-icons">https</i>
                            </span>
                            <FormLogin changeLogin={this.props.changeLogin}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;