import React from 'react';

const Zero = ({children}) => {
    return (
        <div className='flex justify-center items-center'>
                <h2 className='text-3xl text-orange-400 font-bold'>{children}</h2>
        </div>
    );
};

export default Zero;