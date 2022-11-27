import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/Authprovider";
import { BiCheckCircle } from 'react-icons/bi';
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
    productName,
    resalePrice,
    sellerName,
    sellerEmail,
    sellerMobile,
    yearOfPurchase,sellerIsVerified
  } = pro;


  
     // check seller is verified or not 
     const [sellerInfo,setSellerInfo] = useState();
     const [sellerVerificationLoading,setSellerVerificationLoading] = useState(true);
 
       useEffect(()=>{
           fetch(`http://localhost:5000/checkSellerVerify?email=${sellerEmail}`)
           .then(res=>res.json())
           .then(data=>{
 
            setSellerInfo(data)
            setSellerVerificationLoading(false);
           })
 
       },[]);
  

  const {user,loading} = useContext(AuthContext);

  const { data: categoryInfo = [] } = useQuery({
    queryKey: ["category", category_id],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/categoryinfo?id=${category_id}`
      );
      const data = res.json();
      return data;
    },
  });

  const { category_desc, category_name } = categoryInfo;

  setCategoryName(category_name);
  setCategoryDesc(category_desc);

  
 if(loading)
 {
  return <div>user loading .. </div>
 }

  return (
    <div className=" transition-shadow duration-300 bg-white rounded shadow-sm">
      <img src={productImg} className=" w-full h-64" alt="" />
      <div className="p-5 border border-t-0">
        <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
          Category : {category_name} |
          <span className="text-gray-600"> Posted on — 28 Dec 2020</span>
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
          <span className="text-red-400 font-bold">Used Time </span> :{" "}
          {yearOfPurchase} years
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
