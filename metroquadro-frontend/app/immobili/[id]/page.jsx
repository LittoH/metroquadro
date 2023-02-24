import styles from '../../../styles/Immobile.module.css';

async function getImmobile(immobileId) {
    const res = await fetch(`https://metroquadro-backend-production.up.railway.app/api/collections/immobili_vendita/records/${immobileId}`);

    const data = await res.json();
    return data;
}

export default async function ImmobilePage({ params }) {
    const immobile = await getImmobile(params.id);

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <section className={styles.houseInfoSection}>
                    <div className={styles.customContainer}>
                        <div className={styles.housePhotosCarousel}></div>
                        <div className={styles.houseDetailItem}><h1>Titolo:</h1><h3>{immobile.titolo}</h3></div>
                        <div className={styles.houseDetailItem}><h1>Prezzo:</h1><h3>{immobile.prezzo}</h3></div>
                        <div className={styles.houseDetailItem}><h1>Numero locali:</h1><h3>{immobile.locali}</h3></div>
                        <div className={styles.houseDetailItem}><h1>Metriquadri:</h1><h3>{immobile.metriquadri}</h3></div>
                        <div className={styles.houseDetailItem}><h1>Bagni:</h1><h3>{immobile.bagni}</h3></div>
                        <div className={styles.houseDetailItem}><h1>Piani:</h1><h3>{immobile.piani}</h3></div>
                        <div className={styles.houseDetailItem}><h1>Annuncio:</h1><h3>{immobile.annuncio}</h3></div>
                        <div className={styles.houseDetailItem}><h1>Descrizione:</h1><h3>{immobile.descrizione}</h3></div>
                        <div className={styles.houseDetailItem}><h1>Certificazione energetica:</h1><h3>{immobile.certificazione_energetica}</h3></div>
                    </div>
                </section>
            </main>
        </div>
        
    );
}