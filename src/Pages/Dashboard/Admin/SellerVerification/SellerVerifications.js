import React from 'react';
import { useQuery } from '@tanstack/react-query';
import SellerVerificationRow from './SellerVerificationRow';
import toast from 'react-hot-toast';

const SellerVerifications = () => {


    const {data:unVerifiedSellers = [],isLoading,refetch} = useQuery(
        {
            queryKey:['unVerifiedSellers'],
             queryFn:async()=>{
                
             const res = await  fetch(`https://pro-mart-server-alaminmondalcse-gmailcom.vercel.app/unverifiedsellers`,{
                headers:{
                    authorization:`bearer ${localStorage.getItem('accessToken')}`
                }
             })
             const data = res.json();
             return data;
                
            }
        }
    );

     // do seller verify 
     const sellerVerifyHandler = (email)=>{
        fetch(`https://pro-mart-server-alaminmondalcse-gmailcom.vercel.app/verify_seller?email=${email}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json',
                 authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount>0)
            {
                // jokhn seller k verifie korbe, tokhon kintu sei seller er info
                // verifySller requerst collectio theke delete kore dite hobe 

                fetch(`https://pro-mart-server-alaminmondalcse-gmailcom.vercel.app/deleteSellerVerification?email=${email}`,{
                    headers:{
                        'content-type':'application/json',
                         authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                })
                .then(res=>res.json())

                .then(data=>{
                        if(data.deletedCount > 0)
                        {    refetch();
                             toast.success('Seller verification success');
                             
                        }
                })

            }
        })
    }

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
                        {unVerifiedSellers.map((seller,index)=><SellerVerificationRow 
                        key={seller._id} 
                        seller={seller} index={index} sellerVerifyHandler={sellerVerifyHandler}/>)}
                    </tbody>
                </table>
            </div>
            
        </div>
    );
};

export default SellerVerifications;