'use client';

import styles from '../styles/CustomButton.module.css'
import Link from 'next/link'

export default function CustomButton({ text, path, theme, passedDownFunction = "no-function"}) {

    let parsedTheme = "featuredHouseButtonLight";

    if (theme == "dark") {
        parsedTheme = "featuredHouseButtonDark";
    }

    function NavigateToContacts() {
        if (passedDownFunction == "navigate-to-contacts") {
            document.getElementById('contattaci').scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <Link href={path} onClick={NavigateToContacts}>
            <div className={styles[`${parsedTheme}`]}>
                <h3>{text}</h3>
            </div>
        </Link>
    );
}