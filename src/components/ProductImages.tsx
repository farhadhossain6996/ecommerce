"use client"

const images = [
    {
        id: 1,
        url: "#",
        image: "/Teal Blue Floral Lace Fabric.jpg"
    },
    {
        id: 2,
        url: "#",
        image: "/Royal Yellow Lace Fabric.jpg"
    },
    {
        id: 3,
        url: "#",
        image: "/Vintage Dusty Rose Lace (2).jpg"
    },
    {
        id: 4,
        url: "#",
        image: "/Magenta Rose Lace Fabric.jpg"
    },
]

import Image from 'next/image'
import React, { useState } from 'react'

const ProductImages = () => {
    const [index, setIndex] = useState(0)

    return (
        <div className=''>
            {/* Main Big Image */}
            <div className="h-[500px] relative">
                <Image 
                    src={images[index].image} // .url er bodole .image dewa holo
                    alt=''
                    fill 
                    sizes='50vw'
                    className='object-cover rounded-md'
                />
            </div>

            {/* Thumbnail Images */}
            <div className="flex justify-between gap-4 mt-8 ">
                {
                    images.map((img, i) => (
                        <div 
                            className="w-1/4 h-32 relative cursor-pointer" 
                            key={img.id}
                            onClick={() => setIndex(i)}
                        >
                            <Image 
                                src={img.image} // .url er bodole .image dewa holo
                                alt=''
                                fill 
                                sizes='30vw'
                                className='object-cover rounded-md'
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductImages