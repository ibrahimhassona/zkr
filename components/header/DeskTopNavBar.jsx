"use client"
import { usePathname } from '@/i18n/routing'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const DeskTopNavBar = ({ links }) => {
    const linkStyle = 'cust-trans hover:text-primary'
    const router = usePathname()
    const routerpath = router.split('/'[1])
    console.log("url",router.split('/')[1])
    return (
        <div className=' flex flex-row items-center justify-between container bg-white shadow-sm'>
            {/* ---------- Logo ---------- */}
            <Image
                src="/zkr.png"
                alt="Logo"
                width={70}
                height={70}
                className=' '
            />
            {/* ------- Pages Links -------- */}
            <div className='flex items-center gap-4'>
                {links.map((link, index) => (
                    <Link key={index} href={link.href} className={`${linkStyle} ${routerpath==link.href?'text-primary':''}`}>
                        {link.label}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default DeskTopNavBar