import Filter from '@/components/Filter'
import ProductList from '@/components/ProductList'
import Image from 'next/image'
import React from 'react'

const ListPage = () => {
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>
      {/* Campaign Banner */}
      <div className="  hidden bg-pink-50 p-4 md:p-8 sm:flex justify-between items-center h-64 rounded-3xl overflow-hidden">
        
        
        <div className="w-1/2 flex flex-col items-center xl:items-start justify-center gap-6 text-center xl:text-left z-10">
          <h1 className='text-4xl  font-semibold leading-tight text-gray-700'>
            Grab up to 50% off on <br /> Selected Products
          </h1>
          <button className='rounded-3xl bg-pink-500 text-white w-max py-3 px-6 text-sm font-medium shadow-md hover:bg-pink-600 transition'>
            Buy Now
          </button>
        </div>

      
        <div className="relative w-1/2 h-full ">
          <Image 
            src="/ReBgImage.png" 
            alt="campaign image" 
            fill 
            className='object-contain ' 
          />
        </div>

      </div>

{/* Filter */}

<Filter/>
{/* Products */}

<h1 className='mt-12 text-xl  font-semibold '>Shoes For You!</h1>
<ProductList/>

{/* Texts */}




    </div>
  )
}

export default ListPage