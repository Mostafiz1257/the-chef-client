import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main/Main";

import Footer from "../components/Main/Footer";
import Navbar from "../components/Main/Navbar";

const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>
    },
    {
        path: '/navbar',
        element: <Navbar></Navbar>
    },
    {
        path: '/footer',
        element: <Footer></Footer>
    }
])

export default route;