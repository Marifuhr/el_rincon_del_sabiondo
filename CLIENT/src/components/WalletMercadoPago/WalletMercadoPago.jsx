import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  PopoverFooter,
  Box,
  ButtonGroup,
  Button,
  Text,
} from "@chakra-ui/react";

import { Wallet, initMercadoPago } from "@mercadopago/sdk-react";
import { useState } from "react";
import { createPreference } from "../../utils/mercadoPago";
import { useUserInfo } from "../../context/ProviderUser";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function WalletMercadoPago({ products }) {
  const [preferenceId, setPreferenceId] = useState(null);
  const { isAuthenticated } = useAuth0();
  const info = useUserInfo();
  const [userComplete, setUserComplete] = useState(null);
  const navigate = useNavigate();
  const initialFocusRef = React.useRef();
  const { loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (info.user) {
      const { address, city, country, postalCode, province } = info.user;
      if (address && city && country && postalCode && province) {
        setUserComplete(true);
      }
    }
  }, [info]);
  const handleBuy = async () => {
    initMercadoPago(import.meta.env.VITE_TOKEN_MERCADO_PAGO);

    /* { title, description, picture_url, quantity, unit_price} */

    const finalProducts = products.map(
      ({ price, quantity, image, title, description }) => {
        const descriptionLast = description.slice(0, 250);
        return {
          unit_price: price,
          quantity,
          picture_url: image,
          title,
          description: descriptionLast,
        };
      }
    );
    const id = await createPreference(finalProducts);
    if (id) {
      setPreferenceId(id);
    }
  };

  const handleProfile = () => {
    navigate("/profile/myProfile");
  };

  return (
    <>
      {isAuthenticated ? (
        userComplete ? (
          <>
            <Button
              title="Agregar al Carrito"
              colorScheme="teal"
              variant="solid"
              w="100%"
              fontSize="0.9rem" // Adjusted fontSize
              p={2} // Adjusted padding
              onClick={handleBuy}
            >
              Finalizar Compra
            </Button>
            {preferenceId && (
              <>
                <Wallet initialization={{ preferenceId }} />
              </>
            )}
          </>
        ) : (
          <>
            <Button
              title="Perfil"
              colorScheme="teal"
              variant="solid"
              w="100%"
              fontSize="0.9rem" // Adjusted fontSize
              p={2} // Adjusted padding
              onClick={handleProfile}
            >
              Completar Perfil
            </Button>
          </>
        )
      ) : (
        <Popover
          initialFocusRef={initialFocusRef}
          placement="bottom"
          closeOnBlur={false}
        >
          <PopoverTrigger>
            <Button
              variant="boton1"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              Cómpralo...!
            </Button>
          </PopoverTrigger>
          <PopoverContent
            color="black"
            bg="brand.primary"
            boxShadow="rgba(66, 140, 81, 0.4) 0px 2px 4px, rgba(66, 140, 81, 0.3) 0px 7px 13px -3px, rgba(66, 140, 81, 0.2) 0px -3px 0px inset"
          >
            <PopoverHeader pt={4} fontWeight="bold" border="0">
              "¡Hola! Queremos que encuentres el libro perfecto para ti.
            </PopoverHeader>
            <PopoverArrow bg="blue.800" />
            <PopoverCloseButton />
            <PopoverBody>
              Para disfrutar de una experiencia completa de compra de libros, te
              invitamos a registrarte o iniciar sesión en nuestra aplicación.
              ¡No te pierdas nuestras increíbles ofertas y recomendaciones
              personalizadas!"
            </PopoverBody>
            <PopoverFooter
              border="0"
              display="flex"
              alignItems="center"
              justifyContent="left"
              pb={4}
            >
              <ButtonGroup size="sm">
                <Button
                  variant="boton1"
                  color="black"
                  size="sm"
                  sx={{
                    _hover: {
                      background: "rgb(68,144,83)",
                      borderRadius: "4px",
                      boxShadow: "lg",
                    },
                  }}
                  onClick={() => loginWithRedirect()}
                >
                  Iniciar Sección
                </Button>
              </ButtonGroup>
            </PopoverFooter>
          </PopoverContent>
        </Popover>
      )}
    </>
  );
}

export default WalletMercadoPago;

// import { useAuth0 } from "@auth0/auth0-react";
// import { Button, Text } from "@chakra-ui/react";
// import { Wallet, initMercadoPago } from "@mercadopago/sdk-react";
// import { useState } from "react";
// import { createPreference } from "../../utils/mercadoPago";
// import { useUserInfo } from "../../context/ProviderUser";
// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";

// function WalletMercadoPago({ products }) {
//   const [preferenceId, setPreferenceId] = useState(null);
//   const { isAuthenticated } = useAuth0();
//   const info = useUserInfo();
//   const [userComplete, setUserComplete] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (info.user) {
//       const { address, city, country, postalCode, province } = info.user;
//       if (address && city && country && postalCode && province) {
//         setUserComplete(true);
//       }
//     }
//   }, [info]);
//   const handleBuy = async () => {
//     initMercadoPago(import.meta.env.VITE_TOKEN_MERCADO_PAGO);

//     /* { title, description, picture_url, quantity, unit_price} */

//     const finalProducts = products.map(
//       ({ price, quantity, image, title, description }) => {
//         const descriptionLast = description.slice(0, 250);
//         return {
//           unit_price: price,
//           quantity,
//           picture_url: image,
//           title,
//           description: descriptionLast,
//         };
//       }
//     );
//     const id = await createPreference(finalProducts);
//     if (id) {
//       setPreferenceId(id);
//     }
//   };

//   const handleProfile = () => {
//     navigate("/profile/myProfile");
//   };

//   return (
//     <>
//       {isAuthenticated ? (
//         userComplete ? (
//           <>
//             <Button
//               title="Agregar al Carrito"
//               colorScheme="teal"
//               variant="solid"
//               w="100%"
//               fontSize="1.1rem"
//               p={4}
//               onClick={handleBuy}
//             >
//               Comprar
//             </Button>
//             {preferenceId && (
//               <>
//                 <Wallet initialization={{ preferenceId }} />
//               </>
//             )}
//           </>
//         ) : (
//           <>
//             <Button
//               title="Perfil"
//               colorScheme="teal"
//               variant="solid"
//               w="100%"
//               fontSize="1.1rem"
//               p={4}
//               onClick={handleProfile}
//             >
//               Completar Perfil
//             </Button>
//           </>
//         )
//       ) : (
//         <Text
//           m={0}
//           textAlign="center"
//           whiteSpace="nowrap"
//           background="rgba(0,0,0,0.03)"
//           p={1}
//           borderRadius={3}
//         >
//           Debes iniciar sesión
//         </Text>
//       )}
//     </>
//   );
// }

// export default WalletMercadoPago;
