import { useAuth0 } from "@auth0/auth0-react";
import { Button, Text } from "@chakra-ui/react";
import { Wallet, initMercadoPago } from "@mercadopago/sdk-react";
import { useState } from "react";
import { createPreference } from "../../utils/mercadoPago";

function WalletMercadoPago({products}) {
    const [preferenceId, setPreferenceId] = useState(null);
    const { isAuthenticated } = useAuth0();

    const handleBuy = async () => {
        initMercadoPago(import.meta.env.VITE_TOKEN_MERCADO_PAGO);

        const id = await createPreference(products);
        if (id) {
            setPreferenceId(id);
        }
    };

    return (
        <>
            {
                isAuthenticated ? (
                    <>
                        <Button title="Agregar al Carrito" colorScheme="teal" variant="solid" w="100%" fontSize="1.1rem" p={4} onClick={handleBuy}>Comprar</Button>
                        {preferenceId && <Wallet initialization={{ preferenceId }} />}
                    </>
                ) : <Text m={0} textAlign="center" whiteSpace="nowrap" background="rgba(0,0,0,0.03)" p={1} borderRadius={3}>Debes iniciar sesión</Text>
            }
        </>
    );
}

export default WalletMercadoPago;