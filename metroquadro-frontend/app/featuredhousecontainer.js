import styles from '../styles/Featuredhousecontainer.module.css'
import FeaturedHouseCard from './featuredhousecard'

export default async function FeaturedHouseContainer() {
    
    const res = await fetch('http://127.0.0.1:8090/api/collections/immobili_vendita/records?page=1&perPage=30');
    const data = await res.json();
    
    let houses = data.items;

    return (
        <div className={styles.multiFeaturedHouseContainer}>
            {houses.map((house) => (
                <>
                    <FeaturedHouseCard 
                                        id={house.id}
                                        imgSrc={house.immagine} 
                                        price={house.prezzo} 
                                        title={house.titolo} 
                                        numLocales={house.locali} 
                                        m2={house.metriquadri} 
                                        bathrooms={house.bagni}
                                        floors={house.piani} 
                                        description={house.annuncio}
                    />
                </>
            ))}
        </div>
    );
};