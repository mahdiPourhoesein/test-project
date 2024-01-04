import { Navigate, Outlet, useLocation } from 'react-router-dom'

const ProtectedRoute = () => {
    const authenticated = localStorage.getItem("accessToken");
    if (!authenticated) {
        return (
            <Navigate
                replace
                to="/sign-in"
            />
        )
    }

    return <Outlet />
}

export default ProtectedRoute
