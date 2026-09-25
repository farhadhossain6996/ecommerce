import Add from '@/components/Add'
import CustomizeProducts from '@/components/CustomizeProducts'
import ProductImages from '@/components/ProductImages'
import React from 'react'

const SinglePage = () => {
  return (
    <div className='px-4 md:px-8 xl:px-32 2xl:px-64 flex flex-col lg:flex-row gap-16 py-8'>
      
      {/* Product Images Section (Sticky on Large Screens) */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>

      {/* Product Details Section */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        
        {/* Main Info */}
        <div className="flex flex-col gap-4">
          <h1 className='text-3xl lg:text-4xl font-medium'>Product Name</h1>
          <p className='text-gray-500 text-sm lg:text-base'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore totam vel earum veniam incidunt, veritatis ex error impedit perspiciatis beatae.
          </p>
        </div>

        <div className='h-[1px] bg-gray-200 w-full' />

        {/* Pricing */}
        <div className="flex items-center gap-4">
          <h3 className='text-xl text-gray-400 line-through'>$59</h3>
          <h2 className='font-semibold text-2xl lg:text-3xl text-gray-800'>$49</h2>
        </div>

        <div className='h-[1px] bg-gray-200 w-full' />

        {/* Customization & Add to Cart */}
        <div className="flex flex-col gap-6">
          <CustomizeProducts />
          <Add />
        </div>

        <div className='h-[1px] bg-gray-200 w-full' />

        {/* Additional Info / Accordion-style descriptions */}
        <div className="flex flex-col gap-4 text-gray-600">
          <div className="text-sm flex flex-col gap-1">
            <h4 className='font-medium text-gray-800'>Title 1</h4>
            <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique in adipisci sapiente sunt.</p>
          </div>
          
          <div className="text-sm flex flex-col gap-1">
            <h4 className='font-medium text-gray-800'>Title 2</h4>
            <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique in adipisci sapiente sunt.</p>
          </div>
          
          <div className="text-sm flex flex-col gap-1">
            <h4 className='font-medium text-gray-800'>Title 3</h4>
            <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique in adipisci sapiente sunt.</p>
          </div>
          
          <div className="text-sm flex flex-col gap-1">
            <h4 className='font-medium text-gray-800'>Title 4</h4>
            <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique in adipisci sapiente sunt.</p>
          </div>
        </div>

      </div>
    </div> 
  )
}

export default SinglePage  