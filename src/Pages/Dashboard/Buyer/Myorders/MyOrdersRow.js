import React from 'react';

const MyOrdersRow = ({order,index}) => {
    const {productName,categoryNameInfo,productPrice,productImg,} = order;
    
    return (
      
        <tr>
                 <td>{index+1}</td>
                 <td>
                    <img src={productImg} alt="" className='w-20' />
                 </td>
                 <td>{productName}</td>
                 <td>{categoryNameInfo}</td>
                 <td>{productPrice} Tk</td>
                 <td>
                    <button className='btn btn-sm btn-primary'>Pay</button>
                 </td>

        </tr>
    );
};

export default MyOrdersRow;