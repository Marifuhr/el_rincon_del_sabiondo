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
                        <Button w="100%" fontSize="1.2rem" p={6} onClick={handleBuy}>Comprar</Button>
                        {preferenceId && <Wallet initialization={{ preferenceId }} />}
                    </>
                ) : <Text textAlign="center" background="rgba(0,0,0,0.03)" p={1} borderRadius={3}>Debes iniciar sesión</Text>
            }
        </>
    );
}

export default WalletMercadoPago;