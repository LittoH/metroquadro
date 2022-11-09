import styles from '../styles/Featuredhousecard.module.css'
import Image from 'next/image'

export default function FeaturedHouseCard({ id, imgSrc, price, title, numLocales, m2, bathrooms, floors, description }) {

    const imgSrcFromServer = "http://127.0.0.1:8090/api/files/izz8qgmd4pz2olq/" + id + "/";

    // costruisco il path (con) da passare successivamente allo sfondo di ogni card
    const imgPath = "linear-gradient(to top, rgba(0, 0, 0, 0.663), rgba(255, 255, 255, 0)), url(" + imgSrcFromServer + imgSrc + ")";

    return (
        <>
            <div className={styles.featuredHouseCard} style={{backgroundImage: imgPath }}>
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
