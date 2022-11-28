import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/Authprovider';

const CommonDashboard = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl font-bold">Welcome <span className='text-orange-500'> {user?.displayName}</span></h1>
      <p className="mb-5">You can see your all activities here </p>
     
    </div>
  </div>
</div>
    );
};

export default CommonDashboard;