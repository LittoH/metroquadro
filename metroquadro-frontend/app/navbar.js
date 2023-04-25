'use client';

import styles from '../styles/Navbar.module.css'
import Navlink from './navlink'
import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion, useAnimationControls } from "framer-motion";

export default function Navbar() {

    //const router = useRouter();
    const controls = useAnimationControls()

    /*
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
    */

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

    function NavigateToContacts() {
        document.getElementById('contattaci').scrollIntoView({ behavior: 'smooth' });
    }

    function NavigateToAgenzia() {
        document.getElementById('agenzia').scrollIntoView({ behavior: 'smooth' });
    }

    function NavigateToContactsMobile() {
        CloseMenu();
        document.getElementById('contattaci').scrollIntoView({ behavior: 'smooth' });
    }

    function NavigateToAgenziaMobile() {
        CloseMenu();
        document.getElementById('agenzia').scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
        <div id="navbarContainer" className={styles.container}>
            <div className={styles.customContainer}>
                <Link href="/">
                    <div className={styles.navbarSectionLogo}>
                        <Image alt="logo metro quadro" className={styles.logo} src="/logo_test.svg" width={250} height={80.53} />
                    </div>
                </Link>
                <div className={styles.navbarSection}>
                    <Navlink theme="desktop" title="IMMOBILI" path="./immobili"/>
                    <Navlink theme="desktop" title="VENDI" path="./vendi"/>
                    <Navlink theme="desktop" passedDownFunction={NavigateToAgenzia} title="AGENZIA" path="./"/>
                    <Navlink theme="desktop" passedDownFunction={NavigateToContacts} title="CONTATTACI" path="./"/>
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
            <Navlink theme="mobile" passedDownFunction={CloseMenu} title="IMMOBILI" path="./immobili"/>
            <Navlink theme="mobile" passedDownFunction={CloseMenu} title="VENDI" path="./vendi"/>
            <Navlink theme="mobile" passedDownFunction={NavigateToAgenziaMobile} title="AGENZIA" path="./"/>
            <Navlink theme="mobile" passedDownFunction={NavigateToContactsMobile} title="CONTATTACI" path="./"/>
        </motion.div>
        </>
    );
};