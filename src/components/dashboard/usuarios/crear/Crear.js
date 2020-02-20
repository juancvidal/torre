import React, { Component } from 'react';
import './Crear.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as usuariosActions from '../../../../actions/usuariosActions';

class Crear extends Component {
    crear = () => {

        let data = {
            "nombres": document.getElementById('nombres').value,
            "apellidos": document.getElementById('apellidos').value,
            "usuario": document.getElementById('usuario').value,
            "genero": document.getElementById('genero').value,
            "nombre_negocio": document.getElementById('nombre_negocio').value,
            "tipo_negocio": document.getElementById('tipo_negocio').value,
            "ciudad": document.getElementById('ciudad').value,
            "localidad": document.getElementById('localidad').value
        }
        this.props.crearUsuario(data, this.props.usuarios);
    }

    componentDidMount() {


    }



    render() {
        return (
            <div className="row">
                <div className="col l12">
                    <div className="card-panel">
                        <div className="card-title"><h5>Crear usuario</h5></div>
                        <div className="card-content">
                            <div className="row">
                                <form className="col s6">

                                    <div className="input-field col s6">
                                        <input id="nombres" type="text" className="validate" />
                                        <label htmlFor="nombres">Nombres</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input id="apellidos" type="text" className="validate" />
                                        <label htmlFor="apellidos">Apellidos</label>
                                    </div>

                                    <div className="input-field col s6">
                                        <input id="usuario" type="text" className="validate" />
                                        <label htmlFor="usuario">Usuario</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input id="genero" type="text" className="validate" />
                                        <label htmlFor="genero">Genero</label>
                                    </div>

                                    <div className="input-field col s6">
                                        <input id="nombre_negocio" type="text" className="validate" />
                                        <label htmlFor="negocio">Negocio</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input id="tipo_negocio" type="text" className="validate" />
                                        <label htmlFor="tipo_negocio">Tipo negocio</label>
                                    </div>

                                    <div className="input-field col s6">
                                        <input id="ciudad" type="text" className="validate" />
                                        <label htmlFor="ciudad">Ciudad</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input id="localidad" type="text" className="validate" />
                                        <label htmlFor="localidad">Localidad</label>
                                    </div>


                                </form>
                            </div>
                        </div>
                        <div className="card-action">
                            <Link className="btn btn-primary btn_opts" onClick={this.crear} to='/'>Guardar</Link>
                            <Link className="btn btn-primary btn_opts" to='/'>Cancelar</Link>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

const mapToStateProps = (reducers) => {
    return reducers.usuariosReducers;
}

export default connect(mapToStateProps, usuariosActions)(Crear);