import React from 'react';
//import { Regions_map } from '../../access';
import { nigerian_map } from '../../access';

const Banner1 = () => {

    return(
        <div>
            <div className='bg-gray-100 md:grid grid-cols-3 h-[700px] text-center space-y-5 md:space-y-0'>
                <div className='mx-10'>
                    <h1 className='text-indigo-900 text-4xl md:text-6xl font-bold font-impact pt-10 md:py-40 md:pl-20'>Over four decades of impact.</h1>
                </div>
                <div className='md:pt-20 border-blur'>
                    <img src={nigerian_map} className='mx-10 md:w-100 md:h-80 ' />
                </div>
                <div className='font-bold md:py-60 md:ml-10'>
                    <h2 className=' md:text-2xl font-serif font-extralight mb-6'>See what drives us</h2>
                    <div className='border-solid border-2 border-amber-900 w-60 h-15 text-center md:py-6 text-amber-900 m-auto'>
                    <p>OUR PHILOSOPHY.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner1;