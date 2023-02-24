import styles from '../../../styles/Immobile.module.css';

async function getImmobile(immobileId) {
    const res = await fetch(`https://metroquadro-backend-production.up.railway.app/api/collections/immobili_vendita/records/${immobileId}`);

    const data = await res.json();
    return data;
}

export default async function ImmobilePage({ params }) {
    const immobile = await getImmobile(params.id);

    const imgSrc = immobile.immagine;
    const imgSrcFromServer = "https://metroquadro-backend-production.up.railway.app/api/files/izz8qgmd4pz2olq/" + params.id + "/";
    const imgPath = "url(" + imgSrcFromServer + imgSrc + ")";

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <section className={styles.houseInfoSection}>
                    <div className={styles.customContainer}>
                        <div className={styles.housePhotosCarousel} style={{backgroundImage: imgPath }}></div>

                        <div className={styles.houseInfoOuterBriefDetailsContainer}>
                            <div className={styles.houseInfoInnerBriefDetailsContainer} style={{paddingRight: "30px"}}>
                                <div className={styles.houseDetailItem}><h3>Immobile</h3><p>{immobile.titolo}</p></div>
                                <div className={styles.houseDetailItem}><h3>Prezzo</h3><p>{immobile.prezzo}</p></div>
                                <div className={styles.houseDetailItem}><h3>Numero locali</h3><p>{immobile.locali}</p></div>
                                <div className={styles.houseDetailItem}><h3>Indirizzo(NOT_DB)</h3><p>Ostiglia, Strada test 123, 1A</p></div>
                                <div className={styles.houseDetailItem}><h3>Item non definito</h3><p>test test test</p></div>
                            </div>

                            <div className={styles.houseInfoInnerBriefDetailsContainer} style={{paddingLeft: "30px"}}>
                                <div className={styles.houseDetailItem}><h3>Metriquadri:</h3><p>{immobile.metriquadri}</p></div>
                                <div className={styles.houseDetailItem}><h3>Bagni:</h3><p>{immobile.bagni}</p></div>
                                <div className={styles.houseDetailItem}><h3>Piani:</h3><p>{immobile.piani}</p></div>
                                <div className={styles.houseDetailItem}><h3>Certificazione energetica:</h3><p>{immobile.certificazione_energetica}</p></div>
                                <div className={styles.houseDetailItem}><h3>Item non definito: </h3><p>test test test</p></div>
                            </div>
                        </div>

                        <div className={styles.houseBigDetailItem}><h3>Annuncio</h3><p>{immobile.annuncio}</p></div>
                        <div className={styles.houseBigDetailItem}><h3>Descrizione</h3><p>{immobile.descrizione}</p></div>
                        
                    </div>
                </section>
            </main>
        </div>
        
    );
}