import { createBrowserRouter } from "react-router-dom";
import { Home, Auth } from "../pages"
import Signin from "../components/sign in/Signin";
import CheckEmail from "../components/check email/CheckEmail";
import Verification from "../components/verification/Verification";
import Signup from "../components/sign up/Signup";


export const Router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: "/auth",
        element: <Auth />,
        children: [
            {
                path: "/auth/sign-in",
                element: <Signin />
            },
            {
                path: "/auth/sign-up",
                element:<Signup/>
            },
            {
                path: "/auth/reset-password",
            },
            {
                path: "/auth/check-email",
                element:<CheckEmail/>
            },
            {
                path: "/auth/verification",
                element:<Verification/>
            },
            {
                path: "/auth/create-new-password",
            }
        ]
    },
])