import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import SellerRows from './SellerRows';
import Swal from "sweetalert2";

const AllSeller = () => {

    const {data:sellers = [],refetch,isLoading} = useQuery(
        {
            queryKey:['sellers'],
             queryFn:async()=>{
                
             const res = await  fetch(`https://pro-mart-server-alaminmondalcse-gmailcom.vercel.app/sellers`,{
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
    
                fetch(`https://pro-mart-server-alaminmondalcse-gmailcom.vercel.app/sellers/${id}`, {
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
                        {sellers.map((sellers,index)=><SellerRows key={sellers._id} 
                        sellers={sellers} index={index} sellerDeleteHandler={sellerDeleteHandler}/>)}
                    </tbody>
                </table>
            </div>
            
        </div>
    );
};

export default AllSeller;