import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import {
  Stack,
  Heading,
  Button,
  Image,
  Text,
  Divider,
  ButtonGroup,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";




function Cards({ props }) {
  // const { title, description, datePublication, categories } = props;
  console.log(props.title);

  return (

    <Card border="1px" borderColor="gray.200" bg="white" shadow="md" p="5">

      <CardBody >
        <Link to={`/detail/${props.IdBook}`}>
          <Image src={props.image} borderRadius="lg" marginTop="-8px" /></Link>
        <Stack mt="3" spacing="1">
          <Heading size="sm">{props.title}</Heading>
          <Text>{props.description.slice(0, 90) + '...'}</Text>
          <Text>{props.datePublication}</Text>
          <Text>{props.categories}</Text>
          <Text color="blue.600" fontSize="2xl">
            {`price: ${props.price}`}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup style={{
          display:"flex",
          width:"100%",
          justifyContent:"center"
        }}>
          <Button
            variant="ghost"
            colorScheme="blue"
            style={{
              width:"120px",
              display:"flex",
              alignItems:"center",
              justifyContent:"space-between"
            }}
          >
            {""}Favorito
            <Image
              src="src\assets\image\Star.png"
              style={{
                width: "20px",
                transform:"translateY(-2px)"
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
  );
}

export default Cards;