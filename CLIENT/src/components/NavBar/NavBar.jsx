import React, { useState, useEffect } from "react";
import "./NavBar.css";
import CartIcon from "../../assets/image/carrito.png";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import axios from "axios";


import { useDispatch, useSelector } from "react-redux";
import { filterResults } from "../../Redux/Action/Index";
const endpoint = "https://ser-back-sab.onrender.com";

function Navbar() {

  const filters = useSelector((state) => state.filters);
  const [options, setOptions] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${endpoint}/category`);
        const categories = response.data.categories;
        setOptions(categories);
      } catch ({ message }) {
        console.log(message);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "category":
        return dispatch(
          filterResults({
            ...filters,
            category: value,
          })
        );

      case "price":
        return dispatch(
          filterResults({
            ...filters,
            price: value,
          })
        );

      default:
        break;
    }
  };
  return (
    <nav className="header">
      <div className="hola">
        <h3>El Rincón del sabiondo</h3>
      </div>
      <button>
        <Link to="/" className="navbar-salir">
          Salir
        </Link>
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
      </button>
      <SearchBar />
      <div className="navbar-center">
        <button className="navbar-button">
          <Link to="/home">Inicio</Link>
        </button>
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
      <div className="filtros_posjqlk">
        <select className="select_lkow" name="category" onChange={handleChange}>
          <option value="">
            Seleccionar
          </option>
          {options.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
        <select className="select_lkow" id="price" name="price" onChange={handleChange}>
          <option value="">todos</option>
          <option value="lt100">Menos que 100</option>
          <option value="101-200">De 101 a 200</option>
          <option value="201-300">De 201 a 300</option>
          <option value="gt300">Más de 300</option>
        </select>
      </div>

    </nav>
  );
}

export default Navbar;




