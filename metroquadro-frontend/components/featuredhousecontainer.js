import styles from '../styles/Featuredhousecontainer.module.css'
import { FeaturedHouseCard } from './featuredhousecard';


export const FeaturedHouseContainer = () => {

    // In questa sezione dovrò risolvere i contenuti dal database per nutrire le featured house cards
    // getFeaturedHouses()

    return (

        <div className={styles.multiFeaturedHouseContainer}>

            <FeaturedHouseCard imgSrc="casa_1.jpg" price="€220.000" title="Immobile generico" description="Generica di una casa in vendita in primo piano nella homepage"/>
            <FeaturedHouseCard imgSrc="casa_2.jpg" price="€320.000" title="Immobile generico" description="Generica di una casa in vendita in primo piano nella homepage"/>
            <FeaturedHouseCard imgSrc="casa_3.jpg" price="€140.000" title="Immobile generico" description="Generica di una casa in vendita in primo piano nella homepage"/>
            <FeaturedHouseCard imgSrc="casa_1.jpg" price="€190.000" title="Immobile generico" description="Generica di una casa in vendita in primo piano nella homepage"/>
            <FeaturedHouseCard imgSrc="casa_1.jpg" price="€220.000" title="Immobile generico" description="Generica di una casa in vendita in primo piano nella homepage"/>
            <FeaturedHouseCard imgSrc="casa_2.jpg" price="€320.000" title="Immobile generico" description="Generica di una casa in vendita in primo piano nella homepage"/>
            <FeaturedHouseCard imgSrc="casa_3.jpg" price="€140.000" title="Immobile generico" description="Generica di una casa in vendita in primo piano nella homepage"/>
            <FeaturedHouseCard imgSrc="casa_1.jpg" price="€190.000" title="Immobile generico" description="Generica di una casa in vendita in primo piano nella homepage"/>
        </div>
    );

};