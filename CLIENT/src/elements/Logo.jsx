import logoImage from "../assets/image/Logo.png";
import { Image } from "@chakra-ui/react";
import {
  Box,
  Text,
} from "@chakra-ui/react";

const Logo = () => {
    return (
        <Box display="flex" alignItems="center">
            <Image src={logoImage} alt="Logo" boxSize="100px" mb={"-2rem"} />
            <div>
                <Text
                    fontSize="lg"
                    fontWeight={"bold"}
                    fontFamily="Roboto"
                    mb="-0.5rem"
                >
                    El Rincon del
                </Text>
                <Text
                    fontSize="2xl"
                    fontWeight={"bold"}
                    fontFamily="Roboto"
                    mt="-0.5rem"
                >
                    Sabiondo
                </Text>
            </div>
        </Box>
    );
};

export default Logo;