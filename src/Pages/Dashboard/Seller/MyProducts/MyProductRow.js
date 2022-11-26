import React from 'react';

const MyProductRow = ({porduct,index}) => {
    const {productName,resalePrice,productImg,sellStatus} = porduct;
    
    return (
      
        <tr>
        <td>{index+1}</td>
        <td>
           <img src={productImg} alt="" className='w-20' />
        </td>
        <td>{productName}</td>
        <td>{productName}</td>
        <td>{resalePrice}</td>
        <td>{sellStatus}</td>
        <td>
             <button className='btn'>Delete</button>
             <button className='btn'>Advertise</button>
        </td>

</tr>

    );
};

export default MyProductRow;