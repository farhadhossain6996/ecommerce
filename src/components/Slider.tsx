"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const slides = [
  {
    id: 1,
    title: "Summer Sale Collection",
    description: "Sale! Up to 60% off",
    img: "/slider1.jpg",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "Winter Sale Collection",
    description: "Sale! Up to 60% off",
    img: "/slider2.jpg",
    url: "/",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 3,
    title: "Spring Sale Collection",
    description: "Sale! Up to 40% off",
    img: "/slider3.jpg",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
]

const Slider = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className='h-[calc(100vh-80px)] overflow-hidden relative'>
        
        {/* স্লাইডার ট্র্যাক: মোট চওড়া এবং স্লাইড পরিবর্তনের লজিক */}
        <div 
          className="h-full flex transition-all ease-in-out duration-1000" 
          style={{ 
            transform: `translateX(-${(current * 100) / slides.length}%)`,
            width: `${slides.length * 100}%` 
          }}
        >
            {slides.map(slide => (
              <div 
                className={`${slide.bg} h-full flex-shrink-0 flex flex-col gap-16 xl:flex-row`} 
                style={{ width: `${100 / slides.length}%` }}
                key={slide.id}
              >
                
                {/* Text Container */}
                <div className="h-1/2 xl:h-full xl:w-1/2 flex flex-col justify-center text-center items-center gap-8 2xl:gap-12">
                  <h2 className='text-xl lg:text-3xl 2xl:text-5xl'>{slide.description}</h2>
                  <h1 className='text-5xl lg:text-6xl 2xl:text-8xl font-semibold'>{slide.title}</h1>
                  <Link href={slide.url}>
                    <button className='rounded-md bg-black text-white py-3 px-4'>SHOP NOW</button>
                  </Link>
                </div>

                {/* Image Container */}
                <div className="h-1/2 xl:h-full xl:w-1/2 relative ">
                  <Image 
                    src={slide.img} 
                    alt='' 
                    fill 
                    sizes="(max-width: 1280px) 100vw, 50vw" 
                    className='object-cover' 
                  />
                </div>

              </div>
            ))}
        </div>

        {/* Pagination Dots */}
        <div className="absolute m-auto left-1/2 bottom-8 flex gap-4 z-10 -translate-x-1/2">
          {slides.map((slide, index) => (
            <div 
              className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex justify-center items-center ${current === index ? "scale-150" : ""}`} 
              key={slide.id}
              onClick={() => setCurrent(index)}
            >
              {current === index && (<div className='w-[6px] h-[6px] bg-gray-600 rounded-full'></div>)}
            </div>
          ))}
        </div>

    </div>
  )
}

export default Slider


