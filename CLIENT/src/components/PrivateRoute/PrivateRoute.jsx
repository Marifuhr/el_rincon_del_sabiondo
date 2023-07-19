import { Navigate } from 'react-router-dom';
import { useUserInfo } from '../../context/ProviderUser';
import { useEffect, useRef, useState } from 'react';

const PrivateRoute = ({ children }) => {
    const { user } = useUserInfo();
    const [isLoading, setIsLoading] = useState(true);
    const timeout = useRef();

    useEffect(() => {
        if (user) {
            clearTimeout(timeout.current);
            setIsLoading(false);
            return;
        }
        timeout.current = setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, [user]);

    return (
        !isLoading && user && (user.role === 'admin' ?
            children
            : <Navigate to='/' replace={true} />)
    )
}
export default PrivateRoute