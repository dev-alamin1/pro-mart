import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Product = ({pro,setCategoryName,setCategoryDesc,setProductFullInfo}) => {
  // pro = product
  const {brand,category_id,description,
         location,originalPrice,productImg,
         productCondition,productName,resalePrice,
         sellerEmail,sellerMobile,yearOfPurchase,_id
        } = pro;

        // fetch category info
        const [categoryInfo,setCategoryInfo] = useState('');
        const {category_desc,category_name} = categoryInfo ;
        useEffect(()=>{
            fetch(`http://localhost:5000/categoryinfo?id=${category_id}`)
            .then(res=>res.json())
            .then(data=>setCategoryInfo(data))
        },[category_id]);

        setCategoryName(category_name);
        setCategoryDesc(category_desc);

    return (
        <div className=" transition-shadow duration-300 bg-white rounded shadow-sm">
        <img
          src={productImg}
          className=" w-full h-64"
          alt=""
        />
        <div className="p-5 border border-t-0">
          <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
             Category : {category_name} | 
            <span className="text-gray-600"> Posted on — 28 Dec 2020</span>
          </p>
           

           <p className="mb-2 text-gray-700">
           <span className='text-red-400 font-bold'>Name</span> : {productName} <br /> <span className='text-red-400 font-bold'>Brand</span> : {brand}
          </p>

          <p className="mb-2 text-gray-700">
            <span className='text-red-400 font-bold'>Original Price</span> : {originalPrice}Tk <br /> <span className='text-orange-500 font-bold'>Resale Price</span> : {resalePrice}Tk
          </p>

          <p className="mb-2 text-gray-700">
            <span className='text-red-400 font-bold'>Used Time </span> : {yearOfPurchase} years
          </p>

          <p className="mb-2 text-gray-700">
            <span className='text-red-400 font-bold'>Product Condition </span> : {productCondition}
          </p>

          <p className="mb-2 text-gray-700">
            <span className='text-red-400 font-bold'>Seller Mobile </span> : {sellerMobile}
          </p>

          <p className="mb-2 text-gray-700">
            <span className='text-red-400 font-bold'>Seller Email </span> : {sellerEmail}
          </p>

          <p className="mb-2 text-gray-700">
            <span className='text-red-400 font-bold'>Location</span> : {location}
          </p>

          <p className="mb-2 text-gray-700">
            <span className='text-red-400 font-bold'> Description </span> : {description}
          </p>
          
          <label htmlFor="product-booked-modal" onClick={()=>setProductFullInfo(pro)} className='bg-orange-400 px-2 py-1 rounded-sm hover:bg-orange-600 hover:text-white' >
            Book Now
         </label>

        </div>
      </div>
    );
};

export default Product;