import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main/Main";
import Header from "../components/Main/Header";
import Footer from "../components/Main/Footer";

const route = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>
    },
    {
        path:'/header',
        element:<Header></Header>
    },
    {
        path:'/footer',
        element:<Footer></Footer>
    }
])

export default route;