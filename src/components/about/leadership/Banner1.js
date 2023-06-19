import React from 'react';
import { about_mission_img } from '../../../access';
const Banner = () => {

    return(
        <div>
            <div className='bg-gray md:grid grid-cols-3 gap-8 h-1000px text-center md:my-10 md:mx-20'>
            <div className='text-justify'>
                        <img src={about_mission_img} alt='Region map of the people' className="w-[100%] md:h-[80%] md:w-[100%]"/>
                        <h2 className='text-2xl md:text-3xl text-indigo-950 font-bold'>Oba Otudeko, CFR </h2>
                        <p className='text-2xl'>Group Chairman</p>
                    </div>
                    <div className='text-justify'>
                    <img src={about_mission_img} alt='Region map of the people' className="w-[100%] md:h-[80%] md:w-[100%]"/>
                        <h2 className='text-2xl md:text-3xl text-indigo-950 font-bold'>Obafemi Otudeko</h2>
                        <p className='text-2xl'>Managing Director</p>
                    </div>
                    <div className='text-justify'>
                    <img src={about_mission_img} alt='Region map of the people' className="w-[100%] md:h-[80%] md:w-[100%]"/>
                        <h2 className='text-2xl md:text-3xl text-indigo-950 font-bold'>Otu Hughes</h2>
                        <p className='text-2xl'>Chief Investment Officer</p>
                    </div>
                    <div className='text-justify'>
                    <img src={about_mission_img} alt='Region map of the people' className="w-[100%] md:h-[80%] md:w-[100%]"/>
                        <h2 className='text-2xl md:text-3xl text-indigo-950 font-bold'>Oluwayemisi Busari</h2>
                        <p className='text-2xl'>Senior Adviser, Government Relations</p>
                    </div>
                    <div className='text-left'>
                    <img src={about_mission_img} alt='Region map of the people' className="w-[100%] md:h-[80%] md:w-[100%]"/>
                        <h2 className='text-2xl md:text-3xl text-indigo-950 font-bold'>Andrew Smith-Maxwell</h2>
                        <p className='text-2xl'>Senior Adviser, Corporate Finance and Infrastructure</p>
                    </div>
                    <div className='text-justify'>
                    <img src={about_mission_img} alt='Region map of the people' className="w-[100%] md:h-[80%] md:w-[100%]"/>
                        <h2 className='text-2xl md:text-3xl text-indigo-950 font-bold'>Kehinde Bolodeoku</h2>
                        <p className='text-2xl'>CEO, Pivot Energy Services Group</p>
                    </div>
                    <div className='text-justify'>
                    <img src={about_mission_img} alt='Region map of the people' className="w-[100%] md:h-[80%] md:w-[100%]"/>
                        <h2 className='text-2xl md:text-3xl text-indigo-950 font-bold'>Moyo Ogunseinde</h2>
                        <p className='text-2xl'>Executive Director, Uranga Real Estate Limited</p>
                    </div>
                    <div className='text-justify'>
                    <img src={about_mission_img} alt='Region map of the people' className="w-[100%] md:h-[80%] md:w-[100%]"/>
                        <h2 className='text-2xl md:text-3xl text-indigo-950 font-bold'>Yewande Giwa</h2>
                        <p className='text-2xl'>Head, Governance and Sustainability</p>
                    </div>
                    <div className='text-justify'>
                    <img src={about_mission_img} alt='Region map of the people' className="w-[100%] md:h-[80%] md:w-[100%]"/>
                        <h2 className='text-2xl md:text-3xl text-indigo-950 font-bold'>Olasumbo Abolaji</h2>
                        <p className='text-2xl'>General Counsel</p>
                    </div>
                    <div className='text-justify'>
                    <img src={about_mission_img} alt='Region map of the people' className="w-[100%] md:h-[80%] md:w-[100%]"/>
                        <h2 className='text-2xl md:text-3xl text-indigo-950 font-bold'>Tomi Otundeko</h2>
                        <p className='text-2xl'>Head, Corporate Services</p>
                    </div>
                </div>
            </div>
    );
};

export default Banner;