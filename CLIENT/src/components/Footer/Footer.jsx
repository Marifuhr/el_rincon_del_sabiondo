import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import logoImage from "../../assets/image/Logo.png";
import { Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { sendMailSubscription } from "../../Redux/Action/Index";

const Logo = () => {
  return (
    <Box display="flex" alignItems="center">
      <Image src={logoImage} alt="Logo" boxSize="80px" />
      <div>
        <Text fontSize="lg" fontFamily="Roboto" mb="-0.5rem">
          El Rincón del
        </Text>
        <Text fontSize="2xl" fontFamily="Roboto" mt="-0.5rem">
          Sabiondo
        </Text>
      </div>
    </Box>
  );
};

const SocialButton = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children, label, href } = props;
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

// eslint-disable-next-line react/prop-types
const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  const dispatch = useDispatch();
  const [mail, setMail] = useState("");

  const handleClick = () => {
    dispatch(sendMailSubscription({ email: mail }));
    setMail("");
  };

  return (
    <Box
      bg={"#70a57b"}
      color={useColorModeValue("gray.00", "gray.200")}
      boxShadow={"0px 4px 12px rgba(0, 0, 0, 0.8)"}
    >
      <Container as={Stack} maxW={"6xl"} py={3}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={7}
        >
          <Stack align={"flex-start"}>
            <Box mt={4}>
              <Logo color={useColorModeValue("gray.700", "white")} />
            </Box>
            <Stack direction={"row"} spacing={6} mt={8} mb={2}>
              <SocialButton label={"Twitter"} href={"https://twitter.com/"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"https://www.youtube.com/"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton
                label={"Instagram"}
                href={"https://www.instagram.com/"}
              >
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Proyecto Grupal</ListHeader>
            <Link to="/about">Nosotros</Link>
            <Link to="/contacto">Contacto</Link>
            <Link to="/">Testimonios</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Servicios</ListHeader>
            <Link to="/construccion">Vende con Nosotros</Link>
            <Link to="/construccion">Terminos y Reglas</Link>
            <Link to="/construccion">Venta a Instituciones</Link>
            <Link to="/construccion">Programa de Afiliados</Link>
          </Stack>
          <Stack spacing={6} align={"flex-start"}>
            <ListHeader>Mantengase al Día</ListHeader>
            <form action="">
              <Stack direction={"row"} spacing={6}>
                <Input
                  placeholder={"Su dirección de Correo Electrónico"}
                  bg={useColorModeValue("blackAlpha.300", "whiteAlpha.100")}
                  border={0}
                  _focus={{
                    bg: "whiteAlpha.300",
                  }}
                  _placeholder={{
                    color: useColorModeValue("gray.600", "gray.400"),
                    fontStyle: "italic",
                    fontSize: "xs",
                  }}
                  onChange={(e) => setMail(e.target.value)}
                  value={mail}
                />
                <IconButton
                  bg={useColorModeValue("green.400", "green.800")}
                  color={useColorModeValue("white", "gray.800")}
                  _hover={{
                    bg: "green.600",
                  }}
                  aria-label="Subscribe"
                  icon={<BiMailSend />}
                  onClick={() => {
                    handleClick();
                    console.log(mail);
                    setMail("");
                  }}
                />
              </Stack>
            </form>

            <Text fontSize={"sm"} fontWeight={"bold"}>
              © 2023 El Rincon del Sabiondo. Todos los Derechos Reservados
            </Text>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
