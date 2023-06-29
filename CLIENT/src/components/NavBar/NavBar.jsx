import React, { useState, useEffect } from "react";
import "./NavBar.css";
import CartIcon from "../../assets/image/carrito.png";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import axios from "axios";


import { useDispatch, useSelector } from "react-redux";
// import { filterResults } from "../../Redux/Action/Index";
const endpoint = "http://localhost:3001";


const initialFilters = {
  category: "",
  price: "",
};

function Navbar() {

  const filters = useSelector((state) => state.filters);
  const [selectedFilters, setSelectedFilters] = useState(initialFilters);
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
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    console.log(name);

    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));

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
      <div className="navbar-left">
        </div>
        {/* <img
          src="src\assets\image\logo6.png"
          alt="Logo"
          className="navbar-logo"
        /> */}
       
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
        <div className="navbar-dropdown" onClick={stopPropagation}>
          <div>
            <select name="category" onChange={handleChange}>
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
      <select id="price" name="price" onChange={handleChange}>
        <option value="lt100">Menos que 100</option>
        <option value="101-200">De 101 a 200</option>
        <option value="201-300">De 201 a 300</option>
        <option value="gt300">Más de 300</option>
      </select>
    </nav>
  );
}

export default Navbar;




