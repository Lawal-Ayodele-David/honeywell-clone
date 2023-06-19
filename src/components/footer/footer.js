import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
//import { Regions_map } from '../../access';

const Footer = () => {
    return(
        <div className='w-full pt-5 bg-gray-100'>
            <hr />
            <div className=' md:flex justify-between px-5 py-10'>
            <div className='md:flex md:gap-30 '>
            <ul className='space-x-10 md:flex'>
                <a className='text-amber-800'><li>Home</li></a>
                <a><li>Contact</li></a>
                <a><li>Whistleblowing</li></a>
                <a><li>Legal Notices</li></a>
                <ul className='flex space-x-5 text-amber-800 md:my-0 my-5'>
                <a><li><FaLinkedin size={30} /></li></a>
                <a><li><FaTwitter size={30} /></li></a>
                <a><li><FaFacebook size={30} /></li></a>
                <a><li><FaInstagram size={30} /></li></a>
                <a><li><FaGithub size={30} /></li></a>
            </ul>
            </ul>
            </div>
           <div className='text-gray-500 pt-3'> @ 2023 Honeywell Group</div>
           </div>
        </div>
    );
};

export default Footer;