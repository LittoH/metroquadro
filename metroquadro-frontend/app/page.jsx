import styles from '../styles/Home.module.css'
import Herosection from './herosection'
import FeaturedHouseContainer from './featuredhousecontainer'
import CustomButton from './customButton'
import Image from 'next/image'
import { FadeInWhenVisible } from './fade-in-when-visible'
import Link from 'next/link'

export default function Home() {

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <Herosection />
                <section className={styles.postHeroContent}>
                    <div className={styles.customContainer} style={{ width: "90%" }}>
                        <h1 className={styles.featuredHouseSectionTitle}>Novità</h1>
                        <FeaturedHouseContainer />
                        <div className={styles.featuredHouseButtonContainer}>
                            <CustomButton
                                text="Sfoglia tutti gli immobili"
                                path="./immobili"
                                theme="dark"
                            />
                        </div>
                    </div>
                </section>

                <section>
                    <div className={styles.greenWrapperProperties} style={{ backgroundImage: "linear-gradient(to top, rgb(55, 103, 72), var(--mqGreen))" }}>
                        <div className={styles.customContainer}>
                            <FadeInWhenVisible>
                                <div className={styles.multicardContainer}>
                                    <div className={styles.smallCard}>
                                        <h1>Compra</h1>
                                        <p>
                                            Sfoglia il catalogo degli immobili attualmente in vendita curato con immagini e planimetrie.
                                        </p>
                                        <div className={styles.cardButton}>
                                            COMPRA
                                        </div>
                                    </div>

                                    <div className={styles.smallCard}>
                                        <h1>Affitta</h1>
                                        <p>
                                            Sfoglia il catalogo in costante aggiornamento degli immobili attualmente disponibili per l'affitto.
                                        </p>
                                        <div className={styles.cardButton}>
                                            AFFITTA
                                        </div>
                                    </div>

                                    <div className={styles.smallCard}>
                                        <h1>Vendi</h1>
                                        <p>
                                            Affidati alla noi per vendere il tuo immobile con la migliore esposizione che possiamo garantire.
                                        </p>
                                        <div className={styles.cardButton}>
                                            VENDI
                                        </div>
                                    </div>

                                </div>
                            </FadeInWhenVisible>

                            <FadeInWhenVisible>
                                <div className={styles.postCardsSection}>
                                    <div className={styles.postCardsContent}>
                                        <p>
                                            La nostra copertura del territorio varia da caso a caso, ma prevalentemente trattiamo di case in vendita e in affitto nel territorio di Ostiglia, Revere, Correggioli, Melara, Serravalle a Po e tutte le zone limitrofe.
                                        </p>
                                        <p>
                                            Siamo comunque sempre alla ricerca di immobili anche al di fuori delle zone indicate, sia per acquisti, vendite e affitti.
                                        </p>
                                    </div>
                                    <CustomButton
                                        text="Contattaci per altre zone"
                                        path="./"
                                        theme="light"
                                    />
                                </div>
                            </FadeInWhenVisible>
                        </div>
                    </div>
                </section>

                <section className={styles.aboutUsSection}>
                    <div className={styles.customContainer} style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "center" }}>
                        <div className={`${styles.greyWrapperPropertiesWithPattern}`}>
                            <FadeInWhenVisible>
                                <div className={styles.agenziaSectionItemContainer}>
                                    <div className={styles.agenziaSectionItemContainerLeftPart}>
                                        <div className={styles.agenziaSectionContainerLeftPartRow}>
                                            <div className={styles.agenziaSectionItemMap}>
                                                <Link href="https://goo.gl/maps/Sf5iXR2qPoXz2azZ6" rel="noopener noreferrer" target="_blank">
                                                    <div className={styles.sedeSectionContainer}>
                                                        <div className={styles.sedeMapSection}></div>
                                                    </div>
                                                </Link>
                                            </div>

                                            <div className={styles.agenziaSectionItem}>
                                                <h1>Orari apertura agenzia</h1>
                                                <div className={styles.sedeSectionContainer}>
                                                    <div className={styles.sedeOrariSection}>
                                                        <div className={styles.tabellaOrari}>
                                                            <div className={styles.orarioItem}>
                                                                <p>Lunedì</p>
                                                                <p>09:00 - 12:30 | 15:30 - 18:30</p>
                                                            </div>
                                                            <div className={styles.orarioItem}>
                                                                <p>Martedì</p>
                                                                <p>09:00 - 12:30 | 15:30 - 18:30</p>
                                                            </div>
                                                            <div className={styles.orarioItem}>
                                                                <p>Mercoledì</p>
                                                                <p>09:00 - 12:30 | 15:30 - 18:30</p>
                                                            </div>
                                                            <div className={styles.orarioItem}>
                                                                <p>Giovedì</p>
                                                                <p>09:00 - 12:30 | 15:30 - 18:30</p>
                                                            </div>
                                                            <div className={styles.orarioItem}>
                                                                <p>Venerdì</p>
                                                                <p>09:00 - 12:30 | 15:30 - 18:30</p>
                                                            </div>
                                                            <div className={styles.orarioItem}>
                                                                <p>Sabato</p>
                                                                <p>09:00 - 12:30 | 15:30 - 18:30</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.agenziaSectionContainerLeftPartRow}>
                                            <div className={styles.agenziaSectionItemSocial}>
                                                <h1>Social</h1>
                                                <div className={styles.sedeSectionContainerSocial}>
                                                    <div className={styles.sedeSocialSection}>
                                                        <p>
                                                            Seguici sui nostri social per essere tra i primi a scoprire i nuovi immobili a catalogo e per fare tour virtuali con video approfonditi.
                                                        </p>
                                                        <h4>Torna a breve.</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.agenziaSectionItemContactUs}>
                                        <h1>Contattaci</h1>
                                        <div className={styles.sedeSectionContainer}>
                                            <div className={styles.sedeOrariSection}>
                                                <p>Usa il form che segue per contattarci, oppure scrivici a <a style={{ textDecoration: "underline" }} href="mailto:info@metroquadroimmobili.it">info@metroquadroimmobili.it</a>. Sarai ricontattato al più presto.</p>
                                                <form className={styles.formContactUs} name="contactUs" data-netlify="true" method="POST">
                                                    <div className={styles.formsFieldContainer}>
                                                        <div className={styles.formsFieldColumn}>
                                                            <label for="mail">Mail</label>
                                                            <input required type="text" id="mail" name="mail" placeholder='Mail' />
                                                            <label for="numTelefono">Telefono</label>
                                                            <input required type="text" id="numTelefono" name="numTelefono" placeholder='Telefono' />
                                                            <label for="nome">Nome</label>
                                                            <input required type="text" id="nome" name="nome" placeholder='Nome' />
                                                            <label for="cognome">Cognome</label>
                                                            <input required type="text" id="cognome" name="cognome" placeholder='Cognome' />
                                                            <label for="messaggio">Inserisci qui il tuo messaggio</label>
                                                            <textarea required id="messaggio" name="messaggio" rows="20" style={{ resize: "none", borderRadius: "5px", marginTop: "10px" }}></textarea>
                                                            <div className={styles.consensusCheckboxContainer}>
                                                                <input required type="checkbox" id="consenso" name="consenso" />
                                                                <label style={{ fontSize: "12pt" }} for="consenso">Ho preso visione dell'<Link style={{ textDecoration: "underline" }} href="/privacy">informativa sul trattamento dei dati</Link>.</label>
                                                            </div>
                                                            <button type="submit">Invia</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </FadeInWhenVisible>
                            {/* <img src="/ill_3.png" className={styles.ditone} /> */}
                        </div>
                    </div>
                </section>

                {/* 
                <section>
                    <div className={styles.contactUsTwoSquaresWrapper}>
                        <div className={`${styles.squareContainer} ${styles.leftContactUsSquare}`}></div>

                        <div className={`${styles.squareContainer} ${styles.rightContactUsSquare}`}>
                            <h1>Contattaci</h1>
                            <p>Usa il form che segue per contattarci. Risponderemo in tempo record!</p>
                            <form className={styles.formContactUs} name="contactUs" data-netlify="true" method="POST">
                                <label for="mail">Mail</label><br />
                                <input type="text" id="mail" name="mail" /><br />
                                <label for="nome">Nome</label><br />
                                <input type="text" id="nome" name="nome" /><br />
                                <label for="cognome">Cognome</label><br />
                                <input type="text" id="cognome" name="cognome" /><br />
                                <label for="messaggio">Inserisci qui il tuo messaggio</label><br />
                                <input type="text" id="messaggio" name="messaggio" style={{ height: "200px" }} /><br />
                                <button type="submit">Invia</button>
                            </form>
                        </div>
                    </div>
                </section>

                <section>
                    <div className={`${styles.greyWrapperPropertiesWithPattern}`}>
                        <div className={styles.customContainer} style={{ opacity: "1" }}>
                            <div className={styles.greenBubble2}>
                                <h1>Resta aggiornato con i nostri Social</h1>
                                <p>
                                    Per rimanere aggiornato con gli ultimi arrivi di immobili in vendita e in affitto abbiamo da poco lanciato i nostri spazi social ricchi di contenuti audiovisivi per poter fare tour virtuale degli immobili a catalogo.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                */}
            </main>
        </div>
    )
}