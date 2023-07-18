import {
  Box,
  Button,
  CloseButton,
  Flex,
  HStack,
  IconButton,
  Text,
  VStack,
  VisuallyHidden,
  chakra,
  useDisclosure,
  useTheme,
} from "@chakra-ui/react";
import React from "react";
import { AiFillHome, AiOutlineInbox, AiOutlineMenu } from "react-icons/ai";
import Logo from "../../elements/Logo";
import { LoginButton } from "../../components/Login/Login";
import { useAuth0 } from "@auth0/auth0-react";
import { Profile } from "../Login/Profile";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { Link } from "react-router-dom";

function NavBar() {
  const theme = useTheme();

  const { isAuthenticated, user } = useAuth0();

  const bg = theme.colors.brand.secondary;

  const mobileNav = useDisclosure();
  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{
          base: 2,
          sm: 4,
        }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <HStack display="flex" spacing={3} alignItems="center">
            <chakra.a
              href="/home"
              title="Ir a Pagina Principal"
              display="flex"
              alignItems="center"
            >
              <Logo />
            </chakra.a>

            <HStack
              alignItems="right"
              spacing={3}
              display={{
                base: "none",
                md: "inline-flex",
              }}
              position="relative"
            >
              {/* <Link to="/home">
                <Button
                  variant="boton1"
                  color="black"
                  leftIcon={<AiFillHome />}
                  size="sm"
                  sx={{
                    _hover: {
                      background: "rgb(68,144,83)",
                      borderRadius: "4px",
                      boxShadow: "lg",
                    },
                  }}
                >
                  Página Principal
                </Button>
              </Link> */}
            </HStack>
          </HStack>
          <HStack
            spacing={3}
            display={mobileNav.isOpen ? "none" : "flex"}
            alignItems="center"
          >
            {/*----------------------- SECCION PERFIL -----------------------------*/}
            <Flex gap={3}>
              {isAuthenticated ? (
                <>
                  <Profile />
                  <Flex flexDirection="column" ml="-3">
                    <Text fontSize="sm" marginTop="1">
                      {user && user.name ? user.name : ""}
                    </Text>
                    <Text marginTop="-3" fontSize="xs" color="gray.600">
                      {user && user.type ? user.type : ""}
                    </Text>
                  </Flex>
                </>
              ) : (
                <LoginButton />
              )}
            </Flex>
            <Flex>
              <ShoppingCart />
            </Flex>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
}

export default NavBar;

// import "./NavBar.css";
// import { Link } from "react-router-dom";
// import {
//   Flex,
//   useColorModeValue,
// } from "@chakra-ui/react";

// import { LoginButton } from "../../components/Login/Login";
// import Logo from "../../elements/Logo";
// import { useAuth0 } from "@auth0/auth0-react";
// import { Profile } from "../Login/Profile";
// import ShoppingCart from "../ShoppingCart/ShoppingCart";

// function Navbar() {
//   const { isAuthenticated } = useAuth0();

//   return (
//     <nav className="header">
//       <Flex className="navbar-salir">
//         {
//           isAuthenticated ?
//             <>
//               <Profile />

//             </>
//             :
//             <LoginButton />
//         }
//       </Flex>
//       <Flex alignItems="center" gap={3} mt={2}>
//         <Link to="/" >
//           <Logo color={useColorModeValue("gray.700", "white")} />
//         </Link>
//         <ShoppingCart />
//       </Flex>
//       <div className="navbar-center">
//         <ul>
//           <Link to="/home">
//               <li>Inicio</li>
//           </Link>

//           {/* <Link to="/create">
//             <li className="create_book_aosdhas">Agrega un libro</li>
//           </Link> */}
//           <div>
//       </div>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
