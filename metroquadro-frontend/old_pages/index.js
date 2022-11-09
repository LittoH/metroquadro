import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Navbar } from '../components/navbar'
import { Herosection } from '../components/herosection'
import { useRouter } from 'next/router';
import { FeaturedHouseContainer } from '../components/featuredhousecontainer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MetroQuadroOstiglia.it</title>
        <meta name="description" content="Agenzia immoboliare Metro Quadro" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Abyssinica+SIL&family=Roboto:ital,wght@0,900;1,900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <Herosection />

        <section className={styles.postHeroContent}>
          <div className={styles.customContainer} style={{width: "90%"}}>
            <h1 className={styles.featuredHouseSectionTitle}>IN PRIMO PIANO</h1>
            <FeaturedHouseContainer />
          </div>
        </section>

        <section>
          <div className={styles.greenWrapperProperties}>
            <div className={styles.customContainer}>
              <div className={styles.multicardContainer}>
                <div className={styles.smallCard}>
                    <h1>Compra</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin commodo lectus orci, vitae tincidunt augue tincidunt at. Praesent a placerat nunc. Quisque vitae accumsan lacus. 
                    </p>
                    <div className={styles.cardButton}>
                      COMPRA
                    </div>
                </div>

                <div className={styles.smallCard}>
                    <h1>Vendi</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin commodo lectus orci, vitae tincidunt augue tincidunt at. Praesent a placerat nunc. Quisque vitae accumsan lacus.
                    </p>
                    <div className={styles.cardButton}>
                      VENDI
                    </div>
                </div>

                <div className={styles.smallCard}>
                    <h1>Affitta</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin commodo lectus orci, vitae tincidunt augue tincidunt at. Praesent a placerat nunc. Quisque vitae accumsan lacus.
                    </p>
                    <div className={styles.cardButton}>
                      AFFITTA
                    </div>
                </div>
              </div>

              <div className={styles.postCardsSection}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin commodo lectus orci, vitae tincidunt augue tincidunt at. Praesent a placerat nunc. Quisque vitae accumsan lacus. Ut finibus risus lacus, eget fringilla massa tempor at. Mauris in libero dolor. Etiam cursus, arcu vel vestibulum cursus, ex sapien vehicula tellus, dignissim consequat sem augue sit amet neque. Pellentesque auctor eu orci et porttitor. Duis at ipsum nec tortor mattis scelerisque a sed massa. Cras congue fringilla volutpat. Aliquam aliquam, lacus et eleifend euismod, tortor ipsum imperdiet ex, sit amet interdum elit neque nec augue. Mauris malesuada elit tincidunt, porta lorem sit amet, tristique augue.
                </p>
              </div>

            </div>
          </div>
        </section>

        <section className={styles.aboutUsSection}>
          <div className={styles.greyWrapperProperties}>
            <div className={styles.customContainer}>
              <div className={styles.greenBubble}>
                <h1>Una storia lunga 30 anni</h1>
                <p>
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
              <h1>CONTATTACI</h1>
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
              <div className={styles.greenBubble} style={{padding: "70px 70px 70px 280px"}}>
                <h1>La nostra sede di Ostiglia</h1>
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

      <footer className={styles.footer}>
        <div className={styles.greenWrapperProperties}>
            <div className={styles.customContainer}>
              <h1>Link utili</h1>
              <p>Footer del sito internet in cui vengono elencati i link per accedere facilmente al contenuto disponibile nelle varie pagine.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
