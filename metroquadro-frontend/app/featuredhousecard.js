'use client';

import styles from '../styles/Featuredhousecard.module.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function FeaturedHouseCard({ id, imgSrc, price, title, numLocales, m2, bathrooms, floors, description }) {

    //const imgSrcFromServer = "https://metroquadro-backend-production.up.railway.app/api/files/izz8qgmd4pz2olq/" + id + "/";//   OLD
    const imgSrcFromServer = "https://metroquadro-backend-production.up.railway.app/api/files/557r95q0bzdn30v/" + id + "/";//     NEW

    const fullImgPath = imgSrcFromServer + imgSrc;

    const path = id; 
    const router = useRouter();
    const parsedPath = "/immobili/" + path;

    return (
        <Link href={parsedPath}>
            <div className={styles.featuredHouseCard} style={{backgroundImage: `url(${fullImgPath})`}} >
                <div className={styles.badge}>In Vendita</div>
                <div className={styles.cardOverlay}>
                    <h1 className={styles.featuredHouseTitle}>{title}</h1>
                    <div className={styles.priceAndFeaturesContainer}>
                        <div className={styles.featuredHousePrice}>{price}</div>
                        <div className={styles.features}>
                            <span className={styles.featureItem}>{numLocales} Locali</span>
                            <span>•</span>
                            <span className={styles.featureItem}>{m2}m²</span>
                            <span>•</span>
                            <span className={styles.featureItem}>{bathrooms} Bagni</span>
                        </div>
                    </div>
                    <p className={styles.featuredHouseBriefDescription}>{description}</p>
                    <div className={styles.viewButton}>
                        Visualizza Dettagli
                    </div>
                </div>
            </div>
        </Link>
    );
};
