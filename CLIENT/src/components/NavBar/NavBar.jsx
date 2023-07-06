
import "./NavBar.css";
import { Link } from "react-router-dom";
import {
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";

import { LoginButton } from "../../components/Login/Login";
import Logo from "../../elements/Logo";
import { useAuth0 } from "@auth0/auth0-react";
import { Profile } from "../Login/Profile";
import ShoppingCart from "../ShoppingCart/ShoppingCart";


function Navbar() {
  const { isAuthenticated } = useAuth0();

  return (
    <nav className="header">
      <Flex className="navbar-salir">
        {
          isAuthenticated ?
            <>
              <Profile />
             
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
          
          <Link to="/create">
            <li className="create_book_aosdhas">Agrega un libro</li>
          </Link>
          <div>
      </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

