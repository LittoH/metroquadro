import styles from '../styles/Houselistcontainer.module.css'
import HouseCard from './housecard';
import HouseCardV2 from './housecardv2';


export default async function HouseListContainer({ numberOfItems = 30 }) {

    let numberOfHousesToFetch = numberOfItems;

    const res = await fetch('https://metroquadro-backend-production.up.railway.app/api/collections/immobili_vendita/records?page=1&perPage=' + numberOfHousesToFetch,
        { cache: 'no-store' }
    );
    const data = await res.json();

    let houses = data.items;

    return (
        <div className={styles.houseListContainer}>
            {houses.map((house) => (
                <>
                    <HouseCardV2
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

