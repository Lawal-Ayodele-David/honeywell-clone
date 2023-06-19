import React from 'react';
import MainPage from './Mainpage';

const Banner1 = () => {
    const handleLinkClick = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth'});
        }
    };

    let links = [
        {name: "Energy", link : 'energy-section'},
        {name: "Real Estate", link : 'real-estate-section'},
        {name: "Infrastructure", link : 'infrastructure-section'},
        {name: "Service", link : 'service-section'},
    ];
    return(
        <div className='flex'>
            <div className='w-1/5 sticky top-0 bg-gray-200 md:h-screen md:py-20 md:space-y-10 md:px-10 pt-[8%]'>
                <ul>            
                {links.map((link, index) => (
                    <li key={index}>
                        <a 
                        href={`#${link.link}`} 
                        onClick={(e) => handleLinkClick(e, link.link)}
                        className='text-3xl text-indigo-950'>
                            {link.name}
                            </a> 
                            <hr class="h-px my-10 bg-white border-0 dark:bg-gray-700" />
                            </li>
                ))}
                </ul>
            </div>
            <MainPage />
        </div>
    );
};

export default Banner1;