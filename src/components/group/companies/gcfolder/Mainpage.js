import React from 'react';
import {about_vision_img} from '../../../../access/index';

const MainPage = () => {
    return (
        <div className='w-full sticky top-0'>
            <section id="energy-section">
            <div className='md:flex'>
            <img src={about_vision_img} alt="The plain land"/>
            <div className='text-white py-[20%] text-6xl font-bold bg-amber-700 w-full pl-20'>Energy</div>    
            </div>
            <div className='md:flex'>
            <div className='space-y-50 pt-[18%] ml-20'>
                <h2 className='text-green-800 pb-[50%] text-3xl font-bold text-center'>Broadview</h2>
                <div className='border-solid border-2 border-amber-900 w-60 h-15 text-center md:py-6 text-amber-900 m-auto font-bold'>
                    <p>VISIT WEBSITE</p>
                </div>
            </div>
            <div className='ml-[20%]'>
                <h2 className='text-6xl text-amber-800 py-10'>Broadview Engineering</h2>
                <p className='text-2xl font-arial'>Broadview Engineering Limited is an engineering firm focused on optimizing local content to create value and jobs in the oil and gas sectors in Nigeria and across West Africa. The company specializes in Engineering, Procurement and Project Management with competent, proactive and highly resourceful management and engineering staff who have extensive experience from working on projects across Nigeria.</p> <br />
                <p className='text-2xl font-arial'>Engineering Design and Procurement forms the biggest segment of the business’ portfolio and the company has integrated its strengths in conceptual, basic and detailed engineering, procurement and project management to offer single-point responsibility under stringent delivery schedules.</p>
            </div>
            </div>   
            <hr class="w-full h-px my-8 bg-amber-700 border-4 dark:bg-amber-700" />
            
            {/** HOGL Energy */} 
            <div className='md:flex'>
            <div className='space-y-50 pt-[18%] ml-20'>
                <h2 className='text-green-800 pb-[50%] text-3xl font-bold text-center'>HOGL <i>(Energy Limited)</i></h2>
                <div className='border-solid border-2 border-amber-900 w-60 h-15 text-center md:py-6 text-amber-900 m-auto font-bold'>
                    <p>VISIT WEBSITE</p>
                </div>
            </div>
            <div className='ml-[20%]'>
                <h2 className='text-6xl text-amber-800 py-10'>HOGL<i>(Energy Limited)</i></h2>
                <p className='text-2xl font-arial'>HOGL Energy Limited (formerly Honeywell Oil and Gas Limited) is the downstream oil and gas operating company of the Honeywell Group. The Company strives to be the preferred supplier of petroleum products in Nigeria.</p> <br />
                <p className='text-2xl font-arial'>The company focuses on the marketing and distribution of white fuels which include AGO (diesel), DPK (kerosene) and PMS (petrol) as well as lubricants to industrial and commercial customers. </p>
                <p className='text-2xl font-arial'>The company has tank farms with a combined capacity of 48,000MT located in Apapa, Lagos and Calabar, Cross Rivers State that serves as storage facilities for fuels. It also has an 8,800,000-liter capacity lubricant blending plant in Ilupeju, Lagos.</p>
            </div>
            </div>   
            <hr class="w-full h-px my-8 bg-amber-700 border-4 dark:bg-amber-700" />
             
             {/** Pivot GIS */} 
            <div className='flex'>
            <div className='space-y-50 pt-[18%] ml-20'>
                <h2 className='text-green-800 pb-[50%] text-3xl font-bold text-center'>PIVOTGIS</h2>
                <div className='border-solid border-2 border-amber-900 w-60 h-15 text-center md:py-6 text-amber-900 m-auto font-bold'>
                    <p>VISIT WEBSITE</p>
                </div>
            </div>
            <div className='ml-[20%]'>
                <h2 className='text-6xl text-amber-800 py-10'>Pivot GIS</h2>
                <p className='text-2xl font-arial'>Pivot GIS Limited (PGIS) provides Engineering, Procurement, Construction (EPC), Operations and Maintenance (O & M) services to the Nigerian Energy Sector. </p> <br />
                <p className='text-2xl font-arial'>The company offers a broad range of services, which include: fabrication and construction, installation of structures, decks and modules; offshore/onshore plant construction and maintenance operations, including upgrades, revamps and modifications; production equipment skid packages; and supply of onshore/offshore construction and maintenance crews. </p>
                <p className='text-2xl font-arial'>PGIS is a proudly Nigerian company, having developed many years of technical and managerial expertise to support projects and operations across the entire oil and gas value chain. In its over two decades of operations, the company has provided services to Nigerian Liquefied Natural Gas Company (NLNG) and leading multinational oil corporations, including Chevron, Shell and Exxon Mobil.</p>
                <p className='text-2xl font-arial'>PGIS is perfectly resourced and positioned to continue to take full advantage of the Local Content Policy of the Federal Government of Nigeria while providing world-class EPCM services to its numerous clients.</p>
            </div>
            </div>   
            <hr class="w-full h-px my-8 bg-amber-700 border-4 dark:bg-amber-700" />
         {/** Rosetti Pivot */} 
         <div className='flex'>
            <div className='space-y-50 pt-[18%] ml-20'>
                <h2 className='text-green-800 pb-[50%] text-3xl font-bold text-center'>Rosetti Pivot</h2>
                <div className='border-solid border-2 border-amber-900 w-60 h-15 text-center md:py-6 text-amber-900 m-auto font-bold'>
                    <p>VISIT WEBSITE</p>
                </div>
            </div>
            <div className='ml-[20%]'>
                <h2 className='text-6xl text-amber-800 py-10'>Rosetti Pivot</h2>
                <p className='text-2xl font-arial'>Rosetti Pivot Limited offers world-class services through local design, fabrication, manufacture, and supply of platforms and systems for the oil & gas industry. The Company also designs and constructs ships to service offshore platforms.</p> <br />
                <p className='text-2xl font-arial'>A joint venture between Rosetti Marino S.p.A and Pivot GIS Limited, the partnership combines over 90 years of experience, local capabilities, and global best practice to deliver world-class solutions.</p>
            </div>
            </div>   
            <hr class="w-full h-px my-8 bg-amber-700 border-4 dark:bg-amber-700" />
              </section>
        
        {/** == begginging of Rreal-estate section == */}
            <section id="real-estate-section">
            <div className='flex'>
            <img src={about_vision_img} alt="The plain land"/>
            <div className='text-white py-[20%] text-6xl font-bold bg-gray-700 w-full pl-20'>Real Estate</div>    
            </div>
            <div className='flex'>
            <div className='space-y-50 pt-[18%] ml-20'>
                <h2 className='text-green-800 pb-[50%] text-3xl font-bold text-center'>Ancorage Leisures Limited</h2>
                <div className='border-solid border-2 border-amber-900 w-60 h-15 text-center md:py-6 text-amber-900 m-auto font-bold'>
                    <p>VISIT WEBSITE</p>
                </div>
            </div>
            <div className='ml-[20%]'>
                <h2 className='text-6xl text-amber-800 py-10'>Anchorage Leisures</h2>
                <p className='text-2xl font-arial'>Anchorage Leisures Limited is a leading indigenous hospitality company in Nigeria, established to promote hospitality, tourism, and culture through active participation and strategic partnerships with global leaders in the hospitality industry.</p> <br />
                <p className='text-2xl font-arial'>The company’s flagship development is the luxurious Radisson Blu Anchorage Hotel, Lagos; a 170-room, 5-star hotel in the heart of Victoria Island. The property is operated in partnership with Radisson Hotel Group, one of the world’s largest and most dynamic hotel groups.</p>
                <p className='text-2xl font-arial'>Anchorage Leisures is poised to leverage its expertise and track record of developing landmark projects to develop more hotel and hospitality related projects across Africa.</p>
            </div>
            </div>   
            <hr class="w-full h-px my-8 bg-amber-700 border-4 dark:bg-amber-700" /> 
            
            {/** == real estate page == */}
            <div className='flex'>
            <div className='space-y-50 pt-[18%] ml-20'>
                <h2 className='text-green-800 pb-[50%] text-3xl font-bold text-center'>URAGA <i>(Real Estate)</i></h2>
                <div className='border-solid border-2 border-amber-900 w-60 h-15 text-center md:py-6 text-amber-900 m-auto font-bold'>
                    <p>VISIT WEBSITE</p>
                </div>
            </div>
            <div className='ml-[20%]'>
                <h2 className='text-6xl text-amber-800 py-10'>Uraga Real Estate</h2>
                <p className='text-2xl font-arial'>Uraga Real Estate (UREL) is a real estate development company with expertise in transforming spaces and enriching the lifestyle and wellbeing of communities.</p> <br />
                <p className='text-2xl font-arial'>With a long commitment to Africa, UREL is well known for its design-led philosophy and creative approach to development. In all its developments, UREL transforms communities by bringing expertise in land acquisition, design, planning, and execution to provide unique lifestyle offerings to a range of clients, across residential, hospitality and commercial sectors.</p>
                <p className='text-2xl font-arial'>As part of its portfolio, UREL developed and launched the Upbeat Recreation Centre, featuring the pioneer trampoline park in West Africa and state-of-the-art recreational facilities offering endless fun, sports, and fitness activities for the benefit of all ages.</p>
            </div>
            </div>   
            <hr class="w-full h-px my-8 bg-amber-700 border-4 dark:bg-amber-700" />
            </section>

            {/** Infrastructure section begins here */}
            <section id="infrastructure-section">
            <div className='flex'>
            <img src={about_vision_img} alt="The plain land"/>
            <div className='text-white py-[20%] text-6xl font-bold bg-amber-700 w-full pl-20'>Infrastructure</div>    
            </div>
            <div className='flex'>
            <div className='space-y-50 pt-[18%] ml-20'>
                <h2 className='text-green-800 pb-[50%] text-3xl font-bold text-center'>Shoreline</h2>
                <div className='border-solid border-2 border-amber-900 w-60 h-15 text-center md:py-6 text-amber-900 m-auto font-bold'>
                    <p>VISIT WEBSITE</p>
                </div>
            </div>
            <div className='ml-[20%]'>
                <h2 className='text-6xl text-amber-800 py-10'>Shoreline Logistics Nigeria</h2>
                <p className='text-2xl font-arial'>Shoreline Logistics Nigeria Limited (SLNL) is a port facility operator and a logistics base services provider, offering coastal services and logistics solutions designed to meet the diverse needs of clients.</p> <br />
                <p className='text-2xl font-arial'>It is a 100% Nigerian company jointly owned by Broadview Engineering Ltd and Coastland Energy Logistics Limited.</p>
                <p className='text-2xl font-arial'>Shoreline has two operational bases in Calabar: NPA Old Port, Calabar, and Mclver Jetty which provide a base for clients’ Tropical West Africa (TWA) operations.</p>
            </div>
            </div>   
            <hr class="w-full h-px my-8 bg-amber-700 border-4 dark:bg-amber-700" />
            </section>
            
            <section id="service-section" className='pb-20'>
            <div className='flex'>
            <img src={about_vision_img} alt="The plain land"/>
            <div className='text-white py-[20%] text-6xl font-bold bg-cyan-800 w-full pl-20'>Services</div>    
            </div>
            <div className='flex'>
            <div className='space-y-50 pt-[18%] ml-20'>
                <h2 className='text-green-800 pb-[50%] text-3xl font-bold text-center'>Services</h2>
                <div className='border-solid border-2 border-amber-900 w-60 h-15 text-center md:py-6 text-amber-900 m-auto font-bold'>
                    <p>VISIT WEBSITE</p>
                </div>
            </div>
            <div className='ml-[20%]'>
                <h2 className='text-6xl text-amber-800 py-10'>Pavilion Technology</h2>
                <p className='text-2xl font-arial'>Pavilion Technology provides end-to-end vertical technology and security infrastructure solutions, as well as smart data platforms for businesses.</p> <br />
                <p className='text-2xl font-arial'>With a varied customer base, the company uses a wide range of technological tools including artificial intelligence and machine learning to optimize solutions for digital workplaces and cloud environments. Pavilion also designs and builds technology infrastructure with state-of-the-art cyber and electronic security systems, paving the way for Internet of Things(IoT) implementation.</p>
                <p className='text-2xl font-arial'>With unparalleled industry-specific expertise, they support clients to digitise their customer experience, foster business security reinvention, streamline operational excellence, and guarantee trust and compliance.</p>
            </div>
            </div>   
            </section>
        </div>
    )
}

export default MainPage;