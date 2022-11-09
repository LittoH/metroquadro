import { FeaturedHouseCard } from '../components/featuredhousecard';
import styles from '../styles/Featuredhousecontainer.module.css';

async function getFeaturedHouses() {
    const res = await fetch('http://127.0.0.1:8090/api/collections/immobili_vendita/records?page=1&perPage=30');
    const data = await res.json();
    return data?.items as any[];
}


export default async function FeaturedHouseContainer() {
    
    // In questa sezione dovrò risolvere i contenuti dal database per nutrire le featured house cards
    const featuredHouses = await getFeaturedHouses();

    return (

        <div className={styles.multiFeaturedHouseContainer}>
            {featuredHouses?.map((featuredHouse) => {
                return <FeaturedHouseCard 
                            imgSrc={featuredHouse.immagine} 
                            price={featuredHouse.prezzo} 
                            title={featuredHouse.titolo} 
                            numLocales={featuredHouse.locali} 
                            m2={featuredHouse.metriquadri} 
                            bathrooms={featuredHouse.bagni} 
                            floors={featuredHouse.piani} 
                            description={featuredHouse.descrizione} 
                        />
            })}
        </div>
    );
};