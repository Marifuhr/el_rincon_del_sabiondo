import { useAuth0 } from "@auth0/auth0-react";
import { Button, Text } from "@chakra-ui/react";
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
  console.log(info);
  console.log(userComplete);
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
              fontSize="1.1rem"
              p={4}
              onClick={handleBuy}
            >
              Comprar
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
              fontSize="1.1rem"
              p={4}
              onClick={handleProfile}
            >
              Completar Perfil
            </Button>
          </>
        )
      ) : (
        <Text
          m={0}
          textAlign="center"
          whiteSpace="nowrap"
          background="rgba(0,0,0,0.03)"
          p={1}
          borderRadius={3}
        >
          Debes iniciar sesión
        </Text>
      )}
    </>
  );
}

export default WalletMercadoPago;
