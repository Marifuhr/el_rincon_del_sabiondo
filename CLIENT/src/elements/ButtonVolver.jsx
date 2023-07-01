import { Link as ChakraLink, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
function ButtonVolver() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(-1);
    }
    return (
        <Button onClick={handleClick} as={ChakraLink} to="/home" className="btn-back">
            Volver
        </Button>
    );
}

export default ButtonVolver;