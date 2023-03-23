import styles from '../styles/Featuredhousecontainer.module.css'
import FeaturedHouseCard from './featuredhousecard'

export default async function FeaturedHouseContainer() {
    
    const res = await fetch('https://metroquadro-backend-production.up.railway.app/api/collections/immobili_vendita/records?page=1&perPage=30',
        { cache: 'no-store' }
    );
    const data = await res.json();
    
    let houses = data.items;

    return (
        <div className={styles.multiFeaturedHouseContainer}>
            {houses.filter(house => house.attivo && house.in_evidenza).map((house) => (
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