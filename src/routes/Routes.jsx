import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main/Main";
import Footer from "../components/Main/Footer";
import Navbar from "../components/Main/Navbar";
import Details from "../components/pages/Details";
import DetailsCard from "../components/pages/DetailsCard";
import ChefDetails from "../components/pages/ChefDetails";

const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/navbar',
                element: <Navbar></Navbar>
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
                element:<ChefDetails></ChefDetails>

            },
            {
                path: ':id',
                element: <DetailsCard></DetailsCard>
            }
        ]
    }

])

export default route;