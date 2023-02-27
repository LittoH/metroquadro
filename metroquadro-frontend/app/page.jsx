import styles from '../styles/Home.module.css'
import Herosection from './herosection' 
import FeaturedHouseContainer from './featuredhousecontainer'
import CustomButton from './customButton'
import { useRouter } from 'next/navigation'

export default function Home() {

    //const router = useRouter();

    return(
        <div className={styles.container}>
            <main className={styles.main}>
                <Herosection />
                <section className={styles.postHeroContent}>
                    <div className={styles.customContainer} style={{width: "90%"}}>
                        <h1 className={styles.featuredHouseSectionTitle}>In evidenza</h1>
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
                    <div className={styles.greenWrapperProperties} style={{backgroundImage: "linear-gradient(to top, rgb(55, 103, 72), var(--mqGreen))"}}>
                        <div className={styles.customContainer}>
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

                            <div className={styles.postCardsSection}>
                                <div className={styles.postCardsContent}>
                                    <p>
                                        La nostra copertura del territorio varia da caso a caso, ma prevalente trattiamo di case in vendita e in affitto nel territorio di Ostiglia, Revere, Correggioli, Melara, Serravalle a Po e tutte le zone limitrofe.
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

                        </div>
                    </div>
                </section>

                <section className={styles.aboutUsSection}>
                <div className={styles.greyWrapperProperties}>
                    <div className={styles.customContainer}>
                        <div className={styles.greenBubble}>
                            <h1>La nostra sede di Ostiglia</h1>
                            <p>
                                L'Agenzia Immobiliare Metroquadro è situata nel centro di Ostiglia MN in Via Vittorio Veneto 6.
                                Siamo aperti dal lunedì al sabato, dalle 09:00 alle 12:30 e dalle 15:30 alle 18:30. È caldamnete consigliato fissare un appuntamento per essere certi di trovarci in agenzia.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin commodo lectus orci, vitae tincidunt augue tincidunt at. Praesent a placerat nunc. Quisque vitae accumsan lacus. Ut finibus risus lacus, eget fringilla massa tempor at. Mauris in libero dolor. Etiam cursus, arcu vel vestibulum cursus, ex sapien vehicula tellus, dignissim consequat sem augue sit amet neque. Pellentesque auctor eu orci et porttitor. Duis at ipsum nec tortor mattis scelerisque a sed massa. Cras congue fringilla volutpat. Aliquam aliquam, lacus et eleifend euismod, tortor ipsum imperdiet ex, sit amet interdum elit neque nec augue. Mauris malesuada elit tincidunt, porta lorem sit amet, tristique augue.

                                Praesent vitae odio et massa suscipit posuere. In commodo dui non sapien accumsan commodo. Sed eget metus quis urna pellentesque fermentum non ac quam. Nam non finibus ex. Sed convallis lacinia diam sit amet fermentum. Nullam sed urna vel velit rhoncus egestas nec id tellus. Pellentesque interdum tristique elit, vel tincidunt lacus sollicitudin in. Vestibulum quis laoreet augue, in lobortis tortor. Ut lorem eros, efficitur in libero et, dapibus iaculis dui. Mauris lorem ex, viverra quis hendrerit ac, fringilla in ex. Integer sed tincidunt dui, quis lobortis odio. Donec quis iaculis ipsum.
                            </p>
                        </div>
                    </div>
                    <img src="ill_3.png" className={styles.ditone} />
                </div>
                </section>

                <section>
                <div className={styles.contactUsTwoSquaresWrapper}>
                    <div className={`${styles.squareContainer} ${styles.leftContactUsSquare}`}>
                    </div>

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
                        <input type="text" id="messaggio" name="messaggio" style={{height: "200px"}} /><br />
                        <button type="submit">Invia</button>
                    </form>
                    </div>
                </div>
                </section>

                <section>
                <div className={styles.greyWrapperProperties}>
                    <div className={styles.customContainer}>
                    <div className={styles.greenBubble2}>
                        <h1>Resta aggiornato con i nostri Social</h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin commodo lectus orci, vitae tincidunt augue tincidunt at. Praesent a placerat nunc. Quisque vitae accumsan lacus. Ut finibus risus lacus, eget fringilla massa tempor at. Mauris in libero dolor. Etiam cursus, arcu vel vestibulum cursus, ex sapien vehicula tellus, dignissim consequat sem augue sit amet neque. Pellentesque auctor eu orci et porttitor. Duis at ipsum nec tortor mattis scelerisque a sed massa. Cras congue fringilla volutpat. Aliquam aliquam, lacus et eleifend euismod, tortor ipsum imperdiet ex, sit amet interdum elit neque nec augue. Mauris malesuada elit tincidunt, porta lorem sit amet, tristique augue.

                        Praesent vitae odio et massa suscipit posuere. In commodo dui non sapien accumsan commodo. Sed eget metus quis urna pellentesque fermentum non ac quam. Nam non finibus ex. Sed convallis lacinia diam sit amet fermentum. Nullam sed urna vel velit rhoncus egestas nec id tellus. Pellentesque interdum tristique elit, vel tincidunt lacus sollicitudin in. Vestibulum quis laoreet augue, in lobortis tortor. Ut lorem eros, efficitur in libero et, dapibus iaculis dui. Mauris lorem ex, viverra quis hendrerit ac, fringilla in ex. Integer sed tincidunt dui, quis lobortis odio. Donec quis iaculis ipsum.
                        </p>
                    </div>
                    </div>
                    <img src="ill_7.png" className={styles.renderNostraSede} />
                </div>
                </section>

            </main>
        </div>
    )
}