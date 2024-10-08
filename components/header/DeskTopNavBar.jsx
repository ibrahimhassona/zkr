"use client"
import { usePathname } from '@/i18n/routing'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdOutlineMenuBook } from 'react-icons/md'
import { useState } from 'react'
import MobileMenu from './MobileMenu'
import { CgClose } from "react-icons/cg";

const DeskTopNavBar = ({ links }) => {
    const linkStyle = 'cust-trans hover:text-primary'
    const router = usePathname()
    const [menuState, setMenuState] = useState(false)
    const routerpath = router.split('/'[1])
    console.log("url", router.split('/')[1])
    return (
        <div className=' flex flex-row items-center max-sm:text-xs justify-between cont bg-white  shadow-sm m-auto'>
            {/* ---------- Logo ---------- */}
            <Image
                src="/zkr.png"
                alt="Logo"
                width={70}
                height={70}
                className=' '
            />
            {/* ------- Pages Links -------- */}
            <div className='flex items-center gap-4 max-sm:hidden'>
                {links.map((link, index) => (
                    <Link key={index} href={link.href} className={`${linkStyle} ${routerpath == link.href ? 'text-primary' : 'text-custGray'}`}>
                        {link.label}
                    </Link>
                ))}
            </div>
            {/* ------ Mobile Pages Links ------- */}
            <div className='hidden max-sm:flex' onClick={() => setMenuState(!menuState)}>
                {menuState ? <CgClose size={30} className='text-custGray cust-trans hover:text-primary-dark cursor-pointer animate-flip-up'/>
                    : <MdOutlineMenuBook size={30} className='text-custGray cust-trans hover:text-primary-dark cursor-pointer animate-flip-up' />}
                {menuState && <MobileMenu links={links} routerpath={routerpath} />}
            </div>
        </div>
    )
}

export default DeskTopNavBar