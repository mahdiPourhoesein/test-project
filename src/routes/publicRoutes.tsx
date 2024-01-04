import SignUp from "../pages/auth/signUp";
import SignIn from "../pages/auth/signIn";

export const publicRoutes = [
    {
        key: 1,
        title: "Sign in",
        path: "/sign-in",
        component: <SignIn />
    },
    {
        key: 2,
        title: "Sign Up",
        path: "/sign-up",
        component: <SignUp />
    },
]