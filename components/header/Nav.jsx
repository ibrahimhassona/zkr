import { useLocale } from 'next-intl';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import DeskTopNavBar from './DeskTopNavBar';

const links = [
    { href: '/endPray', label: 'خَتْمُ الصَّلَاةِ' },
    { href: '/', label: 'تَعْلِيمُ الصَّلَاةِ' },
    { href: '/', label: 'سُنَنٌ مُؤَكَّدَةٌ' },
    { href: '/', label: 'مَوَاقِيتُ الصَّلَاةِ' },
];
const Nav = () => {


    // ====== Condition Active Link ======

    return (
        <>
            <DeskTopNavBar links={links} />
        </>
    )
}

export default Nav;