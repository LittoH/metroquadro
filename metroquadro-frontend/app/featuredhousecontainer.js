import styles from '../styles/Featuredhousecontainer.module.css'
import FeaturedHouseCard from './featuredhousecard'
import Image from 'next/image';

export default async function FeaturedHouseContainer() {
    
    const res = await fetch('https://metroquadro-backend-production.up.railway.app/api/collections/immobili_vendita/records?page=1&perPage=30',
        { cache: 'no-store' }
    );
    const data = await res.json();
    
    let houses = data.items;

    function ScrollRight() {
        console.log("Scrolled to the right");
    }

    return (
        <div className={styles.multiFeaturedHouseContainer}>
            {/* 
            <div className={styles.rightArrow} onClick={() => ScrollRight()}> 
            <Image className={styles.rightArrowImage} src="/nav-arrow-right.svg" width={10} height={10} alt="Right arrow" />
            </div>
            */}
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