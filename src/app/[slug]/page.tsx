import ProductImages from '@/components/ProductImages'
import React from 'react'

const SinglePage = () => {
  return (
    <div className='px-4 md:px-8 xl:32 2xl:px-64 resize flex flex-col  lg:flex-row gap-16 '>
      {/* IMG */}
<div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
<ProductImages/>
</div>
{/* Texts */}
<div className="w-full lg:w-1/2 flex flex-col gap-6 ">

<div className="">
<h1 className=' text-4xl font-medium' >Product Name</h1>
<p className='text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore totam vel earum veniam incidunt, veritatis ex error impedit perspiciatis beatae.</p>
<div className='h-2 bg-gray-100 '/>
<div className="flex items-center gap-4">

  <h3 className='text-xl text-gray-500 line-through'>$59</h3>
  <h2 className=' font-medium text-2xl'>$49</h2>
</div>
<div className='h-2 bg-gray-100 '/>


</div>


</div>




    </div>
  )
}

export default SinglePage