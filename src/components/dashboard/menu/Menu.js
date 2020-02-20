import React, { Component } from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';
class Menu extends Component {


    componentDidMount() {

        this.highlight('opt1');
    }
    highlight = (optionId) => {

        let opts = document.getElementsByClassName('option');
        let arrayOpts = Array.prototype.slice.call(opts);
        console.log(opts[0]);
        let opt = document.getElementById(optionId);
        let liparent = opt.parentElement;
        opt.style.color = "#fff";
        liparent.style.backgroundColor = "#283593";
        arrayOpts.forEach(element => {
            if (element.id != optionId) {
                element.style.color = "rgba(0,0,0,0.87)";
                element.parentElement.style.backgroundColor = "#fff";
            }
        });

    }

    clickNetwork = async () => {
        this.props.cargandoNet();                
    }

    clickOportunidades = () => {
        this.props.cargandoOpts();
    }
    render() {
        return (
            <aside>
                <ul id="slide-out" className="sidenav sidenav-fixed">
                    <li id="logo">
                        <Link to='/' id="logo-container">
                            <img alt='logo' id="img-logo" src={this.props.dataUser.person.picture} />
                        </Link>
                    </li>
                    <li className="opt-li"><Link id="opt1" className="option" to='/' onClick={(e) => this.highlight(e.target.id)}>Datos Personales</Link></li>                    
                    <li className="opt-li"><Link id="opt2" className="option" to='/network' onClick={(e) => { this.highlight(e.target.id); this.clickNetwork() }}>Network</Link></li>
                    <li className="opt-li"><Link id="opt3" className="option" to='/oportunidades' onClick={(e) => { this.highlight(e.target.id); this.clickOportunidades() }}>Oportunidades</Link></li>
                </ul>
            </aside>
        )
    }
}

export default Menu;