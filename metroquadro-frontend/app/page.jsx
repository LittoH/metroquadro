import styles from '../styles/Home.module.css'
import Herosection from './herosection'
import FeaturedHouseContainer from './featuredhousecontainer'
import CustomButton from './customButton'
import Image from 'next/image'
import { FadeInWhenVisible } from './fade-in-when-visible'
import Link from 'next/link'
import ScrollUp from './scrollUp'

export default function Home() {

    return (
        <div className={styles.container}>
            <ScrollUp />
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
                                        <Link href="./immobili">
                                            <div className={styles.cardButton}>
                                                COMPRA
                                            </div>
                                        </Link>
                                    </div>

                                    <div className={styles.smallCard}>
                                        <h1>Affitta</h1>
                                        <p>
                                            Sfoglia il catalogo in costante aggiornamento degli immobili attualmente disponibili per l'affitto.
                                        </p>
                                        <Link href="./immobili">
                                            <div className={styles.cardButton}>
                                                AFFITTA
                                            </div>
                                        </Link>
                                    </div>

                                    <div className={styles.smallCard}>
                                        <h1>Vendi</h1>
                                        <p>
                                            Affidati a noi per vendere il tuo immobile con la migliore esposizione che possiamo garantire.
                                        </p>
                                        <Link href="./vendi">
                                            <div className={styles.cardButton}>
                                                VENDI
                                            </div>
                                        </Link>
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
                    <div className={styles.customContainer} style={{ width: "90%" }}>
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

                                            <div className={styles.agenziaSectionItem} id="agenzia">
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
                                                            <div className={styles.orarioItem} style={{ border: "0" }}>
                                                                <p>Sabato</p>
                                                                <p>09:00 - 12:30 | 15:30 - 18:30</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.agenziaSectionContainerLeftPartRow}>
                                            <div id="contattaci" className={styles.agenziaSectionItemContactUs}>
                                                <h1>Contattaci</h1>
                                                <div className={styles.sedeSectionContainer}>
                                                    <div className={styles.sedeOrariSection}>
                                                        <p>
                                                            Usa uno dei metodi che segue per contattarci, risponderemo quanto prima.<br />
                                                        </p>
                                                        <p style={{ marginBottom: "90px"}} >
                                                            <em>Per favore abbi cura di rispettare gli orari di apertura dell'agenzia qualora decidessi di contattarci telefonicamente.</em>
                                                        </p>
                                                        <a href="mailto:info@metroquadroimmobili.it">
                                                            <div className={styles.contactsMethodRow} style={{ borderBottom: "solid #fff 1px" }}>
                                                                <Image className={styles.contactMethodIcon} src="/send-mail.svg" width={25} height={25} />
                                                                <h1 className={styles.contactMethodItem}>info@metroquadroimmobili.it</h1>
                                                            </div>
                                                        </a>
                                                        <a href="tel:+393408960518">
                                                            <div className={styles.contactsMethodRowBgVariant}>
                                                                <Image className={styles.contactMethodIcon} src="/phone.svg" width={25} height={25} />
                                                                <h1 className={styles.contactMethodItem}>+39 3408960518</h1>
                                                            </div>
                                                        </a>
                                                        {/* UTILIZZO TEMPORANEAMENTE SOSPESO
                                                <p>Usa il form che segue per contattarci, oppure scrivici a <a style={{ textDecoration: "underline" }} href="mailto:info@metroquadroimmobili.it">info@metroquadroimmobili.it</a>. Sarai ricontattato al più presto.</p>
                                                <form className={styles.formContactUs} name="contact" data-netlify="true" method="POST" onSubmit="submit">
                                                    <input type="hidden" name="form-name" value="contact" />
                                                        <div className={styles.formsFieldContainer}>
                                                            <div className={styles.formsFieldColumn}>
                                                                <label htmlFor="mail">Mail</label>
                                                                <input required type="email" id="email" name="email" placeholder='Email' />
                                                                <label htmlFor="numTelefono">Telefono</label>
                                                                <input required type="text" id="numTelefono" name="numTelefono" placeholder='Telefono' />
                                                                <label htmlFor="nome">Nome</label>
                                                                <input required type="text" id="nome" name="nome" placeholder='Nome' />
                                                                <label htmlFor="cognome">Cognome</label>
                                                                <input required type="text" id="cognome" name="cognome" placeholder='Cognome' />
                                                                <label htmlFor="messaggio">Inserisci qui il tuo messaggio</label>
                                                                <textarea required id="messaggio" name="messaggio" rows="20" style={{ resize: "none", borderRadius: "5px", marginTop: "10px" }}></textarea>
                                                                <div className={styles.consensusCheckboxContainer}>
                                                                    <input required type="checkbox" id="consenso" name="consenso" />
                                                                    <label style={{ fontSize: "12pt" }} htmlFor="consenso">Ho preso visione dell'<Link style={{ textDecoration: "underline" }} href="/privacy">informativa sul trattamento dei dati</Link>.</label>
                                                                </div>
                                                                <button type="submit">Invia</button>
                                                            </div>
                                                        </div>
                                                </form>
                                                */}
                                                    </div>
                                                </div>
                                            </div>

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
                                </div>
                            </FadeInWhenVisible>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}