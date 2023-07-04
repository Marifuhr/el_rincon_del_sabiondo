import { useState, useEffect } from "react";
import "./NavBar.css";
import { Link, useMatch } from "react-router-dom";
import axios from "axios";

import {
  Box,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";


import { useDispatch, useSelector } from "react-redux";
import { filterResults, orderPrice } from "../../Redux/Action/Index";
import { LoginButton } from "../../components/Login/Login";
import Logo from "../../elements/Logo";
import { useAuth0 } from "@auth0/auth0-react";
import { Profile } from "../Login/Profile";
import LogoutButton from "../Login/Logout";
import ShoppingCart from "../ShoppingCart/ShoppingCart";


const endpoint = import.meta.env.VITE_URL_ENDPOINT;
const initialFilters = {
  category: "",
  price: "",
};
function Navbar() {
  const { isAuthenticated } = useAuth0();
  const homeMatch = useMatch('/home');

  const filters = useSelector((state) => state.filters);
  const [options, setOptions] = useState([]);

  const dispatch = useDispatch();
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
      <Flex className="navbar-salir">
        {
          isAuthenticated ?
            <>
              <Profile />
              <LogoutButton />
            </>
            :
            <LoginButton />
        }
      </Flex>
      <Flex alignItems="center" gap={3} mt={2}>
        <Link to="/" >
          <Logo color={useColorModeValue("gray.700", "white")} />
        </Link>
        <ShoppingCart />
      </Flex>
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
            <li className="create_book_aosdhas">Agrega un libro</li>
          </Link>
        </ul>
      </div>
      {
        homeMatch &&
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
      }
    </nav>
  );
}

export default Navbar;