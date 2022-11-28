import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Get } from 'react-axios'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Context/Authprovider';
import Loading from '../../../Shared/Loading/Loading';

const AddProduct = () => {
    const {user} = useContext(AuthContext)
   
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [categoires,setCategories] = useState([]);
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate();
   


     // check seller is verified or not 
     const [sellerInfo,setSellerInfo] = useState();
     const [sellerVerificationLoading,setSellerVerificationLoading] = useState(true);
 
       useEffect(()=>{
           fetch(`https://pro-mart-server.vercel.app/checkSellerVerify?email=${user.email}`)
           .then(res=>res.json())
           .then(data=>{
 
            setSellerInfo(data)
            setSellerVerificationLoading(false);
           })
 
       },[user?.email]);

       console.log(sellerInfo)
    


    const addProduct = (data) => {


        const image = data.productImg[0];
        const formData = new FormData();
        formData.append('image', image);


        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`

        fetch(url, {
            method: 'POST',
            body: formData
        })
        
        .then(res => res.json())
        .then(img => {
            if(img.success){
                
                const product = {
                    brand:data.brand,
                    category_id:data.category_id,
                    originalPrice:data.originalPrice,
                    productCondition: data.productCondition,
                    productName:data.productName,
                    resalePrice:data.resalePrice,
                    sellerName:data.sellerName,
                    sellerEmail:data.sellerEmail,
                    sellerMobile:data.sellerMobile,
                    sellerIsVerified: sellerInfo.verified === true ? true : false,
                    yearOfPurchase:data.yearOfPurchase,
                    location:data.location,
                    description:data.description,
                    sellStatus:false,
                    advertiseStatus:false,
                    productImg: img.data.url,
                    postedOn : new Date()
                }

                //save product information to the database
                fetch('https://pro-mart-server.vercel.app/store_products', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json', 
                        // authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(product)
                })
                .then(res => res.json())
                .then(result =>{
                    toast.success('Product Added Successfully');
                    navigate('/dashboard/myproducts')
                })
            }
        })
    }


    
  

    // verification handler 

    const sellerVerificationApplyHandler = ()=>{

                const seller = {
                    name: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL,
                }
           
                fetch('https://pro-mart-server.vercel.app/seller/verification',{
                    method:'POST',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(seller)
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.acknowledged)
                    {
                         toast.success('verification apply succes, wait untill it done')
                    }
                    else{
                        toast.error(data.message);
                    }
                })
           
    }

    
    return (

           <>
        
               <Get url="https://pro-mart-server.vercel.app/categoires" >
                {(error, response, isLoading, makeRequest, axios) => {
                    if(error) {
                    return (<div>Something bad happened: {error.message} <button onClick={() => makeRequest({ params: { reload: true } })}>Retry</button></div>)
                    }
                    else if(isLoading || sellerVerificationLoading) {
                    return (<div><Loading/></div>)
                    }
                    else if(response !== null) {
                    return (setCategories(response.data))
                    }
                    return (<div>Default message before request is made.</div>)
                }}
                </Get>


                    
                    
                    <div className='flex justify-center items-center w-full '>

               

                    <div className="p-8 rounded border border-gray-200 w-full">
                       
                        <div className='flex justify-between'>
                                <h1 className="font-medium text-gray-800 font-serif text-3xl">Add Product</h1>           
                                {
                                    sellerInfo?.verified !== true ? <div className=' flex flex-col items-center'>
                                    <h2 className='text-xl  text-red-500 mb-2'>You are not a verifed Seller</h2>
                                            
                                    <button onClick={sellerVerificationApplyHandler} className='btn btn-sm px-1 py-1 btn-secondary'>Apply Verification</button>
                                </div> :""
                            }
                        </div>
                        <form onSubmit={handleSubmit(addProduct)}>
                            <div className="mt-8 grid lg:grid-cols-3 gap-4">
                                <div>
                                    <label htmlFor="category_id" className="text-sm text-gray-700 block mb-1 font-medium">Category</label>
        
                                     <select {...register('category_id')} className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" >
                                        <option>Please select a category</option>
                                        {
                                            categoires?.map(category=><option key={category._id} value={category._id}>{category.category_name}</option>)
                                        }
                                        
                                    </select>
                                    
                                </div>
        
                                <div>
                                    <label htmlFor="productName" className="text-sm text-gray-700 block mb-1 font-medium">Product Name</label>
                                    <input {...register('productName', { required: 'Provide your proudct name' })} type="text" name="productName" id="productName" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="product name" />
                                    {errors.productName && <label className='text-red-600 text-left' >{errors.productName?.message}</label>}
                                </div>
        
                                <div>
                                    <label htmlFor="brand" className="text-sm text-gray-700 block mb-1 font-medium">Brand</label>
                                    <input {...register('brand', { required: 'Please provide Brand Name' })} type="text" name="brand" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="brand name" />
                                    {errors.brand && <label className='text-red-600 text-left' >{errors.brand?.message}</label>}
                                </div>
        
        
                                <div>
                                    <label htmlFor="originalPrice" className="text-sm text-gray-700 block mb-1 font-medium">Original Price</label>
                                    <input {...register('originalPrice', {
                                        required: 'Please enter originalPrice'
                                    })} type="text" name="originalPrice" id="originalPrice" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder=" original price" />
                                    {errors.originalPrice && <label className='text-red-600 text-left' >{errors.originalPrice?.message}</label>}
                                </div>
        
                                <div>
                                    <label htmlFor="resalePrice" className="text-sm text-gray-700 block mb-1 font-medium">Resale Price</label>
                                    <input {...register('resalePrice', {
                                        required: 'Please enter Resale Price'
                                    })} type="text" name="resalePrice" id="resalePrice" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder=" resale Price" />
                                    {errors.resalePrice && <label className='text-red-600 text-left' >{errors.resalePrice?.message}</label>}
                                </div>
        
                                <div>
                                    <label htmlFor="yearOfPurchase" className="text-sm text-gray-700 block mb-1 font-medium">Uses Time (total year)</label>
                                    <input {...register('yearOfPurchase', {
                                        required: 'Please enter total uses time'
                                    })} type="text" name="yearOfPurchase" id="yearOfPurchase" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder=" year Of Purchase" />
                                    {errors.yearOfPurchase && <label className='text-red-600 text-left' >{errors.yearOfPurchase?.message}</label>}
                                </div>
        
                                <div>
                                    <label htmlFor="productCondition" className="text-sm text-gray-700 block mb-1 font-medium">Condition</label>
                                    <select {...register('productCondition', {
                                        required: 'select your product Condition'
                                    })} className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Car Registration Year">
                                        <option >Select product condition</option>
                                        <option value='Exellent'>Exellent</option>
                                        <option value='Good'>Good</option>
                                        <option value='Fair'>Fair</option>
                                      
                                    </select>
                                    {errors.productCondition && <label className='text-red-600 text-left' >{errors.productCondition?.message}</label>}
                                </div>
        
                                <div>
                                    <label htmlFor="sellerMobile" className="text-sm text-gray-700 block mb-1 font-medium">Seller Mobile</label>
                                    <input {...register('sellerMobile',{ required: 'Please provide seller mobile number' })} type="text" name="sellerMobile" id="sellerMobile" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="seller Mobile" />
                                    {errors.productCondition && <label className='text-red-600 text-left' >{errors.productCondition?.message}</label>}
                                </div>
        

                                <div>
                                    <label htmlFor="sellerEmail" className="text-sm text-gray-700 block mb-1 font-medium">Seller Name</label>
                                    <input {...register('sellerName', { required: 'Please provide seller email' })} type="text" name="sellerName" id="sellerName" value={user?.displayName} className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"/>
                                    {errors.sellerName && <label className='text-red-600 text-left' >{errors.sellerName?.message}</label>}
                                </div>
        


                                <div>
                                    <label htmlFor="sellerEmail" className="text-sm text-gray-700 block mb-1 font-medium">Seller Email</label>
                                    <input {...register('sellerEmail', { required: 'Please provide seller email' })} type="text" name="sellerEmail" id="sellerEmail" value={user?.email} className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"/>
                                    {errors.sellerEmail && <label className='text-red-600 text-left' >{errors.sellerEmail?.message}</label>}
                                </div>
        
                                <div>
                                    <label htmlFor="location" className="text-sm text-gray-700 block mb-1 font-medium">Location</label>
                                    <input {...register('location', { required: 'Please provide location info' })} type="text" name="location"  className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="location info" />
                                    {errors.location && <label className='text-red-600 text-left' >{errors.location?.message}</label>}
                                </div>
        
                                <div>
                                    <label htmlFor="productImg" className="text-sm text-gray-700 block mb-1 font-medium"> Choose your cars Photos</label>
                                    <input {...register('productImg', { required: 'Please Choose product image' })} type="file" className="file-input file-input-bordered file-input-warning w-full max-w-xs" />
                                    {errors.productImg && <label className='text-red-600 text-left' >{errors.productImg?.message}</label>}
                                </div>
                            </div>
                          
                               <div className='w-full mt-10'>
                                    <label htmlFor="description" className="text-sm text-gray-700 block mb-1 font-medium">Description</label>
                                    <textarea {...register('description', { required: 'Please add product description' })} className="textarea textarea-accent w-full" placeholder="description"></textarea>
                                    {errors.description && <label className='text-red-600 text-left' >{errors.description?.message}</label>}
                                </div>

                                <div className="space-x-4 mt-8">
                                      <button type="submit" className="py-2 px-4 btn-primary y text-white rounded  disabled:opacity-50">Add Product</button>
                                 </div>
                     
                        </form>
        
                    </div>
                         </div>
                    
                  
        </>
      );
};

export default AddProduct;