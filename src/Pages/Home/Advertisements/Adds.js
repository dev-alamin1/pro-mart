import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/Authprovider";
import { BiCheckCircle } from "react-icons/bi";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
const Adds = ({ pro, setProductFullInfo, setCategoryName }) => {
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
    _id,
  } = pro;

  const { user } = useContext(AuthContext);

  // // load category info
  //   const { data: categoryInfo = [] } = useQuery({
  //     queryKey: ["category", category_id],
  //     queryFn: async () => {
  //       const res = await fetch(
  //         `https://pro-mart-server.vercel.app/categoryinfo?id=${category_id}`
  //       );
  //       const data = res.json();
  //       return data;
  //     },
  //   });

  //   const { category_name } = categoryInfo;

  //   setCategoryName(category_name);

  return (
    <div className="mt-5">
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img src={productImg} alt={productName} className="h-60 w-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <small>{productName}</small>
            <div className="badge badge-secondary">Used</div>
          </h2>
          <p>Price : {resalePrice}Tk</p>
          <div className="card-actions justify-end">
            <Link
              to={`/productId/${_id}`}
              className="bg-lime-300 px-2 py-1 rounded-md hover:bg-lime-400 hover:text-white"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adds;
