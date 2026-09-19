import Link from 'next/link'
import React from 'react'

import { 
  FaFacebookF, 
  FaInstagram, 
  FaYoutube, 
  FaPinterestP, 
  FaTwitter 
} from 'react-icons/fa';

import { 
  SiDiscover, 
  SiPaypal, 
  SiMastercard, 
  SiVisa 
} from 'react-icons/si';

const Footer = () => {
  return (
    <div className="py-24 flex justify-between gap-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm mt-24">
      {/* Top */}
      <div className="flex flex-col md:flex-row  justify-between gap-24">
        
        {/* Left */}
        <div className="w-full lg:w-1/4 md:w-1/2 flex flex-col gap-8">
          <Link href="/">
            <div className="text-2xl tracking-wide">logo</div>
          </Link>
          <p>3243 windit way ,central plaxe</p>
          <span className='font-semibold'>healoo @ gmail.com</span>
          <span className='font-semibold'>1245780</span>
          
          {/* Social Icons */}
          <div className="flex items-center gap-4 text-gray-700">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition-colors">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors">
              <FaYoutube className="w-5 h-5" />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-700 transition-colors">
              <FaPinterestP className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
              <FaTwitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Center */}
        <div className="hidden lg:flex justify-between w-1/4"></div>

        {/* Right */}
        <div className="w-full lg:w-1/4 md:w-1/2 flex flex-col gap-8">
          <h1 className='font-medium text-lg'>SUBSCRIBE</h1>
          <p>Be the first to get the latest news about trends, promotions, and much more!</p>

          <div className="flex">
            <input type="text" placeholder='Email address' className='p-4 w-3/4 outline-none' />
            <button className='w-1/4 bg-primary text-white'>JOIN</button>
          </div>

          <div className="flex flex-col gap-4 mt-2">
            <span className='font-semibold'>Secure Payments</span>
            <div className="flex items-center gap-4 text-2xl text-gray-700">
              {/* Discover */}
              <div title="Discover">
                <SiDiscover className="w-6 h-6 hover:text-blue-500 transition-colors cursor-pointer" />
              </div>

              {/* Skrill (SVG দিয়ে সমাধান করা হলো) */}
              <div title="Skrill">
                <svg className="w-6 h-6 hover:text-purple-600 transition-colors cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.4 3h9.2l-3.1 9H4.3L7.4 3m9.2 18H7.4l3.1-9h9.2l-3.1 9z"/>
                </svg>
              </div>

              {/* PayPal */}
              <div title="PayPal">
                <SiPaypal className="w-6 h-6 hover:text-blue-700 transition-colors cursor-pointer" />
              </div>

              {/* MasterCard */}
              <div title="MasterCard">
                <SiMastercard className="w-6 h-6 hover:text-orange-500 transition-colors cursor-pointer" />
              </div>

              {/* Visa */}
              <div title="Visa">
                <SiVisa className="w-6 h-6 hover:text-blue-800 transition-colors cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

      </div>
      {/* Bottom */}
      <div className=""></div>
    </div>
  )
}

export default Footer