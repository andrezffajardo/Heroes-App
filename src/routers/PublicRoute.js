import { AuthContext } from '../auth/authContext';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';


export const PublicRoute = ({ children }) => {

    const { user } = useContext(AuthContext);

    return user.logged
        ? <Navigate to="/marvel" />
        : children
};
