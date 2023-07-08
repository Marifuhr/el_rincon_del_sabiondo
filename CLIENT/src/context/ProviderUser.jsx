import { useAuth0 } from "@auth0/auth0-react";
import { createContext, useEffect } from "react";
import { useContext } from "react";

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
        if(isAuthenticated){
            
        }
    },[user]);

    return (
        <contextUser.Provider value={'eso'}>
            {
                children
            }
        </contextUser.Provider>
    );
};

export default ProviderUser;