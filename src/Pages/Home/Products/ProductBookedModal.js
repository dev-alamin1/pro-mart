import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Context/Authprovider";

const ProductBookedModal = ({ productFullInfo, categoryName,setProductFullInfo }) => {
   
  // product info destructure 
    const {productName,resalePrice,productImg } = productFullInfo;

  // get user auth info from context
  const { user} = useContext(AuthContext);

  // product book handler 
  const productBookHandler = (event)=>{
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const productName = form.productName.value;
      const productPrice = form.price.value;
      const phoneNumber = form.phoneNumber.value;
      const meetLocation = form.meetLocation.value;
      const categoryNameInfo = categoryName;
      

      const bookingInfo = {
        name,email,productName,productPrice,phoneNumber,meetLocation,categoryNameInfo,productImg
      }

      // store booking info in database 

      fetch('https://pro-mart-server-alaminmondalcse-gmailcom.vercel.app/store/booking/product',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(bookingInfo)
      })
      .then(res=>res.json())
      .then(data=>{

        if(data.acknowledged)
        {

          setProductFullInfo('');
          toast.success("Product Booked Success !")
        }
        
      })


  }

  

  return (
    <div>
      
      <input
        type="checkbox"
        id="product-booked-modal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="product-booked-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2" onClick={()=>setProductFullInfo('')}
          >
            ✕
          </label>
          <div>
            <form onSubmit={productBookHandler}>
              <div className="mb-1 sm:mb-2">
                <label
                  htmlFor="name"
                  className="inline-block mb-1 font-medium"
                >
                  Name
                </label>
                <input
                  defaultValue={user?.displayName}
                  type="text"
                  name="name"
                  disabled
                  className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-1 sm:mb-2">
                <label
                  htmlFor="email"
                  className="inline-block mb-1 font-medium"
                >
                  Email
                </label>
                <input
                  defaultValue={user?.email}
                  type="text"
                  name="email"
                  disabled
                  className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-1 sm:mb-2">
                <label
                  htmlFor="productName"
                  className="inline-block mb-1 font-medium"
                >
                  Product Name
                </label>
                <input
                  defaultValue={productName}
                  type="text"
                  name="productName"
                  disabled
                  className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                />
              </div>



              <div className="mb-1 sm:mb-2">
                <label
                  htmlFor="resalePrice"
                  className="inline-block mb-1 font-medium"
                >
                  Product Price
                </label>
                <input
                  defaultValue={resalePrice}
                  type="text"
                  name="price"
                  disabled
                  className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-1 sm:mb-2">
                <label
                  htmlFor="mobileNumber"
                  className="inline-block mb-1 font-medium"
                >
                 Phone Number
                </label>
                <input
                  placeholder="phone number"
                  type="text"
                  name="phoneNumber"
                  required
                  className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                />
              </div>


              <div className="mb-1 sm:mb-2">
                <label
                  htmlFor="meetLocation"
                  className="inline-block mb-1 font-medium"
                >
                 Meet Location
                </label> <br />
                <textarea required name="meetLocation" className="textarea textarea-primary w-full" placeholder="meet location"></textarea>
              </div>


              <div className="mt-4 mb-2 sm:mb-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md  bg-purple-400 hover:bg-purple-700 hover:text-white focus:shadow-outline focus:outline-none"
                >
                  Book 
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBookedModal;
