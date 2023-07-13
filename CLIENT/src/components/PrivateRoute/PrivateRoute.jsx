import { useEffect } from 'react';
import { useUserInfo } from '../../context/ProviderUser';

const PrivateRoute = ({ children }) => {
    const {user} = useUserInfo();
    
    useEffect(() => {
        console.log(user);
    },[user]);

    return (
        children
    )
}

export default PrivateRoute