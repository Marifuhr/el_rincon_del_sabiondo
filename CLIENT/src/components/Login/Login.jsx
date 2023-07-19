import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button } from "@chakra-ui/react";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Box>
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
    </Box>
  );
};

// import React from 'react';
// import { useAuth0 } from '@auth0/auth0-react';

// export const LoginButton = () => {
//   const { loginWithRedirect } = useAuth0();
//   return (
//     <button onClick={() => loginWithRedirect()}>Login</button>
//   );
// };
