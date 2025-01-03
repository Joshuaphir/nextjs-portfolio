"use client"
import Link from 'next/link'
import React, {useState} from 'react'
import NavLink from './NavLink'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid'
import MenuOverLay from './MenuOverLay'



const navLinks = [
    {
        title:"About",
        path:"#bout",
    },
    {
        title:"Projects",
        path:"#projects",
    },
    {
        title:"Contacts",
        path:"#contacts"
    }
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <nav className='fixed top-0 left-0 container mx-auto right-0 bg-[#2E5077] bg-opacity-100 z-10'>
        <div className='flex flex-wrap items-center justify-between mx-auto px-8 py-4'>
            <Link href={"/"} className='text-3xl md:text-5xl text-white font-semibold'>Logo</Link>
            <div className='mobile-menu block md:hidden'>
                {
                    !navbarOpen ? (
                        <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded
                         border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                            <Bars3Icon className='h-5 w-5' />
                        </button>
                    ):(
                        <button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded
                         border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                            <XMarkIcon className='h-5 w-5' />
                        </button>
                    )
                }
            </div>
            <div className='menu hidden md:block md:w-auto' id='navbar'>
                <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                    {
                        navLinks.map((link, index) => (
                        <li key={index}>
                            <NavLink href={link.path} title={link.title}/>
                        </li>
                        ))
                    }
                </ul>
            </div>
        </div>
        {navbarOpen ? <MenuOverLay links={navLinks}/> : null}
    </nav>
  )
}

export default Navbar