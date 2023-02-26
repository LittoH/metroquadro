'use client';

import styles from '../styles/Navbar.module.css'
import Navlink from './navlink'
import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';

export default function Navbar() {

    const router = useRouter();

    // Parte necessaria per il cambio di sfondo della navbar
    const debounce = (fn) => {
        let frame;
        return (...params) => {
            if (frame) { 
                cancelAnimationFrame(frame);
            }
            frame = requestAnimationFrame(() => {
                fn(...params);
            });
        } 
    };
  
    const storeScroll = () => {
        document.documentElement.dataset.scroll = window.scrollY;
    }

    useEffect(() => {
        document.addEventListener('scroll', debounce(storeScroll), { passive: true });
        storeScroll();
    });

    // Fine parte necessaria per il cambio di sfondo della navbar

    return (
        <div id="navbarContainer" className={styles.container}>
            <div className={styles.customContainer}>
                <Link href="/" onClick={() => router.reload()}>
                    <div className={styles.navbarSectionLogo}>
                        <img className={styles.logo} src="logo7.png" />
                    </div>
                </Link>
                <div className={styles.navbarSection}>
                    <Navlink title="COMPRA" path="./immobili"/>
                    <Navlink title="AFFITTA" path="./immobili"/>
                    <Navlink title="VENDI" path="./"/>
                    <Navlink title="SEDE OSTIGLIA" path="./"/>
                </div>
            </div>
        </div>
    );
};