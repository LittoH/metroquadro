'use client';

import styles from '../styles/CookiesAlert.module.css'
import { useState } from 'react'
import Link from 'next/link'

export default function CookiesAlert() {

    // Usare la prima riga for debug purposes only, ossia per RESETTARE i cookies
    const [isCookieAgreed, setIsCookieAgreed] = useState(false);
    //const [isCookieAgreed, setIsCookieAgreed] = useState(localStorage.getItem('isCookieAgreed') === 'true');

    function AgreeCookies() {
        setIsCookieAgreed(true);
        //localStorage.setItem('isCookieAgreed', 'true');
    }

    return (
        <>
            {!isCookieAgreed &&
                <div className={styles.cookiesLabelWrapper}>
                    <h3>Questo sito utilizza dei cookies 🍪</h3>
                    <p>
                        Questo sito Web utilizza i cookie per consentirci di offrire la migliore esperienza utente possibile. I cookie sono memorizzati nel tuo browser ed eseguono funzioni come riconoscerti quando ritorni sul nostro sito e aiutare il nostro team a capire quali sezioni del sito web trovi più interessanti e utili.
                    </p>
                    <div className={styles.buttonsContainer}>
                        <div className={styles.cookiesButton} onClick={() => AgreeCookies()}>
                            Accetta tutti i cookie
                        </div>
                        <Link href="/privacy">
                            <div className={styles.cookiesButton}>
                                Leggi la nostra policy
                            </div>
                        </Link>
                    </div>
                </div>
            }
        </>
    )

}