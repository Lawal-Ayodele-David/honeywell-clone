import React from 'react';
//import { Regions_map } from '../../access';

const Banner3 = () => {

    return(
        <div className='bg-gray-100'>
            <h1 className='text-indigo-950 text-3xl ml-20 md:text-6xl font-bold font-impact md:text-center py-10'>Group Updates</h1>
            <div className='md:grid grid-cols-3 h-full justify-center font-serif md:text-2xl px-10 space-y-4'>
                <div className='px-10  md:border-r-4  pb-2'>
                    <h2 className='text-amber-800  font-bold font-impact mb-5'>MAY 12, 2023</h2>
                    <p>Honeywell Group's CFO, Kemi Adeoye, Appointed as Ikeja Hotels Plc Non-Executive Director.</p>
                </div>
                <div className='px-10  md:border-r-4  pb-2'>
                <h2 className='text-amber-800 font-bold font-impact mb-5'>MAY 11, 2023</h2>
                    <p>Yewande Giwa, Head Governance & Sustainability HGL, Shares Insights & Experience on Corporate Goverance in Recent Interview with ThisDay.</p>
                </div>
                <div className='px-10'>
                <h2 className='text-amber-800 font-bold font-impact mb-5'>MAY 10, 2023</h2>
                    <p>Meet the Impact Driven Women of Honeywell Group</p>
                </div>
            </div>
            <div className='border-solid text-white bg-amber-800 border-2 w-40 h-10 text-center pt- mt-10 m-auto'>
                    <p>VIEW MORE</p>
                    </div>
        </div>
    );
};

export default Banner3;