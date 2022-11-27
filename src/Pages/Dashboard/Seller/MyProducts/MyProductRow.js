import React from 'react';


const MyProductRow = ({porduct,index,deleteHandler,productAdvertiaseHandler}) => {
    const {productName,resalePrice,productImg,sellStatus,_id,advertiseStatus} = porduct;
    console.log(porduct)

    
    return (
      
        <tr>
        <td>{index+1}</td>
        <td>
           <img src={productImg} alt="" className='w-20' />
        </td>
        <td>{productName}</td>
        <td>{resalePrice}</td>
        <td>{sellStatus === true ? <div className="badge badge-md badge-info">Sold</div> :<div className="badge badge-md badge-warning text-white">Available</div>}</td>
       
        <td>
             <div className='flex gap-2'>
                <button onClick={()=>deleteHandler(_id)} className='btn btn-sm btn-primary'>Delete</button>
                {sellStatus !== true && advertiseStatus !== true ?<button onClick={()=>productAdvertiaseHandler(_id)} className='btn btn-sm btn-secondary'>Advertise</button> :''}

                {advertiseStatus === true ?<button disabled onClick={()=>productAdvertiaseHandler(_id)} className='btn btn-sm btn-secondary'><small>alreday advertise</small></button> :''}
             </div>
        </td>

</tr>

    );
};

export default MyProductRow;