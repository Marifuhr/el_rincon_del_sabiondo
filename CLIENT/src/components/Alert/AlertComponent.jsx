import { Alert, AlertIcon, AlertDescription } from "@chakra-ui/react";

function AlertComponent({type, messageValue}) {
    return (
        <Alert pos='absolute' top={2} left={'50%'} transform={'translateX(-50%)'} fontSize={'sm'} whiteSpace={'nowrap'} w={'auto'} className="" my={2} variant='top-accent'  boxShadow={'md'} borderRadius={5} status={type}>
            <AlertIcon />
            <AlertDescription fontWeight={400} textAlign='center'>{messageValue}</AlertDescription>
        </Alert>
    );
}

export default AlertComponent;