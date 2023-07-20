import { Navigate } from 'react-router-dom';
import { useUserInfo } from '../../context/ProviderUser';
import { useEffect, useRef, useState } from 'react';

const PrivateRoute = ({ children, mode = "" }) => {
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
        !isLoading && (user ?
            (
                mode === "admin" ?
                    user.role === 'admin' ?
                        children
                        : <Navigate to='/' replace={true} />
                    : children
            )
            : <Navigate to='/' replace={true} />)
    )
}
export default PrivateRoute