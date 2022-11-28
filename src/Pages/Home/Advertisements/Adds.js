import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/Authprovider";
import { BiCheckCircle } from 'react-icons/bi';
const Adds = ({
  pro,
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
    yearOfPurchase,
  } = pro;

     // check seller is verified or not 
     const [sellerInfo,setSellerInfo] = useState();
     const [sellerVerificationLoading,setSellerVerificationLoading] = useState(true);
 
       useEffect(()=>{
           fetch(`https://pro-mart-server-alaminmondalcse-gmailcom.vercel.app/checkSellerVerify?email=${sellerEmail}`)
           .then(res=>res.json())
           .then(data=>{
 
            setSellerInfo(data)
            setSellerVerificationLoading(false);
           })
 
       },[]);
  

  const {user,loading} = useContext(AuthContext);

  

  
 if(loading)
 {
  return <div>loading</div>
 }

  return (
    <div className=" transition-shadow duration-300 bg-white rounded shadow-sm">
      <img src={productImg} className=" w-full h-64" alt="" />
      <div className="p-5 border border-t-0">

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

export default Adds;
