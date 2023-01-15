import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Loading from "../../Shared/Loading/Loading";
import Adds from "./Adds";
import AddsBookedModal from "./AddsBookedModal";


export const Advertisements = () => {

  const [categoryName,setCategoryName] = useState([]);

  const {data:products = [],isLoading} = useQuery({
    queryKey:['products'],
    queryFn:async()=>{
      const res = await fetch(`https://pro-mart-server.vercel.app/advertised_products`);
      const data = await res.json();
      return data;
    }
  });

 

    

    if(isLoading)
    {
      return <Loading></Loading>
    }

    if(products.length>0)
    {
      return (
        <div className="pt-10 pb-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">

<h2 className="text-center text-3xl mb-5 text-orange-500">Advertised Product</h2>
          <div className="grid  gap-5 mb-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:mx-auto w-full">
           
           {
            products.map(pro=>
            <Adds key={pro._id} pro={pro}  setCategoryName={setCategoryName} 
              />)
           }
  
          </div>

         

        </div>
      );
    }

};
