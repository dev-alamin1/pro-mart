import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/Authprovider";
import { BiCheckCircle } from "react-icons/bi";
import toast from "react-hot-toast";
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

      <div className="card bg-base-100 shadow-xl">
        <div className=" flex items-center justify-center">
          <img src={productImg} alt="Shoes" className="h-80 w-full" />
        </div>

        <div className="card-body">
          {/* product description */}
          <div>
            <div>
              <h2 className="card-title">
                {productName}
                <div className="badge badge-secondary">Used</div>
              </h2>

              <div className="flex justify-between">
                <small>
                  Category:{" "}
                  <span className="text-orange-500">{category_name}</span>
                </small>
                <small>
                  Published On :{" "}
                  <span className="text-orange-500">
                    {postedOn ? postedOn.split("T")[0] : "Not found"}{" "}
                  </span>{" "}
                </small>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-1 mt-5">
              {/* left side description */}
              <div>
                <p className=" text-gray-700">
                  <span className="text-red-400 font-bold">Brand</span> :{" "}
                  {brand}
                </p>

                <p className=" text-gray-700">
                  <span className="text-red-400 font-bold">Original Price</span>{" "}
                  : <small> {originalPrice}Tk</small> <br />{" "}
                  <span className="text-orange-500 font-bold">
                    Resale Price
                  </span>{" "}
                  : <small>{resalePrice}Tk</small>
                </p>

                <p className=" text-gray-700">
                  <span className="text-red-400 font-bold">Purches Years </span>{" "}
                  : {yearOfPurchase}
                </p>

                <p className=" text-gray-700">
                  <span className="text-red-400 font-bold"> Condition </span> :{" "}
                  {productCondition}
                </p>

                
              </div>

              {/* right side description */}
              <div>

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


              </div>
            </div>
          </div>

          <div>
          <p className="mb-2 text-gray-700">
          <span className="text-red-400 font-bold"> Description </span> :{" "}
          {description}
        </p>

          </div>

          <div className="card-actions justify-end">
            <label
              htmlFor="product-booked-modal"
              onClick={() => setProductFullInfo(pro)}
              className="badge badge-outline hover:bg-orange-600 hover:text-white"
            >
              Book Now
            </label>
          </div>
        </div>
      </div>
    
  );
};

export default Product;
