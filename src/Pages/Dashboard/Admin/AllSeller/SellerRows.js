import React from 'react';

const SellerRows = ({sellers,index}) => {
    const {name,email,photoURL} = sellers;
    return (
      
        <tr>
                 <td>{index+1}</td>
                 <td>
                    <img src={photoURL} alt="" className='w-20' />
                 </td>
                 <td>{name}</td>
                 <td>{email}</td>
                 <td>Delete</td>

        </tr>
    );
};

export default SellerRows;