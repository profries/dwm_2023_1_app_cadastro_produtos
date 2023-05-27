import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Menu() {
    const [menuAtivo, setMenuAtivo] = useState(false);

    function dispararMenu() {
        setMenuAtivo(!menuAtivo);     
    }

    return (
        <header className="w3-top w3-margin-botton">
            <nav className="w3-bar w3-large w3-black">
                <a href="#" className="w3-bar-item w3-button w3-hide-large w3-hide-medium" onClick={() => dispararMenu()}>&#9776;</a>	
                <Link to='/' className="w3-bar-item w3-button">
                    <i className="fa fa-home w3-xlarge"></i>			
                </Link>
                <Link to='/cadastro' className="w3-bar-item w3-button w3-hide-small">Cadastro</Link>
                <Link to='/' className="w3-bar-item w3-button w3-hide-small">Lista</Link>
                <Link to='/sobre' className="w3-bar-item w3-button w3-hide-small">Sobre</Link>
                <a href="#" className="w3-bar-item w3-button w3-right">
                    <i className="fa fa-search w3-xlarge"></i>	
                </a>	
            </nav>		
            <nav id="menu-mobile" className={"w3-bar-block w3-large w3-black w3-hide w3-hide-large w3-hide-medium"+ (menuAtivo ?" w3-show" :"")}>
            <Link to='/cadastro' className="w3-bar-item w3-button">Cadastro</Link>
            <Link to='/' className="w3-bar-item w3-button">Lista</Link>
            <Link to='/sobre' className="w3-bar-item w3-button">Sobre</Link>
            </nav>

        </header>

    )
}