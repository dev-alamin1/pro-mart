import React from 'react';
import { useQuery } from '@tanstack/react-query';
import SellerVerificationRow from './SellerVerificationRow';

const SellerVerifications = () => {


    const {data:unVerifiedSellers = [],isLoading,refetch} = useQuery(
        {
            queryKey:['unVerifiedSellers'],
             queryFn:async()=>{
                
             const res = await  fetch(`http://localhost:5000/unverifiedsellers`,{
                headers:{
                    authorization:`bearer ${localStorage.getItem('accessToken')}`
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
        <div className='bg-purple-100'>
            <h2 className="text-4xl mb-5 text-center mt-2 text-red-400"> Seller Verification Request</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead className='bg-teal-100'>
                        <tr>
                            <th>#</th>
                            <th>Seller Image</th>
                            <th>Seller Name</th>
                            <th>Seller Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {unVerifiedSellers.map((seller,index)=><SellerVerificationRow key={seller._id} seller={seller} index={index}/>)}
                    </tbody>
                </table>
            </div>
            
        </div>
    );
};

export default SellerVerifications;