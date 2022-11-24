import { Link } from "react-router-dom";

export const Register = () => {

    // register handler 

    

  return (
    <div className="relative">
      <div className="relative">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full  mb-12 xl:mb-0 xl:pr-16 xl:w-7/12 hidden lg:block">
             <h2 className="max-w-lg mb-6 font-sans text-3xl text-center font-bold text-cyan-400">
                     Register Now !
                </h2>
              <img
                src="https://i.ibb.co/qWB1hPt/undraw-secure-login-pdn4.png"
                alt="undraw-secure-login-pdn4"
              />
            </div>
            <div className="w-full  xl:px-8 xl:w-5/12">
              <div className="bg-white rounded shadow-2xl p-12">
                <form>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="email"
                      className="inline-block mb-1 font-medium"
                    >
                      Name
                    </label>
                    <input
                      placeholder="your name"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="name"
                      name="name"
                    />
                  </div>

                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="email"
                      className="inline-block mb-1 font-medium"
                    >
                      Photo Url
                    </label>
                    <input
                      placeholder="photo url "
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="photoURL"
                      name="photoURL"
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
                      placeholder="John"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="lastName"
                      className="inline-block mb-1 font-medium"
                    >
                      Password
                    </label>
                    <input
                      placeholder="Doe"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="password"
                      name="password"
                    />
                  </div>

                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="lastName"
                      className="inline-block mb-1 font-medium"
                    >
                      Register As
                    </label>

                    <select name="role" className="select select-bordered w-full max-w-xs">
                      <option value="buyer" selected>Buyer</option>
                      <option value="seller">Seller</option>
                    </select>
                  </div>

                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md  bg-purple-400 hover:bg-purple-700 hover:text-white focus:shadow-outline focus:outline-none"
                    >
                      Register
                    </button>
                  </div>

                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 hover:text-white focus:shadow-lg focus:outline-none"
                    >
                      Register With Google
                    </button>
                  </div>

                  <p className="text-xs text-gray-600 sm:text-sm">
                    Already have any account ?{" "}
                    <Link to="/login" className="text-red-400">
                      Login
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
