import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductList = () => {
  // ডামি প্রোডাক্ট ডাটা (পরে আপনি এখানে API বা Database থেকে ডাটা ব্যবহার করতে পারবেন)
  const products = [
    { id: 1, name: 'Product Name', price: 49, description: 'My description', href: '/test', image1: '/slider1.jpg', image2: '/slider2.jpg' },
    { id: 2, name: 'Product Name', price: 49, description: 'My description', href: '/test', image1: '/slider1.jpg', image2: '/slider2.jpg' },
    { id: 3, name: 'Product Name', price: 49, description: 'My description', href: '/test', image1: '/slider1.jpg', image2: '/slider2.jpg' },
    { id: 4, name: 'Product Name', price: 49, description: 'My description', href: '/test', image1: '/slider1.jpg', image2: '/slider2.jpg' },
    { id: 5, name: 'Product Name', price: 49, description: 'My description', href: '/test', image1: '/slider1.jpg', image2: '/slider2.jpg' },
    { id: 6, name: 'Product Name', price: 49, description: 'My description', href: '/test', image1: '/slider1.jpg', image2: '/slider2.jpg' },
    { id: 7, name: 'Product Name', price: 49, description: 'My description', href: '/test', image1: '/slider1.jpg', image2: '/slider2.jpg' },
    { id: 8, name: 'Product Name', price: 49, description: 'My description', href: '/test', image1: '/slider1.jpg', image2: '/slider2.jpg' },
  ]

  return (
    <div className='mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap'>
      {products.map((product) => (
        <Link 
          key={product.id} 
          href={product.href} 
          className='relative w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'
        >
          <div className="relative w-full h-80">
            {/* Hover ইমেজ (ওপরের ইমেজ) */}
            <Image 
              src={product.image2} 
              alt={product.name} 
              fill 
              sizes='25vw' 
              className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500'
            />
            {/* নিচের ডিফল্ট ইমেজ */}
            <Image 
              src={product.image1} 
              alt={product.name} 
              fill 
              sizes='25vw' 
              className='absolute object-cover rounded-md'
            />
          </div>

          <div className="flex justify-between">
            <span className='font-medium'>{product.name}</span>
            <span className='font-semibold'>${product.price}</span>
          </div>

          <div className="text-sm text-gray-500">{product.description}</div>

          <button className='rounded-2xl ring-1 ring-primary px-4 py-2 text-primary text-xs hover:bg-primary hover:text-white w-max'>
            Add to Cart
          </button>
        </Link>
      ))}
    </div>
  )
}

export default ProductList


