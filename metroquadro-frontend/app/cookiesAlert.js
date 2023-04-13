'use client';

import styles from '../styles/CookiesAlert.module.css'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';

export default function CookiesAlert() {

    const router = useRouter();

    // Usare la prima riga for debug purposes only, ossia per RESETTARE i cookies
    const [isCookieAgreed, setIsCookieAgreed] = useState(false);
    //const [isCookieAgreed, setIsCookieAgreed] = useState(localStorage.getItem('isCookieAgreed') === 'true');

    function AgreeCookies() {
        setIsCookieAgreed(true);

        let cookie = `cookies_preferences_agreed=true;`; // definisco la struttura del cookie
        cookie += "path=/;"; // definisco un path in cui inserirò il cookie che sto generando
        cookie += `max-age=${60 * 60 * 24 * 365 // resterà settato per un anno
            }`;

        document.cookie = cookie; // finalmente setto il cookie nel browser

        router.refresh(); // ricarico la pagina una volta settato il cookie
    }

    function ResetCookies() {
        setIsCookieAgreed(false);

        let cookie = `cookies_preferences_agreed=false;`; // definisco la struttura del cookie
        cookie += "path=/;"; // definisco un path in cui inserirò il cookie che sto generando
        cookie += `max-age=${60 * 60 * 24 * 365 // resterà settato per un anno
            }`;

        document.cookie = cookie; // finalmente setto il cookie nel browser

        router.refresh(); // ricarico la pagina una volta settato il cookie
    }

    return (
        <>

            <div className={styles.cookiesLabelWrapper}>
                <h3>Questo sito utilizza dei cookies 🍪</h3>
                <p>
                    Questo sito Web utilizza i cookie per consentirci di offrire la migliore esperienza utente possibile. I cookie sono memorizzati nel tuo browser ed eseguono funzioni come riconoscerti quando ritorni sul nostro sito e aiutare il nostro team a capire quali sezioni del sito web trovi più interessanti e utili.
                </p>
                <div className={styles.buttonsContainer}>
                    <div className={styles.cookiesButton} onClick={() => AgreeCookies()}>
                        Accetta i cookies necessari
                    </div>
                    <Link href="/privacy">
                        <div className={styles.cookiesButton}>
                            Leggi la nostra policy
                        </div>
                    </Link>
                </div>
            </div>

        </>
    )

}