import React, { Component } from 'react';
import Menu from './menu/Menu';
import Usuarios from './usuarios/index/Contenido';
import ViewOportunidad from './oportunidades/ViewOportunidad';
import Oportunidades from './oportunidades/Oportunidades';
import Network from './network/Network';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './Dashboard.css';
class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user_to_edit: ''
        }
    }


    userToEdit = (id) => {
        this.setState({
            user_to_edit: id
        })
    }
    render() {
        return (
            <div id="main">
                <BrowserRouter>
                    <header>
                        <div className="navbar-fixed">
                            <nav>
                                <div className="nav-wrapper">
                                    <a href="#!" className="brand-logo">Logo</a>
                                    <ul className="right hide-on-med-and-down">
                                        <li><a onClick = { () => {this.props.changeLogin()}}>Cerrar sesión</a></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <Menu dataUser={this.props.dataUser} cargandoNet={this.props.cargandoNet} cargandoOpts={this.props.cargandoOpts}/>
                    </header>
                    <main>
                        <Redirect from="/"
                            to="/" />
                        <Switch>
                            <Route exact path='/' component={() => <Usuarios userToEdit={this.userToEdit.bind(this)} dataUser={this.props.dataUser}/>} />
                            <Route exact path='/viewOportunidad' component={ () => <ViewOportunidad objective={this.props.objective} details={this.props.details}/>} />
                            <Route exact path='/network' component={() => <Network user={this.props.dataUser} cargando={this.props.cargando} graph={this.props.graph}/>} />
                            <Route exact path='/oportunidades' component={() => <Oportunidades cargando={this.props.cargandoOp} opts={this.props.opts} setDataOpt={this.props.setDataOpt}/> } />
                        </Switch>
                    </main>
                </BrowserRouter>
            </div>
        );
    }
}
export default Dashboard;