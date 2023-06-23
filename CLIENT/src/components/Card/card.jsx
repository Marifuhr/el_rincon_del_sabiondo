import { Card, CardHeader, CardBody, CardFooter, Link } from "@chakra-ui/react";
import {
  Stack,
  Heading,
  Button,
  Image,
  Text,
  Divider,
  ButtonGroup,
} from "@chakra-ui/react";


function Cards() {
  return (
    <div>
      <Card maxW="sm">
        <CardBody>
          <Image src="src\assets\image\libro Card.webp" borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md">{`Title`}</Heading>
            <Text>{`Description`}</Text>
            <Text>{`Year of edition`}</Text>
            <Text>{`Category`}</Text>
            <Text color="blue.600" fontSize="2xl">
              {`price: $`}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button
              variant="ghost"
              colorScheme="blue"
              style={{
                width: "120px",
                marginLeft: "8px",
                marginRight: "5px",
              }}
            >
              {""}Favorito
              <Image
                src="src\assets\image\Star.png"
                style={{
                  width: "20px",
                  backgroundColor: "none",
                  margin: "5px",
                }}
              />
            </Button>
            <Button
              variant="ghost"
              colorScheme="blue"
              style={{
                width: "120px",
                backgroundColor: "none",
                marginLeft: "80px",
                marginRight: "40px",
              }}
            >
              know more
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Cards;
