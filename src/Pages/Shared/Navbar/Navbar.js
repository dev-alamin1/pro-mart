import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/Authprovider";
import Logo from "../../../logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // receive user auth info from context api
  const { user, loader, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  // user logout
  const logoutHandler = () => {
    logOut()
      .then(() => {
        toast.success("User logout success ");
        navigate("/login");
      })
      .catch((error) => console.log(error));
  };

  const navLi = (
    <>
      <li>
        <Link
          to={"/"}
          aria-label="Our product"
          title="Our product"
          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-400"
        >
          Home
        </Link>
      </li>

      <li>
        <Link
          to={"/blog"}
          aria-label="Product pricing"
          title="Product pricing"
          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-400"
        >
          Blog
        </Link>
      </li>

      {user?.email ? (
        <>
          <li>
            <Link
              to={"/dashboard"}
              aria-label="Dashboard"
              title="Dashboard"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-400"
            >
              Dashboard
            </Link>
          </li>

          <li>
            <Link
              onClick={logoutHandler}
              aria-label="logout"
              title="logout"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-400"
            >
              Logout
            </Link>
          </li>
        </>
      ) : (
        <li>
          <Link
            to="/login"
            aria-label="Login"
            title="login"
            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-400"
          >
            Login
          </Link>
        </li>
      )}
    </>
  );

  if (loader) {
    return <div>Loading ..</div>;
  }

  return (
    <div className="py-5  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <div className="relative flex items-center justify-between">
        <a
          href="/"
          aria-label="Company"
          title="Company"
          className="inline-flex items-center"
        >
          <img src={Logo} className="w-10 h-10" alt="" />
          <span className="brand-name ml-2 text-xl text-orange-400 font-bold tracking-wide ">
            Mobile Pro
          </span>
        </a>
        <ul className="flex items-center hidden space-x-8 lg:flex">{navLi}</ul>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2  mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className=" z-50 absolute top-0 left-0 w-full">
              <div className="p-5 bg-slate-300 border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <a
                      href="/"
                      aria-label="Company"
                      title="Company"
                      className="inline-flex items-center"
                    >
                      <img src={Logo} className="w-10 h-10" alt="" />
                      <span className="brand-name ml-2 text-xl text-orange-400 font-bold tracking-wide ">
                        Mobile Pro
                      </span>
                    </a>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">{navLi}</ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
