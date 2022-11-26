import React from 'react';


const MyProductRow = ({porduct,index,deleteHandler}) => {
    const {productName,resalePrice,productImg,sellStatus,_id} = porduct;

    
    return (
      
        <tr>
        <td>{index+1}</td>
        <td>
           <img src={productImg} alt="" className='w-20' />
        </td>
        <td>{productName}</td>
        <td>{resalePrice}</td>
        <td>{sellStatus === true ? <div className="badge badge-md badge-info">Sold</div> :<div className="badge badge-md badge-warning text-white">Unsold</div>}</td>
       
        <td>
             <div className='flex gap-2'>
                <button onClick={()=>deleteHandler(_id)} className='btn btn-sm btn-primary'>Delete</button>
                <button className='btn btn-sm btn-secondary'>Advertise</button>
             </div>
        </td>

</tr>

    );
};

export default MyProductRow;