import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/Authprovider";
import { BiCheckCircle } from "react-icons/bi";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
const Product = ({
  pro,
  setCategoryName,
  setCategoryDesc,
  setProductFullInfo,
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
    _id,
    yearOfPurchase,
    postedOn,
  } = pro;

  // check seller is verified or not
  const [sellerInfo, setSellerInfo] = useState([]);
  const [sellerVerificationLoading, setSellerVerificationLoading] =
    useState(true);

  useEffect(() => {
    fetch(`https://pro-mart-server.vercel.app/checkSellerVerify?email=${sellerEmail}`)
      .then((res) => res.json())
      .then((data) => {
        setSellerInfo(data);
        setSellerVerificationLoading(false);
      });
  }, [sellerEmail]);

  const { user, loading } = useContext(AuthContext);

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

  const reportToAdminHandler = (pro) => {
    const product = {
      sellerName,
      sellerEmail,
      sellerMobile,
      productName,
      productImg,
      product_id: _id,
    };

    fetch("https://pro-mart-server.vercel.app/report/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Product report success");
        }
      });
  };

  // check seller is verified or not 
 

    useEffect(()=>{
        fetch(`https://pro-mart-server.vercel.app/checkSellerVerify?email=${sellerEmail}`)
        .then(res=>res.json())
        .then(data=>{

         setSellerInfo(data)
         setSellerVerificationLoading(false);
        })

    },[sellerEmail]);

  if (loading) {
    return <div>user loading .. </div>;
  }

  return (

    <div>
    <div className="card w-full bg-base-100 shadow-xl " data-aos="zoom-in-up">
<figure><img src={productImg} alt={productName} className="h-60 w-full" /></figure>
<div className="card-body">
 <h2 className="card-title">
   <small>{productName}</small>
   <div className="badge badge-secondary">Used</div>
 </h2>
 {/* <p>Category : {category_name}</p> */}
 <p>Price : {resalePrice}Tk</p>
 <div className="card-actions justify-end">
   <Link to={`/productId/${_id}`} className="bg-lime-300 px-2 py-1 rounded-md hover:bg-lime-400 hover:text-white">Details</Link>
 </div>
</div>
</div>


</div>
    
  );
};

export default Product;
