import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useContext } from "react";

const { createContext } = require("react");

//Create context
const contextUser = createContext();

//Hook useUserInfo
export const useUserInfo = () => {
    return useContext(contextUser);
};


//Provider context para Acceder a los usuarios 
const ProviderUser = ({ children }) => {
    const { user, isAuthenticated } = useAuth0();

    useEffect(() => {
        console.log({user, isAuthenticated});
    },[]);

    return (
        <contextUser.Provider>
            {
                children
            }
        </contextUser.Provider>
    );
};

export default ProviderUser;