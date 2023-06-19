import React from 'react';


const Banner2 = () => {

    return(
        <div className='my-10'>
                        <h1 className='text-indigo-950 text-3xl md:text-6xl text-center font-bold mb-5'>We are steered by five core guidelines.</h1>
            <div className='md:grid grid-cols-2 gap-5 h-900px md:my-10 md:mx-[15%]'>
            <div className='bg-gray-200 md:mx-5 py-[10%] px-10'>
                        <h1 className='text-6xl mb-5 text-center text-gray-100 font-bold'>01</h1>
                        <h2 className='text-2xl md:text-3xl text-indigo-950 font-bold'>We Invest in and build great companies with enduring value</h2> <hr class="md:hidden h-px my-8 bg-amber-500 border-0 dark:bg-gray-700" />
                        <p className='text-2xl md:text-3xl'>Grounded in sound research and analytics, we assess and invest in opportunities that have a strong market position, unique and defensible–niche and deliver attractive returns.</p>
                    </div>
                    <div className='bg-gray-200 md:mx-5 py-[10%] px-20'>
                        <h1 className='text-6xl mb-5 text-center text-gray-100 font-bold'>02</h1>
                        <h2 className='text-2xl md:text-3xl text-indigo-950 font-bold'>We think long-term</h2><hr class="md:hidden h-px my-8 bg-amber-500 border-0 dark:bg-gray-700" />
                        <p className='text-2xl md:text-3xl'>We take a long-term view on our investments, unafraid to re-evaluate our position and take bold non-sentimental decisions.</p>
                    </div>
                    <div className='bg-gray-200 md:mx-5 py-[10%] px-20'>
                        <h1 className='text-6xl mb-5 text-center text-gray-100 font-bold'>03</h1>
                        <h2 className='text-2xl md:text-3xl text-indigo-950 font-bold'>We seek to be a major driving force in our companies</h2><hr class="md:hidden h-px my-8 bg-amber-500 border-0 dark:bg-gray-700" />
                        <p className='text-2xl md:text-3xl'>We either seek controlling shareholder status, are a significant member of majority group bound through agreements or are a standalone minority shareholder with appropriate protection.</p>
                    </div>
                    <div className='bg-gray-200 md:mx-5 py-[10%] px-20'>
                        <h1 className='text-6xl mb-5 text-center text-gray-100 font-bold'>04</h1>
                        <h2 className='text-2xl md:text-3xl text-indigo-950 font-bold'>We ensure that our companies have the right management teams and appropriate capital structure</h2><hr class="md:hidden h-px my-8 bg-amber-500 border-0 dark:bg-gray-700" />
                        <p className='text-2xl md:text-3xl'>We equip our companies to succeed by backing qualified management teams and ensuring that they have the appropriate capital structures to support sustainable growth.</p>
                    </div>
                </div>
                <div className='bg-gray-200  md:mx-[30%] py-10 px-20'>
                        <h1 className='text-6xl mb-5 text-center text-gray-100 font-bold'>05</h1>
                        <h2 className='text-2xl md:text-3xl text-indigo-950 font-bold'>We are committed to strong & transparent corporate governance</h2><hr class="md:hidden h-px my-8 bg-amber-500 border-0 dark:bg-gray-700" />
                        <p className='text-2xl md:text-3xl'>We ensure that across all our companies, best-in-class corporate governance practices are adhered to and we are transparent in all our dealings.</p>
                    </div>
            </div>
    );
};

export default Banner2;