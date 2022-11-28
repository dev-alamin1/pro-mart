import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/Authprovider";
import useToken from "../../../hooks/useToken";
export const Login = () => {

  //authinfo from contex 
  const {loginWithEmailAndPassword,loginWithGoogleProvider} = useContext(AuthContext)
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loginError,setLoginError] = useState('');

  /*
       user login korar agei to email address pabe na, login hoye gele tar por e 
       useToken er moddhe user er email dite hobe. tokhon email peye gele, token er bebosta
       korte parbe .. but problem holo, kivabe email ta dibo? ai khetre amara,
       1ti state er help nite pari. suruetei state er value thakbe emepty, empty hole useToken
       kaj korbena. er por , userlogin  hoye gele, sei state er moddhe user er email set kore dile
       , tokhon kintu sei state ta useToken er vitore thakar karone, email ta peye jabe
       email pele, token pabe, token pele navigate hobe 
   */
       const navigate = useNavigate();
       const location = useLocation();
       const from = location.state?.from?.pathname || '/';

  const [loginUserEmail,setLoginUserEmail] = useState('');
  
   const [token] = useToken(loginUserEmail);
 

  useEffect(()=>{
      if(token)
      {
        navigate(from,{replace:true})
      }
  },[token,from,navigate])

  

  //handler user login
  const userLogin = (data)=>{
       loginWithEmailAndPassword(data.email,data.password)
      .then(result=>{
          const user =result.user;
          if(user.email)
          {
            setLoginUserEmail(data.email)
            console.log(data.email)
            toast.success("User login success ")
          }
      })
      .catch(error=>setLoginError(error.message))
  }


  const loginWithGoogleProviderHandler = ()=>{

             loginWithGoogleProvider()
             .then((result)=>{
               const user = result.user;
               saveUserInfoInDatabase(user.displayName,user.email,user.photoURL)
             })
  }

   // save user info when user successfully register 

   const saveUserInfoInDatabase = (name, email,photoURL)=>{

    const user = {
      name :name,
      email:email,
      role: 'buyer',
      photoURL:photoURL
    }
    
   
    fetch('https://pro-mart-server.vercel.app/addUser',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
        toast.success("User login success")
        setLoginUserEmail(email)
      
    })
}


    return (
      <div className="relative">
        <img
          src="https://images.pexels.com/photos/3228766/pexels-photo-3228766.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-opacity-75 bg-purple-600">
          <svg
            className="absolute inset-x-0 bottom-0 text-white"
            viewBox="0 0 1160 163"
          >
            <path
              fill="currentColor"
              d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
            />
          </svg>
          <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12 hidden md:block">
                <h2 className="max-w-lg mb-6 font-sans text-3xl text-center font-bold tracking-tight text-white sm:text-4xl">
                     Welcome To Pro Mart <br />
                     Login Now !
                </h2>
            
              </div>
              <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                  
                  <form onSubmit={handleSubmit(userLogin)}>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="email"
                        className="inline-block mb-1 font-medium"
                      >
                       Email
                      </label>
                      <input {...register("email",{required:"Email is required !"})}
                        placeholder="email"
                      
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        
                      />
                      {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="password"
                        className="inline-block mb-1 font-medium"
                      >
                        Password
                      </label>
                      <input {...register("password",{required:'Password is required !'})}
                        placeholder="password"
                       
                        type="password"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        
                      />
                      {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                    </div>
                   
                   {
                      loginError && <p className="text-red-500">{loginError}</p>
                   }

                    <div className="mt-4 mb-2 sm:mb-4">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md  bg-purple-400 hover:bg-purple-700 hover:text-white focus:shadow-outline focus:outline-none"
                      >
                        Login
                      </button>
                    </div>

                    <div className="mt-4 mb-2 sm:mb-4">
                      <button onClick={loginWithGoogleProviderHandler}
                        type="button"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 hover:text-white focus:shadow-lg focus:outline-none"
                      >
                        Login With Google
                      </button>
                    </div>

                    <p className="text-xs text-gray-600 sm:text-sm">
                      Don't have any account ? <Link to="/register" className="text-red-400">Register</Link>
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