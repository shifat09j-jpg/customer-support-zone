import React from 'react';

const Footer = () => {
    return (
       <footer className="bg-black text-gray-300 pt-16">
      <div className="w-11/12 mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 items-center justify-between">
        
        <div className="lg:col-span-2">
          <h2 className="text-white text-xl font-bold mb-4">
            CS — Ticket System
          </h2>
          <p className="text-sm  text-gray-400">
            Lorem ipsum is simply dummy text of the<br></br> printing and typesetting
            industry. Lorem<br></br> ipsum has been the industry's standard<br></br> dummy text
            ever since the 1500s.
          </p>
        </div>

       
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Our Mission</li>
            <li>Contact Sales</li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Products & Services</li>
            <li className="flex items-center gap-2">
              Customer Queries
              <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded">
                517
              </span>
            </li>
            <li>Download Apps</li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-white font-semibold mb-4">Information</h3>
          <ul className="space-y-2 text-sm">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Join Us</li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-white font-semibold ">Social Links</h3>
          <ul className="space-y-2 text-sm">
            <li>@CS — Ticket System</li>
            <li>@CS — Ticket System</li>
            <li>@CS — Ticket System</li>
            <li>support@cst.com</li>
          </ul>
        </div>
      </div>

     
      <div className="border border-gray-700 mt-12 py-5 text-center text-sm text-gray-400">
        © 2025 CS — Ticket System. All rights reserved.
      </div>
    </footer>
  ); 
    
};

export default Footer;