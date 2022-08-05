import { useContext} from 'react';
import AuthContext from 'components/Auth/context/AuthContext';
import { Navigate, Outlet } from 'react-router-dom'

export const GuestOnlyRoutes = () => {
    const { user } = useContext(AuthContext);

    if (user) {
        return <Navigate to="/" />;
    }
    return <Outlet />
}