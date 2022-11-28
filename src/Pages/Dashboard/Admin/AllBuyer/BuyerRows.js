import React from 'react';

const BuyerRows = ({buyer,index,buyerDeleteHandler}) => {
    const {name,email,photoURL,_id} = buyer;
    return (
      
        <tr>
                 <td>{index+1}</td>
                 <td>
                    <img src={photoURL} alt="" className='w-20 rounded-full' />
                 </td>
                 <td>{name}</td>
                 <td>{email}</td>
                 <td>
                    <button onClick={()=>buyerDeleteHandler(_id)} className='btn bg-secondary btn-sm'>Delete</button>
                 </td>

        </tr>
    );
};

export default BuyerRows;