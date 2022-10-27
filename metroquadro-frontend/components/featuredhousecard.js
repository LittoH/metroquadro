import styles from '../styles/Featuredhousecard.module.css'

export const FeaturedHouseCard = ({ imgSrc, price, title, numLocales, m2, bathrooms, floors, description }) => {

    // costruisco il path (con) da passare successivamente allo sfondo di ogni card
    const imgPath = "linear-gradient(to top, rgba(0, 0, 0, 0.663), rgba(255, 255, 255, 0)), url(" + imgSrc + ")";

    return (
        <>
            <div className={styles.featuredHouseCard} style={{backgroundImage: imgPath }}>
                <h1 className={styles.featuredHouseTitle}>{title}</h1>
                <div className={styles.priceAndFeaturesContainer}>
                    <div className={styles.featuredHousePrice}>{price}</div>
                    <div className={styles.features}>
                        {numLocales} locali | {m2} | {bathrooms} bagni | {floors} piani
                    </div>
                </div>
                <p className={styles.featuredHouseBriefDescription}>{description}</p>
            </div>
        </>
    );
};

/* Backup versione precedente
<div className={styles.featuredHouseCard}>
    <img src={imgSrc} className={styles.featuredHouseImg} />
    <div className={styles.featuredHousePrice}>{price}</div>
    <div className={styles.featuredHouseDescriptionContainer}>
        <h1 className={styles.featuredHouseTitle}>{title}</h1>
        <p className={styles.featuredHouseBriefDescription}>{description}</p>
    </div>
</div>
*/