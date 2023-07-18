import { Box, Text } from "@chakra-ui/react";
import { changePage, useBooksAdmin } from "../../context/ProviderBooksAdmin";

const PaginatorBooksAdmin = () => {
    const [{nPaginator, currentPage}, dispatch] = useBooksAdmin();

    const handleChangePage = (e) => {
        const page = Number(e.target.textContent) - 1;
        dispatch(changePage(page));
    };
    
    return (
        <Box bg="#00000010" borderRadius={20} m={0} p={1} display="flex" gap={1} maxW="500px" w="100%" mx="auto" my={2} justifyContent="center" flexWrap="wrap">
            {
                new Array(nPaginator).fill("").map((v,i) => (
                    <ButtonPaginator handleChangePage={handleChangePage} active={currentPage === i} page={i+1} key={(Math.random()* i)} />
                ))
            }
        </Box>
    )
}

export default PaginatorBooksAdmin

function ButtonPaginator({handleChangePage, page, active}) {
    return (
        <Box onClick={handleChangePage} bg={active ? "#0dcaf0" : "white"} transition="all .3s ease" _hover={{transform:"scale(1.05)", bg:"rgba(255,255,255,0.5)"}} cursor="pointer" w="32px" boxShadow="0 1px 5px rgba(0,0,0,0.2)" h="32px" textAlign="center" position="relative" borderRadius="20px" overflow="hidden">
            <Text fontSize={14} position="absolute" top="50%" left="50%" transform="translateX(-50%) translateY(-50%)">{page}</Text>
        </Box>
    );
}