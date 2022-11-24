import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import AllBuyer from "../../Pages/Dashboard/Admin/AllBuyer/AllBuyer";
import AddProduct from "../../Pages/Dashboard/Seller/AddProduct/AddProduct";
import MyProducts from "../../Pages/Dashboard/Seller/MyProducts/MyProducts";
import MyOrders from "../../Pages/Dashboard/Buyer/Myorders/MyOrders";
import AllSeller from "../../Pages/Dashboard/Admin/AllSeller/AllSeller";
import { Login } from "../../Pages/Auth/Login/Login";
import Register from "../../Pages/Auth/Register/Register";



const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            }
        ]
    },
    {
        path:'/dashboard',
        element:<DashboardLayout/>,
        children:[
            {
                path:'/dashboard',
                element:<div className="border w-full ">Outlet</div>
            }
            ,

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
                element: <MyProducts/>
            },

            // for buyer
            {
                path:'/dashboard/myorders',
                element: <MyOrders/>
            }
        ]
    }
]);

export default router;