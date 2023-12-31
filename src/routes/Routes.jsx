import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main/Main";
import Footer from "../components/Main/Footer";
import Navbar from "../components/Main/Navbar";
import Details from "../components/pages/Details";
import DetailsCard from "../components/pages/DetailsCard";
import ChefDetails from "../components/pages/ChefDetails";
import Login from "../components/LoginLayout/Login";
import Register from "../components/LoginLayout/Register";
import PrivateRoute from "./PrivateRoute";
import LoginLayOut from "../components/pages/LoginLayOut";
import Blog from "../components/pages/Blog";
import Error from "../components/pages/Error";
import Branch from "../components/Main/Branch";

const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/navbar',
                element: <Navbar></Navbar>
            },
            {
                path: 'branch',
                element: <Branch></Branch>
            },
            {
                path: '/footer',
                element: <Footer></Footer>
            },

        ]
    },
    {
        path: 'details',
        element: <Details></Details>,
        children: [
            {
                path: '/details',
                element: <ChefDetails></ChefDetails>

            },
            {
                path: ':id',
                element: <PrivateRoute><DetailsCard></DetailsCard></PrivateRoute>
            }
        ]
    },
    {
        path: 'blog',
        element: <Blog></Blog>
    },
    {
        path: 'login',
        element: <Login></Login>
    },
    {
        path: 'register',
        element: <Register></Register>
    },

]






)

export default route;