import { Navigate, Outlet } from 'react-router-dom'

const PublicRoute = () => {
    const authenticated = localStorage.getItem("accessToken");
    if (authenticated) {
        return (
            <Navigate
                replace
                to="/dashboard"
            />
        )
    }

    return <Outlet />
}

export default PublicRoute;
