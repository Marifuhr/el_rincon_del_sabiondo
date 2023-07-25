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
import SearchBar from "../SearchBar/SearchBar";
import { useLocation } from "react-router-dom";


function NavBar() {
  const { isOpen: isMobileNavOpen } = useDisclosure();
  const theme = useTheme();
  const location = useLocation();

  const isHomePage = location.pathname === "/home";

  const { isAuthenticated, user } = useAuth0();

  const bg = theme.colors.brand.secondary;

  //const mobileNav = useDisclosure();
  return (
    <React.Fragment>
        <chakra.header
      bg={bg}
      w="full"
      px={{ base: 2, sm: 4 }}
      py={4}
      shadow="md"
      position="fixed" // Agregar el estilo de posición fija
      top={0} // Ajustar la posición superior según sea necesario
      zIndex={100} // Ajustar el índice de apilamiento según sea necesario
    >
      <Flex
        alignItems="center"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-between"
        mx="auto"
      >
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
            
          </HStack>
        </HStack>
        {isHomePage && (
          <div
            style={{
              flex: 1,
              width: "100%",
              maxWidth: "400px",
              "@media (min-width: 48em)": {
                width: "300px",
                maxWidth: "none",
              },
            }}
          >
            <SearchBar />
          </div>
          )}
        <HStack
          spacing={3}
          display={isMobileNavOpen ? "none" : "flex"}
          alignItems="center"
        >
          {/*----------------------- SECCION PERFIL -----------------------------*/}
          <Flex gap={3}>
            {isAuthenticated ? (
              <>
                <Profile />
                <Flex flexDirection="column" ml="-3">
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

