import React from 'react';

const Navlinks = () => {

    const links = [{name: "The Group"}, {name: "News"}, {name: "Carreer"}, {name: "CSR"}, {name: "Contact"}]
    return (
        <>
            {links.map((link) =>(
                <div>
                    <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-neutral-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    {link.name}
                    </a>
                </div>              
            ))}
        </>
    );
};

export default Navlinks;