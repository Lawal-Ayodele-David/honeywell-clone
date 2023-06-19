import React from 'react';
//import { Regions_map } from '../../access';
//import { nature } from '../../access';

const Banner = () => {

    return(
        <div>
            <div className='bg-gray-100 md:grid grid-cols-3 h-[750px] text-center space-y-5 md:space-y-0'>
                <div className='mx-20 text-left md:ml-40'>
                    <h1 className='text-amber-900 text-4xl md:text-6xl font-bold font-impact pt-10 md:pt-20'>Honeywell Group</h1>
                    <h2 className='md:text-2xl font-serif font-extralight mb-6 pt-10'>A Nigerian innvestment company creating, building and investing in great business since 1972</h2>
                </div>
                </div>
                <div className='bg-amber-900 w-full h-5' ></div>
            </div>
    );
};

export default Banner;