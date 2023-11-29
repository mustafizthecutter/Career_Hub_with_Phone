import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Dashboard from "../pages/Dashboard";
import ErrorPage from "../Components/ErrorPage";
import Product from "../pages/Product";
import DashBoardLayOut from "../pages/DashBoardLayOut";
import Profile from "../pages/Profile";
import EditProfile from "../pages/EditProfile";

const route = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/products',
                element: <Products></Products>,
                loader: () => fetch('https://dummyjson.com/products')
            },
            {
                path: '/product/:id',
                element: <Product></Product>
            },
            {
                path: '/dashboard',
                element: <DashBoardLayOut></DashBoardLayOut>,
                children: [
                    {
                        path: '/dashboard',
                        element: <Dashboard></Dashboard>
                    },
                    {
                        path: '/dashboard/profile',
                        element: <Profile></Profile>
                    },
                    {
                        path: '/dashboard/editProfile',
                        element: <EditProfile></EditProfile>
                    },
                ]
            },
        ]

    }
])

export default route;