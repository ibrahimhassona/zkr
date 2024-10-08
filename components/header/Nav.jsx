import { useLocale } from 'next-intl';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import DeskTopNavBar from './DeskTopNavBar';

const links = [
    { href: '/endPray', label: 'خَتْمُ الصَّلَاةِ' },
    { href: '/learnPray', label: 'تَعْلِيمُ الصَّلَاةِ' },
    { href: '/SonanMoakdah', label: 'سُنَنٌ مُؤَكَّدَةٌ' },
    { href: '/prayTimes', label: 'مَوَاقِيتُ الصَّلَاةِ' },
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