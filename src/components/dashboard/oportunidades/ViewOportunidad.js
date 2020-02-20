import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ViewOportunidad extends Component {

    constructor(props) {
        super(props);
        this.state = {
            texto: this.props.objective,
            details: this.props.details
        };
    }
    

    showDetails = () => {
        if(this.state.details != ''){
            return this.state.details.map((detail, index) => (
                <div key={index} className="row">
                    <div className="card-panel">
                        <div className="card-title">
                            <h6>{detail.code}</h6>
                        </div>
                        <div className="card-content">
                            <h6>{detail.content}</h6>
                        </div>
                    </div>
                </div>
            ));
        }
        
    }
    render() {

        return (
            <div className="row">
                <div className="col l12">
                    <div className="card-panel">
                        <div className="card-title"><h5>Oportunidad</h5></div>
                        <div className="card-content">
                            <div className="row">
                                <form className="col s12">                                    
                                    <div className="row">
                                        <h5>{this.state.texto}</h5>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="card-action">                            
                            <Link className="btn btn-primary btn_opts" to='/oportunidades'>Ver todas</Link>                            
                        </div>
                    </div>
                    <div className="card-panel">
                        <div className="card-title"><h5>Detalles</h5></div>
                        <div className="card-content">
                            {this.showDetails()}
                        </div>
                        <div className="card-action">                            
                            <Link className="btn btn-primary btn_opts" to='/oportunidades'>Ver todas</Link>                            
                        </div>
                    </div>
                </div>
            </div>            
        );
    }
}

export default ViewOportunidad;