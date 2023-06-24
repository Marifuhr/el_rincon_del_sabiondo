
import React, { useState } from 'react';
import './NavBar.css';
import Deco_Text from '../Deco_Text/Deco_Text';
import CartIcon from '../../assets/image/carrito.png';
import SearchBar from '../SearchBar/SearchBar';


function Navbar() {
    const [showDropdown, setShowDropdown] = useState(false);
    

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const stopPropagation = (event) => {
        event.stopPropagation();
    };

   

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img src="src\assets\image\logo6.png" alt="Logo" className="navbar-logo" />
                <Deco_Text />
                <SearchBar />
            </div>
            <div className="navbar-right">
                <button className="navbar-action">Ingresar</button>
                <button className="navbar-action">Registrarse</button>
                <button className="navbar-cart">
                    <img src={CartIcon} alt="Carrito de compras" className="navbar-cart-icon" />
                    <span className="navbar-cart-count" >0</span>
                </button>
            </div>
            <div className="navbar-center">
                <button className="navbar-button">Inicio</button>
                <div className="navbar-dropdown" onClick={stopPropagation}>
                    <button className="navbar-dropdown-button" onClick={toggleDropdown}>
                        Categorías
                        <span className="navbar-dropdown-icon">&#9660;</span>
                    </button>
                    <div className="navbar-dropdown-menu" style={{ display: showDropdown ? 'block' : 'none' }}>
                        <button className="navbar-dropdown-menu-item">Categoría 1</button>
                        <button className="navbar-dropdown-menu-item">Categoría 2</button>
                        <button className="navbar-dropdown-menu-item">Categoría 3</button>
                    </div>
                </div>
                <button className="navbar-button">Nosotros</button>
                <button className="navbar-button">Contacto</button>
            </div>
      
        </nav>
    );
}

export default Navbar;