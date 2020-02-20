import React, { Component } from 'react';
import axios from 'axios';
import Login from '../login/Login';
import Dashboard from '../dashboard/Dashboard';

class Master extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: false,
            dataUser: '',
            cargandoNetwork: false,
            cargandoOpts: false,
            graph: '',
            opts: '',
            objective: '',
            details: ''
        }
    }

    changeLogin = (data) => {
        console.log(data);
        this.setState({
            login: !this.state.login,
            dataUser: data,

        });
    }

    setDataOpt = (id) => {
        axios.get('https://torre.co/api/opportunities/'+id)
        .then((res) => {
            this.setState({
                objective: res.data.objective,
                details: res.data.details
            })
        })
    } 
    changeCargandoNet = async () => {
        if (this.state.graph == '') {
            this.setState({
                cargandoNetwork: !this.state.cargandoNetwork
            })
            await axios.get('https://bio.torre.co/api/people/' + this.state.dataUser.person.publicId + '/network?deep=10')
                .then((res) => {
                    this.setState({
                        cargandoNetwork: !this.state.cargandoNetwork,
                        graph: res.data.graph
                    });
                })
        }

    }

    changeCarganOpts = async () => {
        this.setState({
            cargandoOpts: true
        })
        await axios.post('https://search.torre.co/opportunities/_search/?offset=0&&size=20&aggregate=false')
            .then((res) => {
                console.log(this.state.cargandoOpts);
                this.setState({
                    cargandoOpts: false,
                    opts: res.data.results
                });
            }

            )

    }

    changeComponent = () => {
        if (!this.state.login) {
            window.localStorage.clear();
            return <Login changeLogin={this.changeLogin.bind(this)} />
        }
        return <Dashboard
            changeLogin={this.changeLogin.bind(this)}
            dataUser={this.state.dataUser}
            cargandoNet={this.changeCargandoNet.bind(this)}
            cargando={this.state.cargandoNetwork}
            graph={this.state.graph}
            cargandoOpts={this.changeCarganOpts.bind(this)}
            cargandoOp={this.state.cargandoOpts}
            graph={this.state.graph}
            opts={this.state.opts}
            objective={this.state.objective}
            details={this.state.details}
            setDataOpt={this.setDataOpt.bind(this)}
        />
    }
    render() {
        return (
            <div>
                {this.changeComponent()}
            </div>
        );
    }
}
export default Master;