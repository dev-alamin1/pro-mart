
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import BuyerRows from './BuyerRows';

const AllBuyer = () => {

    const {data:buyers = [],isLoading} = useQuery(
        {
            queryKey:['buyers'],
             queryFn:async()=>{
                
             const res = await  fetch(`http://localhost:5000/buyers`,{
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
            <h2 className="text-4xl mb-5 text-center mt-2 text-red-400"> All Buyer </h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead className='bg-teal-100'>
                        <tr>
                            <th>#</th>
                            <th>Buyer Image</th>
                            <th>Buyer Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {buyers.map((buyer,index)=><BuyerRows key={buyer._id} buyer={buyer} index={index}/>)}
                    </tbody>
                </table>
            </div>
            
        </div>
    );
};

export default AllBuyer;