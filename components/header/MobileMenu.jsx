import Link from 'next/link'
import React from 'react'

const MobileMenu = ({ links, routerpath }) => {
    const linkStyle = 'cust-trans hover:text-white hover:bg-primary '
    return (
        <div className=' absolute w-[50%] bg-white h-fit z-20 rounded-sm left-0 top-[75px] cust-trans px-2 py-4 shadow-md animate-flip-up'>
            <div className='flex flex-col gap-2 text-sm'>
            {links.map((link, index) => (
                <Link key={index} href={link.href} className={`cust-trans p-1 rounded-sm ${linkStyle} ${routerpath == link.href ? 'text-white bg-primary ' : 'text-custGray'}`}>
                    {link.label}
                </Link>
            ))}
            </div>
        </div>
    )
}

export default MobileMenu