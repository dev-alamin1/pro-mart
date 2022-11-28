import React from 'react';
import { BiCheckCircle } from 'react-icons/bi';

const SellerRows = ({sellers,index,sellerDeleteHandler,sellerVerifyHandler}) => {
    const {name,email,photoURL,_id,verified} = sellers;
   

    return (
      
           <tr>
                 <td>{index+1}</td>
                 <td>
                    <img src={photoURL} alt="" className='w-20' />
                 </td>
                 
                 <td>
                    <div className='flex gap-1 items-center'>
                            <span>{name}</span>
                            <span>{verified === true && <BiCheckCircle className="text-blue-600 ml-1"/>}</span>
                    </div>                    
                 </td>

                 <td>{email}</td>
                 <td>
                     <div className='flex gap-2'>
                         <button onClick={()=>sellerDeleteHandler(_id)} className='btn bg-warning btn-sm'>Delete</button>
                        
                         {verified === true ?<button disabled className='btn bg-primary btn-sm'>Verified</button>
                         :  <button onClick={()=>sellerVerifyHandler(email)} className='btn bg-secondary btn-sm'>Do Verifie</button> }
                         
                     </div>
                 </td>

        </tr>
    );
};

export default SellerRows;