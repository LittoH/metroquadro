//'use client';

import { useRouter } from 'next/router';
import styles from '../styles/Navbar.module.css';
import { Navlink } from '../components/navlink';
import { useEffect } from 'react';

export const Navbar = () => {

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
                <div className={styles.navbarSection}>
                    <img className={styles.logo} src="logo7.png" />
                </div>
                <div className={styles.navbarSection}>
                    <Navlink title="CASE" path=""/>
                    <Navlink title="VENDI" path=""/>
                    <Navlink title="COMPRA" path=""/>
                    <Navlink title="AFFITTA" path=""/>
                </div>
            </div>
        </div>
    );
};