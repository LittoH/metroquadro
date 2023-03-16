'use client';

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import * as React from "react";

import styles from '../styles/Immobile.module.css';
import Image from 'next/image';

export default function PhotoCarouselLightbox({ frontFaceImage }) {

    const [open, setOpen] = React.useState(false);

    function openCarousel() {
        setOpen(true);
    }

    return (
        <>
            <div className={styles.photoCarouselContainer} onClick={() => openCarousel()}>
                <div className={styles.housePhotosCarousel}>
                    <Image className={styles.carouselPhoto} src={frontFaceImage} fill />
                </div>
            </div>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={[
                    { src: "https://metroquadro-backend-production.up.railway.app/api/files/izz8qgmd4pz2olq/jbytg79orc6c36u/1_e_chj9_iynfz_fmrq_yqy4er_sDNrZotYCS.jpg" },
                    { src: "/ill_2.png" },
                    { src: "/ill_3.png" },
                ]}
            />
        </>
    );
}
