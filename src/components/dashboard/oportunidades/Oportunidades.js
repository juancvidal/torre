import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Oportunidades extends Component {




    remoto = (remoto) => {
        if (remoto)
            return 'Remote';
        return 'No remote';
    }

    validCompensation = (obj) => {
        if (obj.compensation) {
            return obj.compensation.currency + ': ' + obj.compensation.minAmount
        }
        return 'Not available';
    }

    showOportunidades = () => {

        if (this.props.opts != '') {
            return this.props.opts.map((op, index) => (
                <div key={index} className="row">
                    <div className="col s12 m6">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">{op.objective}</span>
                                <p>{op.type}</p>
                                <p>{this.remoto(op.remote)}</p>
                                <p>{this.validCompensation(op)}</p>
                            </div>
                            <div className="card-action">
                                <Link id="btn-edit" to={{
                                    pathname: "/viewOportunidad"                                    
                                }} className="valign-wrapper" onClick={() => this.props.setDataOpt(op.id)}>Ver</Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        }

    }

    
    render() {
        return (
            <div className="row">
                <div className="col l12">
                    <div className="card-panel">
                        <div className="card-title"><h5>Oportunidades</h5></div>
                        <div className="card-content">
                            <div className="row">
                                {this.showOportunidades()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Oportunidades;