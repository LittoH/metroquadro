'use client';

import styles from '../styles/Navbar.module.css'
import Navlink from './navlink'
import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion, useAnimationControls } from "framer-motion";

export default function Navbar() {

    const router = useRouter();
    const controls = useAnimationControls()

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

    function OpenMenu() {
        controls.start({
                left : "0vw",
                transition: { duration: .3},
            });
    }

    function CloseMenu() {
        controls.start({
            left : "100vw",
            transition: { duration: .3 },
        });
    }

    return (
        <>
        <div id="navbarContainer" className={styles.container}>
            <div className={styles.customContainer}>
                <Link href="/" onClick={() => router.reload()}>
                    <div className={styles.navbarSectionLogo}>
                        <img className={styles.logo} src="/logo7.png" />
                    </div>
                </Link>
                <div className={styles.navbarSection}>
                    <Navlink theme="desktop" title="COMPRA" path="./immobili"/>
                    <Navlink theme="desktop" title="AFFITTA" path="./immobili"/>
                    <Navlink theme="desktop" title="VENDI" path="./"/>
                    <Navlink theme="desktop" title="AGENZIA" path="./"/>
                </div>
                <div className={styles.navbarSectionMobile}>
                    <Image
                        src="/menu-burger.svg"
                        alt="burger menu"
                        width={30}
                        height={30}
                        onClick={() => OpenMenu()}
                    />
                </div>
            </div>
        </div>

        <motion.div animate={controls} className={styles.mobileMenu}>
            <div className={styles.crossButtonContainer}>
                <Image
                    src="/cross.svg"
                    alt="cross button"
                    width={30}
                    height={30}
                    onClick={() => CloseMenu()}
                />
            </div>
            <Navlink theme="mobile" passedDownFunction={CloseMenu} title="COMPRA" path="./immobili"/>
            <Navlink theme="mobile" passedDownFunction={CloseMenu} title="AFFITTA" path="./immobili"/>
            <Navlink theme="mobile" passedDownFunction={CloseMenu} title="VENDI" path="./"/>
            <Navlink theme="mobile" passedDownFunction={CloseMenu} title="AGENZIA" path="./"/>
        </motion.div>
        </>
    );
};