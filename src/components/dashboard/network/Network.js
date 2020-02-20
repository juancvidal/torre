import React, { Component } from 'react';
import Spinner from '../general/Spinner';
import './Network.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';


const token = window.localStorage.getItem('token');

class Network extends Component {



    showNet = () => {
        console.log(this.props.cargando)
        if (this.props.cargando) {
            return <Spinner />
        } else {
            if (this.props.graph != '') {
                return this.props.graph.nodes.map((node, index) => {
                    if (index <= 10) {
                        if (typeof node.metadata.picture !== 'undefined' && node.metadata.picture !== '') {
                            return (
                                <div key={index} className="col s6 l6">
                                    <div className="card">
                                        <div className="card-image">
                                            <img src={node.metadata.picture} />
                                            <span className="card-title">{node.metadata.name}</span>
                                        </div>
                                        <div className="card-content">
                                            <p>{node.metadata.role}</p>
                                        </div>
                                    </div>
                                </div>

                            )
                        }

                    }
                })
            }
        }
    }


    render() {

        return (

            <div id="networks" className="row">
                <div className="col l12">
                    <div className="card-panel">
                        <div className="row">
                            {this.showNet()}
                        </div>
                    </div>
                </div>

            </div>


        );
    }
}

export default Network;