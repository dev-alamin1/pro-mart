import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/Authprovider";

export const Newsletter = () => {

  const {user} = useContext(AuthContext);

  return (
    <section>
      <div className="">
        <div className="container flex flex-col items-center  py-5 pb-5 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-4xl text-gray-900">
            Do you want to sell your phone?
          </h1>

         {user?.email ? '' : 
            <div>
            <p className="mt-6 text-lg xl:max-w-3xl text-gray-900">
              Sign up for free to sell your used mobile phone!{" "}
            </p>
  
            <div className="flex flex-wrap justify-center">
              <Link to={"/register"}>
                <button
                  type="button"
                  className="px-8 py-3 btn-primary m-2 text-lg font-semibold rounded text-gray-50"
                >
                  Rgister
                </button>
              </Link>
              <Link to={"/login"}>
                <button
                  type="button"
                  className="px-8 btn btn-outline py-3 m-2 text-lg border rounded border-gray-700 text-gray-900"
                >
                  Login
                </button>
              </Link>
            </div>
            </div>
         }
           
       
        </div>
      </div>
      <img
        src="https://i.ibb.co/sVJCzYf/wallpaper.jpg"
        alt=""
        className="w-full mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 bg-gray-500"
      />
    </section>
  );
};
