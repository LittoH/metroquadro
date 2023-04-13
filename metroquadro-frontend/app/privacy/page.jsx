import styles from '../../styles/Privacy.module.css'
import Herosection from '../herosection'
import ScrollUp from '../scrollUp'

export default function PrivacyPage() {

    return (
        <>
            <ScrollUp />
            <div className={styles.container}>
                <Herosection pageName={"privacy"} />
                <main className={styles.main}>
                    <section className={styles.pageContent}>
                        <div className={styles.contentItemsContainer}>
                            <div className={styles.contentItem}>
                                <h1>Panoramica sulla Privacy</h1>
                                <p>
                                    Questo sito Web utilizza i cookie per consentirci di offrire la migliore esperienza utente possibile. I cookie sono memorizzati nel tuo browser ed eseguono funzioni come riconoscerti quando ritorni sul nostro sito e aiutare il nostro team a capire quali sezioni del sito web trovi più interessanti e utili.
                                </p>
                            </div>
                            <div className={styles.contentItem} style={{ marginBottom: "100px" }}>
                                <h1>Cookies strettamente necessari</h1>
                                <p>
                                    Cookie strettamente necessari devono essere abilitati in ogni momento in modo che possiamo salvare le tue preferenze per le impostazioni dei cookie.
                                </p>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    )


}