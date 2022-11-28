import React from 'react';

const ReportedProductRows = ({product,index,reportedProductDelete}) => {

    const {productImg,productName,product_id,sellerEmail,sellerMobile,sellerName,_id} = product;
    return (
        
        <tr>
                 <td>{index+1}</td>
                 <td>
                    <img src={productImg} alt="" className='w-20' />
                 </td>
                 <td>{productName}</td>
                 <td>{sellerName?sellerName:'Not Found'}</td>
                 <td>{sellerEmail}</td>
                 <td>{sellerMobile}</td>
                 <td>
                    <button onClick={()=>reportedProductDelete(product_id,_id)}  className='btn bg-secondary btn-sm'>Delete</button>
                 </td>

        </tr>
    );
};

export default ReportedProductRows;