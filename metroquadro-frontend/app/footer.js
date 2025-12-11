import styles from '../styles/Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.greenWrapperProperties}>
                <div className={styles.customContainer}>
                    <div className={styles.footerColumnItem}>
                        <p>© 2026 MetroquadroImmobili.it | P. IVA 02636330207 | <Link className={styles.footerTextLink} href="/privacy">Condizioni Generali, Regole della Privacy e Uso dei Cookie</Link></p>
                    </div>
                    <div className={styles.footerColumnItem}>
                        {/** 
                        <Link href="/">
                            <Image className={styles.social} src="/tik-tok.svg" width={20} height={20} alt="Tik-Tok logo" />
                        </Link>
                        */}
                        <Link href="https://www.instagram.com/agenziametroquadro/">
                            <Image style={{marginTop: "15px"}} className={styles.social} src="/instagram.svg" width={20} height={20} alt="Instagram logo" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}