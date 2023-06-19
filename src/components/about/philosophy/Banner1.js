import React from 'react';
import { about_vision_img } from '../../../access/index';
import { about_mission_img } from '../../../access/index';

const Banner1 = () => {

    return(
        <div>
            <div className='bg-gray-100 md:grid grid-cols-2 gap-5 h-[1000px] md:h-700px text-center md:mx-[20%] my-10'>
                <div className='md:grid grid-rows-2 gap-5'>
                    <div className=''>
                    <img src={about_vision_img} className="w-[100%] md:h-[100%] md:w-[100%]"/>
                    </div>
                    <div className='bg-gray-200 text-justify md:mx-5 px-20 pt-20'>
                        <h1 className='text-indigo-950 text-3xl font-bold mb-5'>Mission</h1>
                        <h2 className='md:text-3xl'>We create, build, and invest in great businesses that deliver enduring value and improve lives.</h2>
                    </div>
                </div>
                <div className=' md: grid grid-rows-2 gap-5'>
                    <div className='bg-gray-200 text-justify md:mx-5 px-20 pt-20'>
                    <h1 className='text-indigo-950 text-3xl font-bold mb-5'>Vission</h1>
                    <h2 className='md:text-3xl'>An investment holding company committed to creating value that transcends generations.</h2>
                    </div>
                    <div className=''><img src={about_mission_img} className="w-[100%] md:h-[100%] md:w-[100%]"/></div>
                </div>
                </div>
            </div>
    );
};

export default Banner1;