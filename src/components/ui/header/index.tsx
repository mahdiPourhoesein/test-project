import { useDispatch } from "react-redux";
import { authActions, useAuth } from "../../../redux";
import { useNavigate } from "react-router";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user} = useAuth()
    const handleLogout = () => {
        const refresh = localStorage.getItem("refreshToken")
        refresh && dispatch(authActions.logOut({navigate , data:{refresh: refresh}}))
    }
    return(
        <div className="w-full shadow-[0px_2px_2px_0px_rgba(154,154,154,0.25)] bg-white-color">
            <div className="max-w-[1062px] mx-auto flex items-center justify-between h-[90px]">
                <div onClick={()=> navigate("/dashboard")} className={`cursor-pointer text-[18px] font-[700] ${window.location.pathname == "/dashboard" ? 'text-border-color': 'text-gray-text-color'}`}>Posts</div>
                <div className="flex items-center gap-[15px]">
                    <div className="flex items-center gap-[15px]">
                        <img className="w-[70px] h-[70px] rounded-full" src={user.image} />
                        <p className="font-[500] text-gray-text-color text-[16px]">{user.first_name} {user.last_name}</p>
                    </div>
                    <p onClick={handleLogout} className="text-[16px] text-border-color font-[700] cursor-pointer">Logout</p>
                </div>
            </div>
        </div>
    )
}
export default Header;