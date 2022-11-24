import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/Authprovider";
import toast  from 'react-hot-toast';

export const Register = () => {

    const {registerWithEmailAndPassword,updateNameAndPhoto} = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors }} = useForm();

     /*
       user register korar agei to email address pabe na, register hoye gele tar por e 
       useToken er moddhe user er email dite hobe. tokhon email peye gele token er bebosta
       korte parbe .. but problem holo, kivabe email ta dibo? ai khetre amara,
       1ti state er help nite pari. suruetei state er value thakbe emepty, empty hole useToken
       kaj korbena. er por , userregister hoye gele, sei state er moddhe user er email set kore dile
       , tokhon kintu sei state ta useToken er vitore thakar karone, email ta peye jabe
       email pele, token pabe, token pele navigate hobe 
   */

    const [registerError,setRegisterError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('')

    // register handler 
    const registerHandler = data =>{
     
      setRegisterError('');
      console.log(data)
      registerWithEmailAndPassword(data.email,data.password)
      .then(result=>{

        const user = result.user;
      
        updateNameAndPhoto(data.name,data.photoURL)
            .then(() => {
              
               saveUserInfoInDatabase(data.name,data.email,data.role,data.photoURL)
               
             })
            .catch(err => console.log(err));
          console.log(user)
    })
    .catch(error => {
        console.log(error)
        setRegisterError(error.message)
    });

  }

  
    // save user info when user successfully register 

    const saveUserInfoInDatabase = (name, email,role,photoURL)=>{

      const user = {
        name :name,
        email:email,
        role: role,
        photoURL:photoURL
      }
     
      fetch('http://localhost:5000/addUser',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(user)
      })
      .then(res=>res.json())
      .then(data=>{
         toast.success("User register success")
         setCreatedUserEmail(email)
         
      })
  }
    

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
                <form onSubmit={handleSubmit(registerHandler)}>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="name"
                      className="inline-block mb-1 font-medium"
                    >
                      Name
                    </label>
                    <input {...register("name",{ required:" Name is required !" })}
                      placeholder="your name"
                     
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                  </div>

                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="photoURL"
                      className="inline-block mb-1 font-medium"
                    >
                      Photo Url
                    </label>
                    <input {...register("photoURL",{ required:" Photo url is required !" })}
                      placeholder="photo url "
                    
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      
                    />
                     {errors.photoURL && <p className='text-red-500'>{errors.photoURL?.message}</p>}
                  </div>

                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="email"
                      className="inline-block mb-1 font-medium"
                    >
                      Email
                    </label>
                    <input  {...register("email",{ required:" Email url is required !" })}
                      placeholder="your email"
                 
                      type="email"
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
                    <input  {...register("password",{ required:" Password  is required !" })}
                      placeholder="password"
                     
                      type="password"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    
                    />
                      {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
                  </div>

                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="role"
                      className="inline-block mb-1 font-medium"
                    >
                      Register As
                    </label>

                    <select  {...register("role",{ required:"User role is required !" })} className="select select-bordered w-full max-w-xs">
                      <option value="buyer">Buyer</option>
                      <option value="seller">Seller</option>
                    </select>
                  </div>

                  {/* firebase general errors  */}
                  {
                     registerError && <p className="text-red-600">{registerError}</p>
                   }
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
