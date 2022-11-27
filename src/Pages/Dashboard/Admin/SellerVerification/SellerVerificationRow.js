import React from 'react';
import toast from 'react-hot-toast';

const SellerVerificationRow = ({seller,index,refetch}) => {

    const {name,email,photoURL} = seller;

    const sellerVerifyHandler = (email)=>{
        fetch(`http://localhost:5000/verify_seller?email=${email}`,{
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
                toast.success('Seller verification success');
                refetch();
            }
        })
    }
    return (
      
             <tr>
                 <td>{index+1}</td>
                 <td>
                    <img src={photoURL} alt="" className='w-20' />
                 </td>
                 <td>{name}</td>
                 <td>{email}</td>
                 <td>
                    <button onClick={()=>sellerVerifyHandler(email)} className='btn'>Do verify</button>
                 </td>

        </tr>
       
    );
};

export default SellerVerificationRow;