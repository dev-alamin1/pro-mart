import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Context/Authprovider";
import Swal from "sweetalert2";
import MyProductRow from "./MyProductRow";
import toast from "react-hot-toast";

const MyProducts = () => {
  const { user } = useContext(AuthContext);

  const {
    data: Myproducts = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["products", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://pro-mart-server-alaminmondalcse-gmailcom.vercel.app/products?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const data = res.json();
      return data;
    },
  });

  const deleteHandler = (id) => {
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

          fetch(`https://pro-mart-server-alaminmondalcse-gmailcom.vercel.app/delete/product/${id}`, {
            method: "DELETE",
            headers: {
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {

               
                
                swalWithBootstrapButtons.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )

                  refetch();

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

  const productAdvertiaseHandler = (id)=>{
      fetch(`https://pro-mart-server-alaminmondalcse-gmailcom.vercel.app/advertise/product/${id}`,{
        method:'PUT',
        headers:{
          authorization: `bearer ${localStorage.getItem("accessToken")}`
        }
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.modifiedCount>0)
        {
            refetch();
            toast.success('Product Advertise Success')
        }
      })
    
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className="text-4xl mb-5 text-center mt-2 text-red-400">
        My Products{" "}
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Sale Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Myproducts.map((porduct, index) => (
              <MyProductRow
                key={porduct._id}
                porduct={porduct}
                index={index}
                deleteHandler={deleteHandler}
                productAdvertiaseHandler={productAdvertiaseHandler}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
