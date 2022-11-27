import React from 'react';

const SellerRows = ({sellers,index,sellerDeleteHandler}) => {
    const {name,email,photoURL,_id} = sellers;
    return (
      
        <tr>
                 <td>{index+1}</td>
                 <td>
                    <img src={photoURL} alt="" className='w-20' />
                 </td>
                 <td>{name}</td>
                 <td>{email}</td>
                 <td>
                    <button onClick={()=>sellerDeleteHandler(_id)} className='btn bg-secondary btn-sm'>Delete</button>
                 </td>

        </tr>
    );
};

export default SellerRows;