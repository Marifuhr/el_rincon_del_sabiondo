import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import image1 from "../../assets/carousel_imagen/Carrusel11.jpg";

export default function Anuncio1() {
  return (
    <Flex
      w={"full"}
      h={"50vh"}
      backgroundImage={image1}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Stack position={"relative"} right={10} p={{ base: 4, sm: 8 }}>
            <Button
              variant={"boton1"}
              rounded={"full"}
              color={"white"}
              mt={60}
              _hover={{ bg: "brand.tertiary" }}
            >
              Comprálo ya!
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
