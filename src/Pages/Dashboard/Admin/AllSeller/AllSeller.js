import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SellerRows from './SellerRows';

const AllSeller = () => {

    const {data:sellers = [],refetch,isLoading} = useQuery(
        {
            queryKey:['sellers'],
             queryFn:async()=>{
                
             const res = await  fetch(`http://localhost:5000/sellers`,{
                headers:{
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
             })
             const data = res.json();
             return data;
                
            }
        }
    );

    if(isLoading)
    {
        return <div>Loading ....</div>
    }

    return (
        <div>
            <h2 className="text-4xl mb-5 text-center mt-2 text-red-400"> All Seller </h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Seller Image</th>
                            <th>Seller Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sellers.map((sellers,index)=><SellerRows key={sellers._id} sellers={sellers} index={index}/>)}
                    </tbody>
                </table>
            </div>
            
        </div>
    );
};

export default AllSeller;