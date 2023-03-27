import styles from '../styles/Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.greenWrapperProperties}>
                <div className={styles.customContainer}>
                    <div className={styles.footerColumnItem}>
                        <p>© 2023 Metroquadro.it | P. IVA 00000000000 | <Link className={styles.footerTextLink} href="/">Condizioni Generali</Link>, <Link className={styles.footerTextLink} href="/">Regole della Privacy</Link> e <Link className={styles.footerTextLink} href="/">Uso dei Cookie</Link></p>
                    </div>
                    <div className={styles.footerColumnItem}>
                        <Link href="/">
                            <Image className={styles.social} src="/tik-tok.svg" width={20} height={20} alt="Tik-Tok logo" />
                        </Link>
                        <Link href="/">
                            <Image className={styles.social} src="/instagram.svg" width={20} height={20} alt="Instagram logo" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

/* 
<p>Via Vittorio Veneto, 6, 46035 Ostiglia MN</p>
<p>+393408960518</p>
<p>info@metroquadroostiglia.it</p>
<p>Agenzia Immobiliare Metroquadro Ostiglia</p>
<p>P.IVA 00000000000000000000000000</p>
*/