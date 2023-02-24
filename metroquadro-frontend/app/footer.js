import styles from '../styles/Footer.module.css';


export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.greenWrapperProperties}>
                <div className={styles.customContainer}>
                    <h3>Contatti</h3>
                    <p>Via Vittorio Veneto, 6, 46035 Ostiglia MN</p>
                    <p>+393408960518</p>
                    <p>info@metroquadroostiglia.it</p>
                    <p>Agenzia Immobiliare Metroquadro Ostiglia</p>
                    <p>P.IVA 00000000000000000000000000</p>
                </div>
            </div>
        </footer>
    );
}