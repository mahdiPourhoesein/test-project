import Dashboard from "../pages/dashboard";
import CreatePost from "../pages/post/createPost";

export const privateRoutes = [
    {
        key: 1,
        title: "Dashboard",
        path: "/dashboard",
        component: <Dashboard />
    },
    {
        key: 2,
        title: "Create Post",
        path: "/create-post",
        component: <CreatePost />
    },
]