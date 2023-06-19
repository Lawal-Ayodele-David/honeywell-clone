import React from 'react';
import { Home_img_economy } from '../../access';

const Banner2 = () => {

    return(
        <div>
            <div className='bg-gray-100 pt-10'>
            <div className='bg-gradient-to-tl from bg-gray-700 to-red-900'>
                    <img src={Home_img_economy} className="w-[100%] md:h-[700px] md:w-[100%] mix-blend-overlay"/>
                </div>
                <div className='absolute z-30 top-[190%] md:top-[180%] md:px-20 text-center'>
                    <h1 className='text-white text-3xl md:text-7xl font-bold font-impact py-60 px-5 md:pl-20'>Strategically deploying capital accross the Nigerian economy</h1>
                </div> 
                <div className='font-bold py-60 text-white absolute z-10 top-[200%] md:top-[200%] ml-[20%] md:ml-[40%] text-center mt-20'>
                    <div className='border-solid border-2 border-white w-60 h-15 text-center md:py-6'>
                    <p>OUR COMPANIES</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner2;