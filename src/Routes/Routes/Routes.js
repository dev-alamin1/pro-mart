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
import ReportedProducts from "../../Pages/Dashboard/Admin/ReportedProducts/ReportedProducts";
import CommonDashboard from "../../Pages/Dashboard/CommonDashboard/CommonDashboard";
import AdvertisementDetails from "../../Pages/Home/Advertisements/AdvertisementDetails";




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
                loader:({params})=>fetch(`https://pro-mart-server.vercel.app/category/${params.id}`),
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
            },
            {
                path:'/productId/:id',
                loader:({params})=>fetch(`https://pro-mart-server.vercel.app/addvertise/product/${params.id}`),
                element:<AdvertisementDetails/>,
               
            }
        ]
    },
    {
        path:'/dashboard',
        element:<DashboardLayout/>,
        children:[
           
            {
                path:'/dashboard',
                element:<CommonDashboard/>
            },
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
            },
            {
                path:'/dashboard/reported/products',
                element: <ReportedProducts/>
            }
        ]
    }
]);

export default router;