import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';
import ProductBookedModal from './ProductBookedModal';

const Products = () => {
    const products = useLoaderData();
    const [categoryName,setCategoryName] = useState([]);
    const [categoryDesc,setCategoryDesc] = useState([]);

    const [productFullInfo,setProductFullInfo] = useState({});


    return (
        <div className="pt-10 pb-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Used {}
              </p>
            </div>
            {
              categoryName && 
              <>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="db164e35-2a0e-4c0f-ab05-f14edc6d4d30"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#db164e35-2a0e-4c0f-ab05-f14edc6d4d30)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative">{categoryName}</span>
              </span>{' '}
            </h2>

            <p className="text-base text-gray-700 md:text-lg">
              {categoryDesc}
            </p>

             </>

            }
           
          </div>
          <div className="grid  gap-5 mb-8 lg:grid-cols-3 sm:mx-auto w-full">
           
           {
            products.map(pro=>
            <Product key={pro._id} pro={pro} setCategoryName={setCategoryName} 
            setCategoryDesc={setCategoryDesc} setProductFullInfo ={setProductFullInfo}/>)
           }
  
          </div>

           {/* booking modal */}
           {
             productFullInfo &&  <ProductBookedModal productFullInfo={productFullInfo} 
             categoryName={categoryName} />
           }

        </div>
      );
};

export default Products;