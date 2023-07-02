import  { useState, useEffect } from "react";
import "./NavBar.css";
import CartIcon from "../../assets/image/carrito.png";
import { Link } from "react-router-dom";
import axios from "axios";

import {
  Box,
  useColorModeValue,
} from "@chakra-ui/react";


import { useDispatch, useSelector } from "react-redux";
import { filterResults, orderPrice } from "../../Redux/Action/Index";
import { LoginButton } from "../../components/Login/Login";
import Logo from "../../elements/Logo";


const endpoint = "https://ser-back-sab.onrender.com";
const initialFilters = {
  category: "",
  price: "",
};
function Navbar() {
  const filters = useSelector((state) => state.filters);
  const [options, setOptions] = useState([]);
  const dispatch = useDispatch();
  const [selectedFilters, setSelectedFilters] = useState(initialFilters);
  const [categoryValue, setCategoryValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [buttonText, setButtonText] = useState("Precios menor a mayor");

  const handleReset = () => {
    dispatch(filterResults(initialFilters));
    setCategoryValue("");
    setPriceValue("");
  };
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
        setCategoryValue(value);
        return dispatch(
          filterResults({
            ...filters,
            category: value,
          })
        );

      case "price":
        setPriceValue(value);
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
  const handleSortClick = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    const newButtonText =
      sortOrder === "asc" ? "Precios mayor a menor" : "Precios menor a mayor";

    setSortOrder(newSortOrder);
    setButtonText(newButtonText);

    dispatch(orderPrice(newSortOrder));
  };

  return (
    <nav className="header">
      <Box mt={2}>
        <Logo color={useColorModeValue("gray.700", "white")} />
      </Box>
      <Link to="/" className="navbar-salir">
        Salir
      </Link>
      <div className="navbar-right">
        <LoginButton/>
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
      {/* <SearchBar /> */}
      <div className="navbar-center">
        <ul>
          <Link to="/home">
              <li>Inicio</li>
          </Link>
          <Link to="/about">
              <li>Nosotros</li>
          </Link>
          <Link to="/contacto">
              <li>Contacto</li>
          </Link>
          <Link to="/create">
            <li>Agrega un libro</li>
          </Link>
        </ul>
      </div>
      <div className="filtros_posjqlk">
        <select
          className="select_lkow"
          name="category"
          onChange={handleChange}
          value={categoryValue}
        >
          <option value="">Seleccionar</option>
          {options.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
        <select
          className="select_lkow"
          id="price"
          name="price"
          onChange={handleChange}
          value={priceValue}
        >
          <option value="">todos</option>
          <option value="lt100">Menos que 100</option>
          <option value="101-200">De 101 a 200</option>
          <option value="201-300">De 201 a 300</option>
          <option value="gt300">Más de 300</option>
        </select>
        <button onClick={handleSortClick}>{buttonText}</button>
        <button className="clear_button" onClick={handleReset}>Limpiar</button>
      </div>
    </nav>
  );
}

export default Navbar;