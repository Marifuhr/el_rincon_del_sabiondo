import { Navigate } from 'react-router-dom';
import { useUserInfo } from '../../context/ProviderUser';

const PrivateRoute = ({ children }) => {
    const {user} = useUserInfo();
    
    return (
        user ?
            children
        : <Navigate to='/' replace={true}/>
    )
}

export default PrivateRoute