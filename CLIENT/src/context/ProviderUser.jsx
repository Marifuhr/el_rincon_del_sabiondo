import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useContext } from "react";
import Loader from "../components/Loader/Loader";

//Create context
const contextUser = createContext();

//Hook useUserInfo
export const useUserInfo = () => {
    return useContext(contextUser);
};

//Provider context para Acceder a los usuarios 
const ProviderUser = ({ children }) => {
    const [userDB, setUserDB] = useState({});
    const [isLoading, setIsLoading ] = useState(true);
    const { user, isAuthenticated } = useAuth0();
    
    useEffect(() => {
        if(isAuthenticated){
            axios.post(
                `${import.meta.env.VITE_URL_ENDPOINT}/users`, user
            ).then(data => {
                if(data.data.error){
                    setIsLoading(false);
                    return
                };

                setUserDB(data.data)
                setIsLoading(false);
            });
            return;
        }
        setIsLoading(false);
    },[user]);

    return (
        <contextUser.Provider value={userDB}>
            {
                isLoading ?
                    <Loader mode="full"/>
                : children
            }
        </contextUser.Provider>
    );
};

export default ProviderUser;