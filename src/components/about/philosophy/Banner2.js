import React from 'react';
import { Regions_map } from '../../../access/index';


const Banner2 = () => {

    return(
        <div>
            <div className='bg-gray-100 md:grid grid-cols-2 gap-5 h-[700px] md:h-700px text-center md:my-10'>
                    <div className=''>
                    <img src={Regions_map} className="w-[100%] md:h-[100%] md:w-[100%]"/>
                    </div>
                    <div className='bg-gray-200 text-justify md:mx-5 pt-[20%] px-20'>
                        <h2 className='md:text-3xl mb-5'>We are committed to creating value beyond today-pioneering, building, and investing in suceessful businesses that improve the world for our customers, our communities and our country.</h2>
                        <h2 className='md:text-3xl'>Our core values represent who we are and how we engage with our stakeholders.</h2>
                    </div>
                </div>
            </div>
    );
};

export default Banner2;