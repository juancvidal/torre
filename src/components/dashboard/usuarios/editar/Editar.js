import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as usuariosActions from '../../../../actions/usuariosActions';


class Editar extends Component {

    editar = () => {

        let data = {
            "id": this.props.location.id,
            "nombres": document.getElementById('nombres').value,
            "apellidos": document.getElementById('apellidos').value,
            "usuario": document.getElementById('usuario').value,
            "genero": document.getElementById('genero').value,
            "nombre_negocio": document.getElementById('nombre_negocio').value,
            "tipo_negocio": document.getElementById('tipo_negocio').value,
            "ciudad": document.getElementById('ciudad').value,
            "localidad": document.getElementById('localidad').value
        }
        this.props.editarUsuario(data);

    }

    delete() {
        this.props.eliminarUsuario(this.props.location.id)

    }
    render() {
        return (
            <div className="row">
                <div className="col l12">
                    <div className="card-panel">
                        <div className="card-title"><h5>Editar usuario</h5></div>
                        <div className="card-content">
                            <div className="row">
                                <form className="col s6">
                                    <div className="row">
                                        <div className="input-field col s6">
                                            <input id="nombres" type="text" className="validate" placeholder={this.props.location.nombres} defaultValue={this.props.location.nombres} />
                                        </div>
                                        <div className="input-field col s6">
                                            <input id="apellidos" type="text" className="validate" placeholder={this.props.location.apellidos} defaultValue={this.props.location.apellidos} />

                                        </div>
                                    </div>

                                    <div className="input-field col s6">
                                        <input id="usuario" type="text" className="validate" placeholder={this.props.location.usuario} defaultValue={this.props.location.usuario} />

                                    </div>
                                    <div className="input-field col s6">
                                        <input id="genero" type="text" className="validate" placeholder={this.props.location.genero} defaultValue={this.props.location.genero} />

                                    </div>

                                    <div className="input-field col s6">
                                        <input id="nombre_negocio" type="text" className="validate" placeholder={this.props.location.nombre_negocio} defaultValue={this.props.location.nombre_negocio} />

                                    </div>
                                    <div className="input-field col s6">
                                        <input id="tipo_negocio" type="text" className="validate" placeholder={this.props.location.tipo_negocio} defaultValue={this.props.location.tipo_negocio} />

                                    </div>

                                    <div className="input-field col s6">
                                        <input id="ciudad" type="text" className="validate" placeholder={this.props.location.ciudad} defaultValue={this.props.location.ciudad} />

                                    </div>
                                    <div className="input-field col s6">
                                        <input id="localidad" type="text" className="validate" placeholder={this.props.location.localidad} defaultValue={this.props.location.localidad} />

                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="card-action">
                            <Link className="btn btn-small btn_opts" onClick={this.editar} to='/'>Guardar</Link>
                            <Link className="btn btn-small btn_opts" to='/'>Cancelar</Link>
                            <Link className="btn btn-small btn_opts" to='/' onClick={() => { this.delete() }}>Eliminar</Link>
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

export default connect(mapToStateProps, usuariosActions)(Editar);