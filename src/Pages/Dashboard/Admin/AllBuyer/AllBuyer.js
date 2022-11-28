
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import BuyerRows from './BuyerRows';
import Swal from "sweetalert2";

const AllBuyer = () => {

    const {data:buyers = [],isLoading,refetch} = useQuery(
        {
            queryKey:['buyers'],
             queryFn:async()=>{
                
             const res = await  fetch(`https://pro-mart-server-alaminmondalcse-gmailcom.vercel.app/buyers`,{
                headers:{
                    authorization:`bearer ${localStorage.getItem('accessToken')}`
                }
             })
             const data = res.json();
             return data;
                
            }
        }
    );


    const buyerDeleteHandler = (id) => {
        const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger",
          },
          buttonsStyling: false,
        });
    
        swalWithBootstrapButtons
          .fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true,
          })
          .then((result) => {
            if (result.isConfirmed) {
    
                fetch(`https://pro-mart-server-alaminmondalcse-gmailcom.vercel.app/buyers/${id}`, {
                    method: 'DELETE', 
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0){
                        refetch();
                        toast.success(`Buyer deleted successfully`)
                    }
                })
             
    
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                "Cancelled",
                "Your imaginary file is safe :)",
                "error"
              );
            }
          });
      };


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
                        {buyers.map((buyer,index)=><BuyerRows key={buyer._id} 
                        buyer={buyer} index={index} buyerDeleteHandler={buyerDeleteHandler}/>)}
                    </tbody>
                </table>
            </div>
            
        </div>
    );
};

export default AllBuyer;