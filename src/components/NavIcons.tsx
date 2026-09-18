"use client"
import { User, Bell, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import CartModel from './CartModel';


function NavIcons() {
  const router = useRouter()
const [isProfileOPen,setIsProfileOpen]=useState(false);
const [isCartOpen,setIsCartOpen]=useState(false);
const isLoggedIn=false

const handleProfile=()=>{
  if(!isLoggedIn){
router.push("/login");
  }
  setIsProfileOpen((prev)=> !prev);
}
  return (
    <div className='flex items-center gap-4 xl:gap-6 cursor-pointer relative'>
<User className="w-6 h-6"
onClick={handleProfile}

/>
{
  isProfileOPen && <div className="absolute p-4 rounded-md top-12 left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
<Link href="/">Profile</Link>
<div className="mt-2 cursor-pointer">LogOut</div>

  </div>
}



      <Bell className="w-6 h-6" />


<div className="relative cursor-pointer">
        <ShoppingCart className="w-6 h-6"
      onClick={()=> setIsCartOpen((prev)=> !prev)} />

      <div className="absolute -top-4 -right-4 w-6 h-6 bg-primary rounded-full text-white flex items-center justify-center  ">2</div>
{
  isCartOpen && (
    <CartModel/>
  )
}
</div>
    </div>
  )
}

export default NavIcons