'use client';

import styles from '../styles/Housecard.module.css'
import Link from 'next/link';

export default function HouseCardV2({ id, imgSrc, price, title, numLocales, m2, bathrooms, floors, description }) {

    const imgSrcFromServer = "https://metroquadro-backend-production.up.railway.app/api/files/izz8qgmd4pz2olq/" + id + "/";

    // costruisco il path (con) da passare successivamente allo sfondo di ogni card
    const imgPath = "linear-gradient(to top, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), url(" + imgSrcFromServer + imgSrc + ")";


    const path = id;
    const parsedPath = "/immobili/" + path;

    return (
        <Link href={parsedPath}>
            <div className={styles.houseCardContainer}>
                <div className={styles.houseCardV2} style={{backgroundImage: imgPath }}></div>
                <div className={styles.whiteContainer}>
                    <h1 className={styles.houseTitleV2}>{title}</h1>
                    <div className={styles.priceAndFeaturesContainerV2}>
                        <div className={styles.featuredHousePriceV2}>{price}</div>
                        <div className={styles.featuresV2}>
                            {numLocales} locali | {m2}m² | {bathrooms} bagni | {floors} piani
                        </div>
                    </div>
                    <p className={styles.featuredHouseBriefDescriptionV2}>{description}</p>
                </div>
            </div>
        </Link>
    );
};