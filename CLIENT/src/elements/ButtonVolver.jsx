import { Link as ChakraLink, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function ButtonVolver() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  return (
    <Button
      color={"white"}
      bg={"#70a57b"}
      margin={"10px"}
      onClick={handleClick}
      as={ChakraLink}
      to="/home"
      className="btn-back"
      _hover={{
        color: "white",
        transform: "translateY(-2px)",
        boxShadow: "lg",
        textDecoration: "none"
      }}
      
    >
      Volver
    </Button>
  );
}

export default ButtonVolver;
