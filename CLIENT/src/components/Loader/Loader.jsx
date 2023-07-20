import { Box } from '@chakra-ui/react'
import { ColorRing } from 'react-loader-spinner'

const Loader = ({mode="basic"}) => {
    const modePropsLoader = {
        basic:{
            display:"flex",
            justifyContent:"center",
        },
        full:{
            w:"100vw",
            h:"100vh",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
        }
    }
   

    return (
        <Box {...modePropsLoader[mode]}>
            <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#5be173', '#186c24', '#a65c12', '#abd056', '#294d2e']}
            />
        </Box>
    )
}

export default Loader