'use client';

import styles from '../styles/Featuredhousecard.module.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

export default function FeaturedHouseCard({ id, imgSrc, price, title, numLocales, m2, bathrooms, floors, description }) {

    const imgSrcFromServer = "https://metroquadro-backend-production.up.railway.app/api/files/izz8qgmd4pz2olq/" + id + "/";

    // costruisco il path (con) da passare successivamente allo sfondo di ogni card
    const imgPath = "linear-gradient(to top, rgba(0, 0, 0, 0.663), rgba(255, 255, 255, 0)), url(" + imgSrcFromServer + imgSrc + ")";


    const path = id; 
    const router = useRouter();
    const parsedPath = "/immobili/" + path;

    return (
        <>
            <div className={styles.featuredHouseCard} style={{backgroundImage: imgPath }} onClick={ () => router.push('' + parsedPath) }>
                <h1 className={styles.featuredHouseTitle}>{title}</h1>
                <div className={styles.priceAndFeaturesContainer}>
                    <div className={styles.featuredHousePrice}>{price}</div>
                    <div className={styles.features}>
                        {numLocales} locali | {m2}m² | {bathrooms} bagni | {floors} piani
                    </div>
                </div>
                <p className={styles.featuredHouseBriefDescription}>{description}</p>
            </div>
        </>
    );
};
