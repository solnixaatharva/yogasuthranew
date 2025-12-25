import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../../Pages/AboutUs/AboutUs";
import Blog from "../../Pages/Blog/Blog";
import ContactUs from "../../Pages/ContactUs/ContactUs";
import Faq from "../../Pages/FAQ/Faq";
import Home from "../../Pages/Home";
import Shop from "../../Pages/Shop/Shop";
import Login from "../Login/Login";
import Register from "../Login/Register/Register";
import Root from "../Root/Root";
import ServiceDetail from "../ServiceDetail/ServiceDetail";
import Services from "../Services/Services";
import PrivateRoute from "./PrivateRoute";


const myCreateRoute = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:'/shop',
                element:<PrivateRoute><Shop></Shop></PrivateRoute>,
            },
            {
                path:'/blog',
                element:<PrivateRoute><Blog></Blog></PrivateRoute>,
            },
            {
                path:'/aboutus',
                element:<AboutUs></AboutUs>,
            },
            {
                path:'/contactus',
                element:<ContactUs></ContactUs>,
            },
            {
                path:'/faq',
                element:<Faq></Faq>,
            },
            {
                path:'/login',
                element:<Login></Login>,
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/services',
                element:<Services></Services>,
                loader:()=>fetch('/services.json'),
            },
            {
                path:'/serviceDetail/:id',
                element:<PrivateRoute><ServiceDetail></ServiceDetail></PrivateRoute> ,
                loader: () => fetch('/services.json')
            }
        ]
    }



])

export default myCreateRoute;