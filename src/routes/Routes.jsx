import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/News/News/News";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import LoginLayout from "../layouts/LoginLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to="/category/0" />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            }
        ]
    },
    {
        path: 'category',
        element: <Main />,
        children: [
            {
                path: ':id',
                element: <Category />,
                loader: ({ params }) => fetch(`https://the-news-dragon-server-tau-nine.vercel.app/categories/${params.id}`)
            }
        ]

    },
    {
        path: 'news',
        element: <NewsLayout />,
        children: [
            {
                path: ':id',
                element: <News />,
                loader: ({ params }) => fetch(`https://the-news-dragon-server-tau-nine.vercel.app/news/${params.id}`)
            }
        ]
    }
])

export default router;