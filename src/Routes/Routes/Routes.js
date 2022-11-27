import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import AllBuyer from "../../Pages/Dashboard/Admin/AllBuyer/AllBuyer";
import AddProduct from "../../Pages/Dashboard/Seller/AddProduct/AddProduct";
import MyOrders from "../../Pages/Dashboard/Buyer/Myorders/MyOrders";
import AllSeller from "../../Pages/Dashboard/Admin/AllSeller/AllSeller";
import { Login } from "../../Pages/Auth/Login/Login";
import { Register } from "../../Pages/Auth/Register/Register";
import Products from "../../Pages/Home/Products/Products";
import MyProducts from "../../Pages/Dashboard/Seller/MyProducts/MyProducts";
import Privateroute from "../Privateroute/Privateroute";
import SellerVerifications from "../../Pages/Dashboard/Admin/SellerVerification/SellerVerifications";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Blog from "../../Pages/Blog/Blog";




const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/category/:id',
                loader:({params})=>fetch(`http://localhost:5000/category/${params.id}`),
                element:<Privateroute><Products/></Privateroute>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/blog',
                element:<Blog/>
            }
        ]
    },
    {
        path:'/dashboard',
        element:<DashboardLayout/>,
        children:[
           
            // for admin
            {
                path:'/dashboard/allseller',
                element:<AllSeller/>
            },
            {
                path:'/dashboard/allbuyer',
                element: <AllBuyer/>
            },

            // for seller 
            {
                path:'/dashboard/addproduct',
                element: <AddProduct/>
            },
            {
                path:'/dashboard/myproducts',
                element:<MyProducts/>
            },

            // for buyer
            {
                path:'/dashboard/myorders',
                element: <MyOrders/>
            }
            ,

            {
                path:'/dashboard/sellerverification',
                element: <SellerVerifications/>
            }
        ]
    }
]);

export default router;