import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import Image from 'next/image'
import SearchBar from './SearchBar'
import NavIcons from './NavIcons'

const Navbar = () => (
    <div className='relative h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64'>

        <div className="flex items-center justify-between md:hidden">
            {/* Mobile */}


            <Link href="/">
                <div className="text-2xl tracking-wide">LOGO</div>
            </Link>
            <Menu />
        </div>
        {/* Bigger Screens */}

        <div className="hidden md:flex items-center justify-between h-full gap-8">
            {/* Left */}

            <div className="w-1/3">
            <Link href="/" className='flex items-center gap-3 '>
<Image src="/public/vercel.svg" alt="" width={24} height={24}/>

            <div className="text-2xl tracking-wide">LOGO</div>
            </Link>
            
            </div>
 {/* Right*/}
<div className="2/3 flex items-center justify-between gap-8 ">
<SearchBar/>
<NavIcons/>
</div>
        </div>

    </div>
)

export default Navbar
