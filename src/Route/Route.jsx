import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Dashboard from "../pages/Dashboard";
import ErrorPage from "../Components/ErrorPage";
import Product from "../pages/Product";


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
                element: <Dashboard></Dashboard>
            },
        ]

    }
])

export default route;