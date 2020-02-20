import React, { Component } from 'react';
import './Contenido.css';
import { connect } from 'react-redux';
import Spinner from '../../general/Spinner';

class Contenido extends Component {

    componentDidMount() {
       // this.props.traerTodos();

    }

    showTable = () => {
        if (this.props.cargando) {
            return <Spinner />
        }
        return (
            <div>
               
                <table id="table-users" className="striped centered">
                    <thead>
                        <tr>
                            <th scope="col">Nombres</th>
                            <th scope="col">Perfil profesional</th>
                            <th scope="col">Ubicación</th>
                            <th scope="col"></th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.ponerFilas()}
                    </tbody>
                </table>
            </div>

        )
    }
    ponerFilas = () => {
        return (
            <tr key={1}>

                <td>
                    {this.props.dataUser.person.name}
                </td>
                <td>{this.props.dataUser.person.professionalHeadline}</td>
                <td>{this.props.dataUser.person.location.name}</td>
                
            </tr>
        )
    }

    render() {

        return (

            <div id="contenido" className="row">
                <div className="col l12">
                    <div className="card-panel">
                        <div className="card-title"><h5>Datos personales</h5></div>
                        <div className="card-content">
                            {this.showTable()}
                        </div>
                    </div>
                </div>

            </div>


        );
    }
}


export default Contenido;