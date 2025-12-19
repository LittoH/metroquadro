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
                        <div className={styles.sectionTitleContainer}>
                            <h2 className={`${styles.servicesTitle} ${styles.darkTitle}`}>Novità</h2>
                            <div className={`${styles.titleUnderline} ${styles.darkUnderline}`}></div>
                        </div>
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
                    <div className={styles.greenWrapperProperties} style={{ backgroundImage: "linear-gradient(135deg, rgb(55, 103, 72) 0%, var(--mqGreen) 50%, rgb(65, 115, 82) 100%)" }}>
                        <div className={styles.customContainer}>
                            <div className={styles.sectionTitleContainer}>
                                <h2 className={styles.servicesTitle}>I Nostri Servizi</h2>
                                <div className={styles.titleUnderline}></div>
                            </div>
                            <FadeInWhenVisible>
                                <div className={styles.multicardContainer}>
                                    <div className={`${styles.smallCard} ${styles.cardDelay1}`}>
                                        <div className={styles.cardIconContainer}>
                                            <svg className={styles.cardIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <h1 className={styles.cardTitle}>Compra e Affitta</h1>
                                        <div className={styles.cardDivider}></div>
                                        <p className={styles.smallCardParagraph}>
                                            Sfoglia il catalogo degli immobili attualmente in vendita e in affitto, curato con immagini e planimetrie.
                                        </p>
                                        <Link href="./immobili">
                                            <div className={styles.cardButton}>
                                                <span>Sfoglia</span>
                                                <svg className={styles.buttonArrow} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </Link>
                                    </div>

                                    <div className={`${styles.smallCard} ${styles.cardDelay2}`}>
                                        <div className={styles.cardIconContainer}>
                                            <svg className={styles.cardIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <h1 className={styles.cardTitle}>Vendi</h1>
                                        <div className={styles.cardDivider}></div>
                                        <p className={styles.smallCardParagraph}>
                                            Affidati a noi per vendere il tuo immobile con la migliore esposizione che possiamo garantire.
                                        </p>
                                        <Link href="./vendi">
                                            <div className={styles.cardButton}>
                                                <span>Contattaci</span>
                                                <svg className={styles.buttonArrow} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </Link>
                                    </div>

                                    <div className={`${styles.smallCard} ${styles.cardDelay3}`}>
                                        <div className={styles.cardIconContainer}>
                                            <svg className={styles.cardIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M9 9H15M9 13H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <h1 className={styles.cardTitle}>Consulenze</h1>
                                        <div className={styles.cardDivider}></div>
                                        <p className={styles.smallCardParagraph}>
                                            Ricevi gratuitamente una consulenza finanziaria gratuita per accedere all&apos;acquisto di un immobile.
                                        </p>
                                        <Link href="./consulenze">
                                            <div className={styles.cardButton}>
                                                <span>Prenota</span>
                                                <svg className={styles.buttonArrow} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
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
                                        passedDownFunction={"navigate-to-contacts"}
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
                                            <div id="contattaci" className={styles.agenziaSectionItemContactUs}>
                                                <h1>Contattaci</h1>
                                                <div className={styles.sedeSectionContainer}>
                                                    <div className={styles.sedeOrariSection}>
                                                        <p>
                                                            Usa uno dei metodi che segue per contattarci, risponderemo quanto prima.<br />
                                                        </p>
                                                        <p style={{ marginBottom: "90px" }} >
                                                            <em>Per favore abbi cura di rispettare gli orari di apertura dell&apos;agenzia qualora decidessi di contattarci telefonicamente.</em>
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

                                            <Link href="https://www.instagram.com/agenziametroquadro" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                                <div className={styles.agenziaSectionItemSocial}>
                                                    <h1>Social</h1>
                                                    <div className={styles.sedeSectionContainerSocial}>
                                                        <div className={styles.sedeSocialSection}>
                                                            <p>
                                                                Siamo presenti su Instagram con i <strong>Tour di 90 secondi</strong>, un formato di video in cui in 90 secondi presentiamo le case in vendita e in affitto in maniera approfondita.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className={styles.socialScreenshotsWrapper}>
                                                        <div className={`${styles.socialScreenshotItem} ${styles.screen1}`}>
                                                            <Image src="/screen_1.png" alt="Instagram Tour 1" width={160} height={320} className={styles.socialScreenshot} />
                                                        </div>
                                                        <div className={`${styles.socialScreenshotItem} ${styles.screen2}`}>
                                                            <Image src="/screen_2.png" alt="Instagram Tour 2" width={160} height={320} className={styles.socialScreenshot} />
                                                        </div>
                                                        <div className={`${styles.socialScreenshotItem} ${styles.screen3}`}>
                                                            <Image src="/screen_3.png" alt="Instagram Tour 3" width={160} height={320} className={styles.socialScreenshot} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
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