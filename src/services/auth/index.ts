import API from "../../axiosConfig"
import SIGNIN from "../../axiosConfig/auth"
import { TSignIn, TSignUp } from "../../types/auth"

export async function loginAuthService(data: TSignIn) {
    return SIGNIN.post("/api/user/sign-in/" , data)
}
export async function signUpAuthService(data: TSignUp) {
    return SIGNIN.post("/api/user/sign-up/" , data)
}
export async function postRefreshTokenService(data: {refresh: string}) {
    return SIGNIN.post("/api/user/refresh/" , data)
}
export async function logOutService(data: {refresh: string}) {
    return API.post("/api/user/logout/" , data)
}