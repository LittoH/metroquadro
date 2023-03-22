'use client';

import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Inline from "yet-another-react-lightbox/plugins/inline";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import * as React from "react";
import { useMediaQuery } from 'react-responsive';

import styles from '../styles/Immobile.module.css';
import Image from 'next/image';

export default function PhotoCarouselLightbox({ carouselImages, carouselImagePath, carouselWidth, carouselMaxHeight, carouselAspectRatio }) {

    let slidesToRender = [];
    let lightboxSlides;

    if (carouselImages) {
        carouselImages.forEach((image) => {
            slidesToRender.push(carouselImagePath + image);
        });

        // creo un array di slides da passare successivamente alla Lightbox (CODICE GENERATO DA GPT-4 IN DATA 22/03/2023 alle 00:02)
        lightboxSlides = slidesToRender.map((slide) => ({ src: slide }));
    }

    // verifica se la larghezza dello schermo è inferiore o uguale a 767px
    const isMobile = useMediaQuery({ maxWidth: '767px' });

    // imposta i plugin in base al valore di isMobile
    const plugins = isMobile ? [Inline, Zoom] : [Inline, Thumbnails, Zoom];

    return (
        <>
            <Lightbox
                inline={{ style: { width: carouselWidth, maxHeight: carouselMaxHeight, aspectRatio: carouselAspectRatio } }}
                slides={lightboxSlides}
                plugins={plugins}
            />
        </>
    );
}

/* versione vecchia

PARTE PRIMA DEL RETURN 
const [open, setOpen] = React.useState(false);

function openCarousel() {
    setOpen(true);
}

DENTRO AL RETURN
<div className={styles.photoCarouselContainer} onClick={() => openCarousel()}>
    <div className={styles.housePhotosCarousel}>
        <Image className={styles.carouselPhoto} src={frontFaceImage} fill />
    </div>
</div>
*/



/* BACKUP LIGHTBOX 

<Lightbox
    inline={{ style: { width: "100%", maxHeight: "70vh", aspectRatio: "16 / 9" } }}
    slides={[
        { src: 'https://metroquadro-backend-production.up.railway.app/api/files/izz8qgmd4pz2olq/jbytg79orc6c36u/1_e_chj9_iynfz_fmrq_yqy4er_sDNrZotYCS.jpg'},
        { src: '/ill_3.png' },
    ]}
    plugins={[Inline, Thumbnails]}
/>

*/