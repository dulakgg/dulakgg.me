'use client'
import { useState } from 'react';
import { motion } from "motion/react"
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import ThemeSwitcher from './ThemeSwitcher';

export default function Navbar() {
    const [dropdown, setDropdown] = useState(false);
    return (
        <nav id="navbar" className="gap-10 items-center sticky top-0 z-1000 flex border-b-3 border-border justify-between pb-3 pt-3 bg-background text-center">
          <h1 className="ml-8 text-text text-[36px] font-bold"><a href="/">Dulakgg</a></h1>
          <motion.a
          initial={{ scale: 0 }} animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="/mods" className='hidden content-center-safe lg:block bg-button hover:bg-button-hover rounded p-4 text-highlight'>My mods</motion.a>
          <motion.a
          initial={{ scale: 0 }} animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="/support" className='hidden content-center-safe lg:block bg-button hover:bg-button-hover rounded p-4 text-highlight'>Support Me</motion.a>
          <motion.a
          initial={{ scale: 0 }} animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="/contact" className='mr-8 hidden content-center-safe lg:block bg-button hover:bg-button-hover rounded p-4 text-highlight'>Contact Me</motion.a>
          <div className="hidden lg:flex mr-6">
            <ThemeSwitcher />
          </div>
          <motion.button 
          initial={{ scale: 0 }} animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setDropdown(!dropdown)} className='lg:hidden md:inline sm:inline lg:invisible p-3 mr-5 bg-button hover:bg-button-hover rounded text-highlight'>
            {dropdown ? <IoMdClose /> : <IoMenu /> }
          </motion.button>
          {dropdown && (
            <div className="lg:hidden justify-center flex-wrap text-center border-3 border-border bg-background p-2 h-auto absolute top-full right-5 mt-2 w-[50%] shadow-lg rounded-md transition-all duration-300 ease-in-out z-50 flex">
              <a href="/mods" className='text-highlight mb-3 p-2 w-75 bg-button hover:bg-button-hover rounded'>My mods</a>
              <a href="/support" className='text-highlight mb-3 w-75 p-2 bg-button hover:bg-button-hover rounded'>Support Me</a>
              <a href="/contact" className='text-highlight mb-3 w-75 p-2 bg-button hover:bg-button-hover rounded'>Contact Me</a>
              <div className="mb-1 flex justify-center w-full">
                <ThemeSwitcher />
              </div>
            </div>
          )}
      </nav>
    )
}