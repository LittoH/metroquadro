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
                <section className={styles.postHeroContent}>
                    <div className={styles.customContainer}>
                        <h1>Sono dentro alla pagina di uno specifico immobile</h1>
                        <h1>Titolo: {immobile.titolo}</h1>
                        <h1>Prezzo: {immobile.prezzo}</h1>
                        <h1>Numero locali: {immobile.locali}</h1>
                        <h1>Metriquadri: {immobile.metriquadri}</h1>
                        <h1>Bagni: {immobile.bagni}</h1>
                        <h1>Piani: {immobile.piani}</h1>
                        <h1>Annuncio: {immobile.annuncio}</h1>
                        <h1>Descrizione: {immobile.descrizione}</h1>
                        <h1>Certificazione energetica: {immobile.certificazione_energetica}</h1>
                    </div>
                </section>
            </main>
        </div>
        
    );
}