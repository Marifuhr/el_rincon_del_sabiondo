import React, { useState, useEffect } from "react";
import "./NavBar.css";
import Deco_Text from "../Deco_Text/Deco_Text";
import CartIcon from "../../assets/image/carrito.png";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import axios from "axios";


import { useDispatch} from "react-redux";
import { filterByCategory } from "../../Redux/Action/Index";
const endpoint = "http://localhost:3001";

function Navbar() {


  const [showDropdown, setShowDropdown] = useState(false);
  const [options, setOptions] = useState([]);
  const dispatch = useDispatch();

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const stopPropagation = (event) => {
    event.stopPropagation();
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${endpoint}/category`);
        const categories = response.data.categories;
        setOptions(categories);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    dispatch(filterByCategory(category));
  };

  return (
    <nav className="header">
      
      <button>
        <Link to="/" className="navbar-salir">
          Salir
          </Link>
      </button>
      <div className="navbar-left">
        <img
          src="src\assets\image\logo6.png"
          alt="Logo"
          className="navbar-logo"
        />
        <Deco_Text />
        <SearchBar />
      </div>
      <div className="navbar-right">
        <Link to="/login" className="navbar-action">
          Ingresar
        </Link>
        <button className="navbar-action">Registrarse</button>
        <button className="navbar-cart">
          <img
            src={CartIcon}
            alt="Carrito de compras"
            className="navbar-cart-icon"
          />
          <span className="navbar-cart-count">0</span>
        </button>
      </div>
      <div className="navbar-center">
        <button className="navbar-button" onClick={() => window.location.reload()}>
          Inicio
        </button>
        <div className="navbar-dropdown" onClick={stopPropagation}>
          <div>
            <select onChange={handleCategoryChange}>
              <option disabled defaultValue="">
                Categories
              </option>
              {options.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button className="navbar-button">
          <Link to="/about">Nosotros</Link>
        </button>
        <button className="navbar-button">
          <Link to="/contacto">Contacto</Link>
        </button>
        <button className="navbar-crear">
          <Link to="/create">Agrega un libro</Link>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;




