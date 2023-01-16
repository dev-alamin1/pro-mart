import { useQuery } from "@tanstack/react-query";
import Category from "./Category";

export const Categories = () => {


    const {data:categoires =[], isLoading} = useQuery({
      queryKey:['categories'],
      queryFn:async()=>{
        const res = await fetch('https://pro-mart-server.vercel.app/categoires');
        const data = res.json();
        return data;
      }
    })

  

    return (
      <div data-aos="zoom-in-up" className=" py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <h2 className="text-center font-bold text-3xl md:text-4xl  my-10">Used Phone</h2>
        <div className="grid gap-8 mt-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">


         {
           categoires.map(cat=><Category key={cat._id} cat={cat}/>)
         }

        </div>
      </div>
    );
  };