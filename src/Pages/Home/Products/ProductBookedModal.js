import React, { useContext } from "react";
import { AuthContext } from "../../../Context/Authprovider";

const ProductBookedModal = ({ productFullInfo, categoryName }) => {
   
  // product info destructure 
    const {productName,resalePrice } = productFullInfo;

  // get user auth info from context
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <div>Loading..</div>;
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
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div>
            <form>
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
                <textarea name="meetLocation" className="textarea textarea-primary w-full" placeholder="location name"></textarea>
              </div>


              <div className="mt-4 mb-2 sm:mb-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full h-12 px-6 text-white font-medium tracking-wide transition duration-200 rounded shadow-md  bg-purple-400 hover:bg-purple-700 hover:text-white focus:shadow-outline focus:outline-none"
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
