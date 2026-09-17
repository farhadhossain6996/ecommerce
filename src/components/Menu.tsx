"use client";

import { Menu as MenuIcon } from "lucide-react";

import Link from "next/link";
import { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <MenuIcon
        className="cursor-pointer w-5 h-5"
        onClick={() => setOpen((prev) => !prev)}
      />

      {open && (
        <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col justify-center gap-8 items-center text-xl z-10 ">
          <Link href="/">Homepage</Link>
          <Link href="/">Shop</Link>
          <Link href="/">Deals</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Logout</Link>
          <Link href="/">Car(1)</Link>
        
        </div>
      )}
    </div>
  );
};

export default Menu;
