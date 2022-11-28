import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import SellerRows from './SellerRows';
import Swal from "sweetalert2";
import Loading from '../../../Shared/Loading/Loading';
import Zero from '../../../Shared/ZeoProduct/Zero';

const AllSeller = () => {

    const {data:sellers = [],refetch,isLoading} = useQuery(
        {
            queryKey:['sellers'],
             queryFn:async()=>{
                
             const res = await  fetch(`https://pro-mart-server.vercel.app/sellers`,{
                headers:{
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
             })
             const data = res.json();
             return data;
                
            }
        }
    );

   

    const sellerDeleteHandler = (id) => {
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
    
                fetch(`https://pro-mart-server.vercel.app/sellers/${id}`, {
                    method: 'DELETE', 
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0){
                        refetch();
                        toast.success(`Seller deleted successfully`)
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


       // do seller verify 
     const sellerVerifyHandler = (email)=>{
        fetch(`https://pro-mart-server.vercel.app/verify_seller?email=${email}`,{
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
                refetch();
                toast.success('Seller virified succeess !')
            }
        })
    }
    
    // if(isLoading)
    // {
    //     return <Loading/>
    // }

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
                        {sellers.length ===0 ? <Zero>No register seller found </Zero> :sellers.map((sellers,index)=><SellerRows key={sellers._id} 
                        sellers={sellers} index={index} sellerDeleteHandler={sellerDeleteHandler} 
                        sellerVerifyHandler={sellerVerifyHandler}  
                        />)}
                    </tbody>
                </table>
            </div>
            
        </div>
    );
};

export default AllSeller;