import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { useQuery } from "@tanstack/react-query";

export const Banner = () => {

  const {data:allPhones = []} = useQuery({
    queryKey:['allPhones'],
    queryFn:async()=>{
      const res = await fetch('http://localhost:5000/all/phones')
      const data  = await res.json();
      return data;
    }
  })

  if(allPhones)
  {
    console.log(allPhones)
  }

    return (
      // <div className="py-16 mx-auto  md:max-w-full lg:max-w-screen-xl h-[100vh]">
      //   <div className="grid gap-10 lg:grid-cols-2">
      //     <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
      //       <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
              
      //       </div>
      //       <div className="max-w-xl mb-6">
      //         <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
      //            Second Hand 
      //           <br className="hidden md:block" />
      //            Mobile Phone 
                
      //         </h2>
      //         <p className="text-base text-gray-700 md:text-lg">
      //         From our web site, you can buy used mobile phones of various categories. From verified sellers, we carry mobile phone ads in various categories. You can buy mobile phones as a buyer or advertise your phone for sale yourself.
      //         </p>
      //       </div>
           
      //     </div>
      //     <div className="flex items-center justify-center -mx-4 lg:pl-8">
      //       <div className="flex flex-col items-end px-3">

      //       <img
      //           className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
      //           src="https://i.ibb.co/dmW6St0/samsung-banner.png"
      //           alt=""
      //         />

      //         <img
      //           className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
      //           src="https://i.ibb.co/JK2wzVD/symphony-banner.webp"
      //           alt=""
      //         />
              
      //       </div>
      //       <div className="px-3">
      //         <img
      //           className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
      //           src="https://i.ibb.co/Lgg53Y4/iphone-banner.jpg"
      //           alt=""
      //         />
      //       </div>
      //     </div>
      //   </div>
      // </div>



      <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >

        {
          allPhones?.map((phone,index)=>{
            return <SwiperSlide className="relative">
             
                  <img className="w-full md:w-1/2" src={phone.productImg} alt="" />
                  <h2 className="absolute top-3/4 md:text-3xl bg-yellow-400 rounded p-2"> {phone.productName} <div className="badge">{phone.resalePrice}Tk</div>  </h2>
             
            </SwiperSlide>
          })
        }
      </Swiper>
    </>
    );
  };