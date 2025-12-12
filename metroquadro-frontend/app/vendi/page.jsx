import styles from '../../styles/Vendi.module.css'
import ScrollUp from '../scrollUp'
import Herosection from '../herosection'

export default function VendiPage() {
    return (
        <>
            <ScrollUp />
            <div className={styles.container}>
                <Herosection pageName={"vendi"} />
                <main className={styles.main}>
                    <section className={styles.pageContent}>
                        <div className={styles.contentItemsContainer}>
                            <div className={styles.contentItem} style={{ marginBottom: "100px" }}>
                                <h1>Vendi o metti in affitto il tuo immobile attraverso la nostra agenzia</h1>
                                <p>
                                    Se sei interessato a vendere o mettere il tuo immobile in affitto attraverso la nostra agenzia, contattaci alla mail che segue. Ti preghiamo di inserire nell&apos;oggetto della mail [VENDITA] o [AFFITTO] seguito dalla tipologia dell&apos;immobile.<br></br>
                                    Ti chiediamo inoltre di segnalare nel corpo della mail quanti più dettagli possibile per aiutarci nel processo di identificazione dell&apos;immobile.<br></br>
                                    Sarai successivamente ricontattato direttamente alla mail che hai utilizzato per contattarci o al numero di telefono che lascerai. <br></br> <br></br><br></br>
                                    <a style={{ textDecoration: "underline" }} href="mailto:info@metroquadroimmobili.it">info@metroquadroimmobili.it</a>
                                </p>
                            </div>
                            <div className={styles.contentItem} >
                                <h1>Contattaci al numero di telefono</h1>
                                <p>
                                    Per contattarci telefonicamente, puoi farlo al numero che segue. Ti chiediamo solamente la cortesia di sfruttare i momenti di apertura dell&apos;agenzia.<br></br> <br></br><br></br>
                                    <a style={{ textDecoration: "underline" }} href="tel:+393408960518">+39 3408960518</a>
                                </p>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}
