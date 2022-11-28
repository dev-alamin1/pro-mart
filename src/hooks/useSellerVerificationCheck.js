// import { useEffect, useState } from "react"

// const useSellerVerificationCheck = (email)=>{

//      const [seller,setSeller] = useState();
//      const [sellerVerificationLoading,setSellerVerificationLoading] = useState(true);

//        useEffect(()=>{
//            fetch(`https://pro-mart-server.vercel.app/checkSellerVerify/${email}`)
//            .then(res=>res.json())
//            .then(data=>{

//             setSeller(data)
//             setSellerVerificationLoading(false);
//            })

//        },[email]);

//        return [seller,sellerVerificationLoading];
// }

// export default useSellerVerificationCheck;