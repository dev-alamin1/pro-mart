import React from 'react';

const SellerVerificationRow = ({seller,index,sellerVerifyHandler}) => {

    const {name,email,photoURL} = seller;

    
   
    return (
      
             <tr>
                 <td>{index+1}</td>
                 <td>
                    <img src={photoURL} alt="" className='w-20 rounded-full' />
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