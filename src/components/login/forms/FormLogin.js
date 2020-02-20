import React, { Component } from 'react';
import axios from 'axios';
import './FormLogin.css';

import Spinner from '../../dashboard/general/Spinner';
import WrongUser from '../../dashboard/general/WrongUser';

class FormLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loader: false,
            error: false
        }
    }


    login = async () => {
        let buttonLogin = document.getElementById('button-login');
        buttonLogin.classList.add('disabled');
        this.setState({
            loader: true
        });
        const usuario = document.getElementById('usuario').value;
        //const pass = document.getElementById('password').value;
        window.localStorage.clear();
        axios.get('https://torre.bio/api/bios/'+usuario)
            .then((res) => {
                console.log(res);
                if (res.status === 200) {                    
                    if (window.localStorage.getItem('token') != '') {
                        this.props.changeLogin(res.data);
                    }
                }
            })
            .catch((e) => {
                this.setState({
                    loader: false,
                    error: true
                });
                console.log(e);
            })
    }
    preloader = () => {
        if (this.state.loader) 
            return <Spinner/>
        return null;
    }

    erroMessage = () => {
        if (this.state.error)            
            return <WrongUser/>        
        return null
    }
    handleFocus = () => {
        let buttonLogin = document.getElementById('button-login');
        buttonLogin.classList.remove('disabled');
        this.setState({ error: false })
    }
    render() {
        return (
            <div className="row">
                <form id="login" className="col s12">
                    <div className="row">
                        <div className="input-field col l12">
                            <input id="usuario" type="text" className="validate" onFocus = { () => {this.handleFocus()}}/>
                            <label htmlFor="usuario">Usuario</label>
                        </div>
                    </div>                    
                    {this.preloader()}
                    {this.erroMessage()}
                    <button id="button-login" className="btn waves-effect deep-purple darken-4 waves-light col l12" type="button" onClick={this.login} name="action">INGRESAR</button>
                </form>
            </div>
        );
    }
}
export default FormLogin;