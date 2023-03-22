import styles from '../../../styles/Immobile.module.css';
import HouseListContainer from '../../houselistcontainer';
import Image from 'next/image';

import PhotoCarouselLightbox from '../../photocarousellightbox';

//import PocketBase from 'pocketbase';

async function getImmobile(immobileId) {
    const res = await fetch(`https://metroquadro-backend-production.up.railway.app/api/collections/immobili_vendita/records/${immobileId}`);

    const data = await res.json();
    return data;
}

async function getPhotos(id) {
    // Questa funzione è separata da getImmobile() perché esegue una fetch su una collezione totalmente diversa
    const fetchString = "https://metroquadro-backend-production.up.railway.app/api/collections/immagini_immobili/records?filter=(immobile_id='" + id + "')";
    const res = await fetch(fetchString);
    const data = await res.json();

    return data;
}

export default async function ImmobilePage({ params }) {

    const immobile = await getImmobile(params.id);

    /* Inizio partee legata all'ottenimento delle immagini per il carosello */
    const photos = await getPhotos(params.id);
    let photosItems;
    let photosList; // array di foto che passo al carosello
    let imagesPath; // path per risalire alle immagini nel database

    if (photos) {
        photosItems = photos.items;
        // ciclo ogni oggetto di photosItem e lo passo nell'array photosToRender, prima di passarlo al component, nel return
        photosItems.forEach((photo) => {
            photosList = photo.immagini;
            imagesPath = "https://metroquadro-backend-production.up.railway.app/api/files/4btbzzwztley8ay/" + photo.id + "/";
        });

    }

    /*Fine parte legata all'ottenimento delle immagini per il carosello */

    const imgSrc = immobile.immagine;
    const imgSrcFromServer = "https://metroquadro-backend-production.up.railway.app/api/files/izz8qgmd4pz2olq/" + params.id + "/";
    const imgPath = "url(" + imgSrcFromServer + imgSrc + ")";

    const relatedContentFilter = "&filter=(titolo!='" + immobile.titolo + "')&filter=(comune='" + immobile.comune + "')";

    let openCarouselTrigger = false;

    function OpenPhotosCarouselTrigger() {
        openCarouselTrigger = true;
    }

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <section className={styles.houseInfoSection}>

                    <PhotoCarouselLightbox carouselImages={photosList} carouselImagePath={imagesPath} />

                    <div className={styles.customContainer}>
                        <div className={styles.houseBigDetailItem} style={{ marginTop: "50px" }}><h1>{immobile.titolo}</h1></div>
                        <div className={styles.houseInfoOuterBriefDetailsContainer}>
                            <div className={styles.houseInfoInnerBriefDetailsContainer} style={{ paddingRight: "30px" }}>
                                <div className={styles.houseDetailItem}><h3>Contratto</h3><p>{immobile.contratto}</p></div>
                                <div className={styles.houseDetailItem}><h3>Prezzo</h3><p>{immobile.prezzo}</p></div>
                                <div className={styles.houseDetailItem}><h3>Tipologia</h3><p>{immobile.tipologia_immobile}</p></div>
                                <div className={styles.houseDetailItem}><h3>Comune</h3><p>{immobile.comune}</p></div>
                                <div className={styles.houseDetailItem}><h3>Certificazione energetica</h3><p>{immobile.certificazione_energetica}</p></div>
                            </div>

                            <div className={styles.houseInfoInnerBriefDetailsContainer} style={{ paddingLeft: "30px" }}>
                                <div className={styles.houseDetailItem}><h3>Metriquadri:</h3><p>{immobile.metriquadri}</p></div>
                                <div className={styles.houseDetailItem}><h3>Numero locali: </h3><p>{immobile.locali}</p></div>
                                <div className={styles.houseDetailItem}><h3>Bagni:</h3><p>{immobile.bagni}</p></div>
                                <div className={styles.houseDetailItem}><h3>Piani:</h3><p>{immobile.piani}</p></div>
                                <div className={styles.houseDetailItem}><h3>Garage:</h3><p>{immobile.garage}</p></div>
                            </div>
                        </div>

                        <div className={styles.houseBigDetailItem} style={{ marginTop: "50px" }}><h3>Annuncio</h3><p>{immobile.annuncio}</p></div>
                        <div className={styles.houseBigDetailItem} style={{ marginTop: "50px" }}><h3>Descrizione</h3><p>{immobile.descrizione}</p></div>

                        <div className={styles.houseBigDetailItem} style={{ marginTop: "50px" }}><h3>Planimetria</h3></div>
                        <div className={styles.planimetriaContainer}>
                            <Image
                                className={styles.immaginePlanimetria}
                                src="/planimetria.jpg"
                                width="675"
                                height="1013"

                            />
                        </div>

                        <div className={styles.houseBigDetailItem} style={{ marginTop: "50px" }}><h3>Nelle vicinanze</h3></div>
                        <div className={styles.houseInfoOuterBriefDetailsContainer}>
                            <div className={styles.houseInfoInnerBriefDetailsContainer} style={{ paddingRight: "30px" }}>
                                <div className={styles.houseDetailItem}><p>Piscine</p><Image src={"/check.svg"} width={20} height={20} /></div>
                                <div className={styles.houseDetailItem}><p>Scuole</p><Image src={"/check.svg"} width={20} height={20} /></div>
                                <div className={styles.houseDetailItem}><p>Mezzi di trasporto</p><Image src={"/check.svg"} width={20} height={20} /></div>
                                <div className={styles.houseDetailItem}><p>Palestra</p><Image src={"/check.svg"} width={20} height={20} /></div>
                                <div className={styles.houseDetailItem}><p>Cibo da asporto</p><Image src={"/check.svg"} width={20} height={20} /></div>
                            </div>

                            <div className={styles.houseInfoInnerBriefDetailsContainer} style={{ paddingLeft: "30px" }}>
                                <div className={styles.houseDetailItem}><p>Biblioteca</p><Image src={"/check.svg"} width={20} height={20} /></div>
                                <div className={styles.houseDetailItem}><p>Supermercati</p><Image src={"/check.svg"} width={20} height={20} /></div>
                                <div className={styles.houseDetailItem}><p>Parchi</p><Image src={"/check.svg"} width={20} height={20} /></div>
                                <div className={styles.houseDetailItem}><p>Campo sportivo</p><Image src={"/check.svg"} width={20} height={20} /></div>
                                <div className={styles.houseDetailItem}><p>Luoghi di culto</p><Image src={"/check.svg"} width={20} height={20} /></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.linkedFeaturedHouses}>
                    <div className={styles.customContainer}>
                        <h1 style={{ marginBottom: "50px" }}>Potrebbe interessarti anche</h1>
                        <HouseListContainer numberOfItems={3} filter={relatedContentFilter} />
                    </div>
                </section>
            </main>
        </div >

    );
}