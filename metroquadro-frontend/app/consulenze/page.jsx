import styles from '../../styles/Vendi.module.css'
import ScrollUp from '../scrollUp'
import Herosection from '../herosection'
//import { text } from 'stream/consumers'

export default function ConsulenzePage() {
    return (
        <>
            <ScrollUp />
            <div className={styles.container}>
                <Herosection pageName={"consulenze"} />
                <main className={styles.main}>
                    <section className={styles.pageContent}>
                        <div className={styles.contentItemsContainer}>
                            <div className={styles.contentItem} style={{ marginBottom: "100px" }}>
                                <h1>Consulenze personalizzate per mutui e affitti</h1>
                                <p className={styles.justifiedText}>
                                    Sei interessato a comprare o affittare un immobile ma non sai se la tua disponibilità economica te lo concede? 
                                    Per i nostri clienti offriamo un servizio di consulenza gratuita per analizzare la tua condizione economica in completo rispetto della privacy e trovare assieme il migliore compromesso per le tue necessità. <br></br><br></br>
                                    Contattaci alla mail che segue per prendere appuntamento presso il nostro ufficio e pianificare una consulenza.
                                    Ti preghiamo di inserire nell&apos;oggetto della mail [CONSULENZA] per aiutarci a meglio riconoscere la richiesta.<br></br>
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
