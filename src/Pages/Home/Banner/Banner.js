export const Banner = () => {
    return (
      <div className="py-16 mx-auto  md:max-w-full lg:max-w-screen-xl">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
              
            </div>
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                 Second Hand 
                <br className="hidden md:block" />
                 Mobile Phone 
                
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
              From our web site, you can buy used mobile phones of various categories. From verified sellers, we carry mobile phone ads in various categories. You can buy mobile phones as a buyer or advertise your phone for sale yourself.
              </p>
            </div>
           
          </div>
          <div className="flex items-center justify-center -mx-4 lg:pl-8">
            <div className="flex flex-col items-end px-3">

            <img
                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                src="https://i.ibb.co/dmW6St0/samsung-banner.png"
                alt=""
              />

              <img
                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                src="https://i.ibb.co/JK2wzVD/symphony-banner.webp"
                alt=""
              />
              
            </div>
            <div className="px-3">
              <img
                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                src="https://i.ibb.co/Lgg53Y4/iphone-banner.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  };