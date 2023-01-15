import React from "react";
import { useLoaderData } from "react-router-dom";
import {BiCheckCircle} from 'react-icons/bi'
import { useEffect } from "react";
import { useState } from "react";
import AddsBookedModal from "./AddsBookedModal";

const AdvertisementDetails = () => {
    const [sellerInfo,setSellerInfo] = useState(null);
  const addvertisedProdutInfo = useLoaderData();
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
    postedOn,
  } = addvertisedProdutInfo;


   // check seller is verified or not 

   useEffect(()=>{
    fetch(`https://pro-mart-server.vercel.app/checkSellerVerify?email=${sellerEmail}`)
    .then(res=>res.json())
    .then(data=>{

     setSellerInfo(data)
    })

},[sellerEmail]);

const [productFullInfo,setProductFullInfo] = useState(null);
console.log(productFullInfo)


  return (
    <div className="flex justify-center">
      <div className="card card-compact md:w-2/5 bg-base-100 shadow-xl">
        <figure>
          <img src={productImg} alt="Shoes" className="w-9/12 h-72" />
        </figure>
        <div className="card-body">
          <h2 className="text-center font-bold text-xl md:text-2xl">
            {productName} Full Specification
          </h2>

          <table className="table-auto border-collapse border border-slate-400">
        
            <tbody>

            <tr>
                <td className="border border-slate-300 text-center p-1 font-bold">Brand</td>
                <td className="border border-slate-300 p-1">{brand}</td>
              </tr>
           
              <tr>
                <td className="border border-slate-300 text-center p-1 font-bold">Category</td>
                <td className="border border-slate-300 p-1">Category</td>
              </tr>

              <tr>
                <td className="border border-slate-300 text-center p-1 font-bold">Posted On</td>
                <td className="border border-slate-300 p-1">{postedOn ? postedOn.split("T")[0] : "Not found"}</td>
              </tr>

              <tr>
                <td className="border border-slate-300 text-center p-1 font-bold">Original Price</td>
                <td className="border border-slate-300 p-1">{originalPrice}Tk</td>
              </tr>

              <tr>
                <td className="border border-slate-300 text-center p-1 font-bold">Resale Price</td>
                <td className="border border-slate-300 p-1">{resalePrice}Tk</td>
              </tr>

              <tr>
                <td className="border border-slate-300 text-center p-1 font-bold">Purchase Year</td>
                <td className="border border-slate-300 p-1">{yearOfPurchase}</td>
              </tr>


              <tr>
                <td className="border border-slate-300 text-center p-1 font-bold">Condition</td>
                <td className="border border-slate-300 p-1">{productCondition}</td>
              </tr>


              <tr>
                <td className="border border-slate-300 text-center p-1 font-bold">Seller</td>
                <td className="border border-slate-300 p-1">{sellerName}{sellerInfo?.verified === true && <BiCheckCircle className="text-blue-600 ml-1 inline-block"/>}</td>
              </tr>

              <tr>
                <td className="border border-slate-300 text-center p-1 font-bold">Seller Email</td>
                <td className="border border-slate-300 p-1">{sellerEmail}</td>
              </tr>


              <tr>
                <td className="border border-slate-300 text-center p-1 font-bold">Seller Mob</td>
                <td className="border border-slate-300 p-1">{sellerMobile}</td>
              </tr>


              <tr>
                <td className="border border-slate-300 text-center p-1 font-bold">Location</td>
                <td className="border border-slate-300 p-1">{location}</td>
              </tr>

              <tr>
                <td className="border border-slate-300 text-center p-1 font-bold">Description</td>
                <td className="border border-slate-300 p-1">{description}</td>
              </tr>
            </tbody>

                
          
          </table>
          
          <label
              htmlFor="product-booked-modal"
              onClick={() => setProductFullInfo(addvertisedProdutInfo)}
              className="btn btn-sm hover:bg-orange-600 hover:text-white"
            >
              Book Now
            </label> 
        </div>
      </div>

           {
             productFullInfo &&  <AddsBookedModal productFullInfo={productFullInfo} 
             setProductFullInfo={setProductFullInfo}  />
           }

    </div>
  );
};

export default AdvertisementDetails;
