import React from 'react';
import Logo from './Logo';

const Navbar = () => {
    return (
        <div className="content-box flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5">
            <Logo></Logo>
           <nav>
            <ul className="flex gap-6 items-center">
                <li><a href="" className=" border-primary py-1 border-primary duration-200 hover:font-bold">Home</a></li>
                <li><a href="" className=" border-primary py-1 border-primary duration-200 hover:font-bold">FAQ</a></li>
                <li><a href="" className=" border-primary py-1 border-primary duration-200 hover:font-bold">Changelog</a></li>
                <li><a href="" className=" border-primary py-1 border-primary duration-200 hover:font-bold">Blog</a></li>
                <li><a href="" className=" border-primary py-1 border-primary duration-200 hover:font-bold">Download</a></li>
                <li><a href="" className=" border-primary py-1 border-primary duration-200 hover:font-bold">Contact</a></li>
                <li className=""><button class=" text-white font-medium w-[145px] h-[43px]  btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl  bg-[#632ee3]  hove:font-bold  ">+ New Ticket</button></li>
            </ul>
           </nav>
          
        </div>
    );
};

export default Navbar;