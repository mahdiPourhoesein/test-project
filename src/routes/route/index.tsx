import {
    Navigate,
    Route,
    Routes,
    redirect,
  } from "react-router-dom";
import ProtectedRoute from "../../components/route/protectedRote";
import { publicRoutes } from "../publicRoutes";
import { TRoute } from "../../types/route";
import PublicRoute from "../../components/route/publicRoute";
import { privateRoutes } from "../privateRoutes";
import Header from "../../components/ui/header";
  
const RouteComponent = () => {
    return(
        <Routes>
            <Route element={<PublicRoute/>}>
                {publicRoutes.map((route: TRoute)=> (
                    <Route key={route.key} path={route.path} element={route.component} />
                ))}
                <Route
                    path="*"
                    element={<Navigate to="/sign-in" />}
                />
            </Route>
            <Route path="/" element={<ProtectedRoute/>}>
                {privateRoutes.map((route: TRoute)=> (
                    <Route 
                        key={route.key} 
                        path={route.path} 
                        element={
                            <div className="bg-gray-color pb-[30px] min-h-[100vh] w-full">
                                <Header />
                                {route.component}
                            </div>
                        } 
                    />
                ))}
                <Route path="*" element={<Navigate replace to="/dashboard" />} />
            </Route>
        </Routes>
    )
}
export default RouteComponent;