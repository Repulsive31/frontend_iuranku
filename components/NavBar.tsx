import { nav_links } from '@/constants'
import { link } from 'fs'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav className='border-amber-100 border-b-2 flexBetween max-container padding-container relative z-30 py-5 text-amber-100'>
        <div className='col-span-2 flex items-center justify-between'>
            <div className="flex items-center">
                <h1 className='font-semibold mr-20'>IuranKu</h1>
                <h2 className='font-semibold'>"Easier with Us!"</h2>
            </div>
            <ul className='hidden h-full gap-6 lg:flex items-center justify-end'> 
                {nav_links.map((link) => (
                    <li key={link.key}> 
                        <Link href={link.href} className='regular-16 text-amber-100 cursor-pointer transition-all hover:font-bold'>
                            {link.label}
                        </Link>
                    </li>
                ))} 
            </ul>
        </div>
    </nav>
  )
}

export default NavBar