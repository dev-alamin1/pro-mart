import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Context/Authprovider';

import MyProductRow from './MyProductRow';

const MyProducts = () => {

    const {user} = useContext(AuthContext)

    
 
    const {data:Myproducts = [],refetch,isLoading} = useQuery(
        {
            queryKey:['products',user?.email],
             queryFn:async()=>{
                
             const res = await  fetch(`http://localhost:5000/products?email=${user?.email}`)
             const data = res.json();
             return data;
                
            }
        }
    );


    if(isLoading)
    {
        return <div>Loading...</div>
    }


    return (
        <div>
            <h2 className="text-4xl mb-5 text-center mt-2 text-red-400">My Products </h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>Sale Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Myproducts.map((porduct,index)=><MyProductRow key={porduct._id} porduct={porduct} index={index}/>)}
                    </tbody>
                </table>
            </div>
            
        </div>
    );
};

export default MyProducts;