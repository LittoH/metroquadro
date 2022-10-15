import styles from '../styles/Featuredhousecard.module.css'

export const FeaturedHouseCard = ({ imgSrc, price, title, description }) => {


    return (
        <div className={styles.featuredHouseCard}>
            <img src={imgSrc} className={styles.featuredHouseImg} />
            <div className={styles.featuredHousePrice}>{price}</div>
            <div className={styles.featuredHouseDescriptionContainer}>
                <h1 className={styles.featuredHouseTitle}>{title}</h1>
                <p className={styles.featuredHouseBriefDescription}>{description}</p>
            </div>
        </div>
    );


};