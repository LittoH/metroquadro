import styles from '../styles/Houselistcontainer.module.css'
import HouseCard from './housecard';


export default async function HouseListContainer() {

    const res = await fetch('https://metroquadro-backend-production.up.railway.app/api/collections/immobili_vendita/records?page=1&perPage=30',
        { cache: 'no-store' }
    );
    const data = await res.json();
    
    let houses = data.items;

    return (
        <div className={styles.houseListContainer}>
            {houses.map((house) => (
                <>
                    <HouseCard 
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


    )
}

