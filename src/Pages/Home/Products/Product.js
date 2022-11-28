import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/Authprovider";
import { BiCheckCircle } from 'react-icons/bi';
import toast from "react-hot-toast";
const Product = ({
  pro,
  setCategoryName,
  setCategoryDesc,
  setProductFullInfo
}) => {
  // pro = product
  const {
    brand,
    category_id,
    description,
    location,
    originalPrice,
    productImg,
    productCondition,
    productName,resalePrice, sellerName,sellerEmail,sellerMobile,_id,yearOfPurchase,
    postedOn} = pro;


  
     // check seller is verified or not 
     const [sellerInfo,setSellerInfo] = useState([]);
     const [sellerVerificationLoading,setSellerVerificationLoading] = useState(true);
 
       useEffect(()=>{
           fetch(`https://pro-mart-server.vercel.app/checkSellerVerify?email=${sellerEmail}`)
           .then(res=>res.json())
           .then(data=>{
 
            setSellerInfo(data)
            setSellerVerificationLoading(false);
           })
 
       },[sellerEmail]);
  

  const {user,loading} = useContext(AuthContext);

  const { data: categoryInfo = [] } = useQuery({
    queryKey: ["category", category_id],
    queryFn: async () => {
      const res = await fetch(
        `https://pro-mart-server.vercel.app/categoryinfo?id=${category_id}`
      );
      const data = res.json();
      return data;
    },
  });

  const { category_desc, category_name } = categoryInfo;

  setCategoryName(category_name);
  setCategoryDesc(category_desc);


  // report to admin 

  const reportToAdminHandler = (pro)=>{

          const product = {
             sellerName,
             sellerEmail,
             sellerMobile,
             productName,
             productImg,
             product_id: _id
          }
      
        fetch('https://pro-mart-server.vercel.app/report/product',{
            method:'POST',
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(product)
        })
        .then(res=>res.json())
        .then(data=>
          {
            if(data.acknowledged)
            {
               toast.success("Product report success")
            }
          })
  }

  
 if(loading)
 {
  return <div>user loading .. </div>
 }

  return (
    <div className=" transition-shadow duration-300 bg-white rounded shadow-sm">
      <img src={productImg} className=" w-full h-64" alt="" />
       <button onClick={()=>reportToAdminHandler(pro)} className="btn btn-sm">Report</button>
      <div className="p-5 border border-t-0">
        <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
          Category : {category_name} |
          <span className="text-orange-600"> Posted on — {postedOn?postedOn.split('T')[0] :'Not found'}</span>
        </p>

        <p className="mb-2 text-gray-700">
          <span className="text-red-400 font-bold">Name</span> : {productName}{" "}
          <br /> <span className="text-red-400 font-bold">Brand</span> : {brand}
        </p>

        <p className="mb-2 text-gray-700">
          <span className="text-red-400 font-bold">Original Price</span> :{" "}
          {originalPrice}Tk <br />{" "}
          <span className="text-orange-500 font-bold">Resale Price</span> :{" "}
          {resalePrice}Tk
        </p>

        <p className="mb-2 text-gray-700">
          <span className="text-red-400 font-bold">Purches Years </span> :{" "}
          {yearOfPurchase} 
        </p>

        <p className="mb-2 text-gray-700">
          <span className="text-red-400 font-bold">Product Condition </span> :{" "}
          {productCondition}
        </p>

        <p className="mb-2 text-gray-700">
           <div className="flex items-center">
           <span className="text-red-400 font-bold"> Seller Name </span> :
          {` ${ sellerName?sellerName:'Not found'}`} <span>{sellerInfo?.verified === true && <BiCheckCircle className="text-blue-600 ml-1"/>}</span>
            </div>    
        </p>

        <p className="mb-2 text-gray-700">
          <span className="text-red-400 font-bold">Seller Mobile </span> :{" "}
          {sellerMobile}
        </p>

        <p className="mb-2 text-gray-700">
          <span className="text-red-400 font-bold">Seller Email </span> :{" "}
          {sellerEmail}
        </p>

        <p className="mb-2 text-gray-700">
          <span className="text-red-400 font-bold">Location</span> : {location}
        </p>

        <p className="mb-2 text-gray-700">
          <span className="text-red-400 font-bold"> Description </span> :{" "}
          {description}
        </p>

        <label
          htmlFor="product-booked-modal"
          onClick={() => setProductFullInfo(pro)}
          className="bg-orange-400 px-2 py-1 rounded-sm hover:bg-orange-600 hover:text-white"
        >
          Book Now
        </label>
      </div>
    </div>
  );
};

export default Product;
