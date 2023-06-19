import React from 'react';

const Banner = () => {

    return(
        <div>
            <div className='bg-gray-100 md:grid grid-cols-3 h-[700px] min-md:h-[750px] text-center pt-5 md:space-y-0'>
                <div className='mx-20 text-left md:ml-40'>
                    <h1 className='text-indigo-800 text-4xl md:text-6xl font-bold font-impact pt-10 md:pt-20'>Our Philosophy</h1>
                    <h2 className='md:text-2xl font-serif font-extralight mb-6 pt-10'>we create sustainable value for our stakeholders</h2>
                </div>
                </div>
            </div>
    );
};

export default Banner;