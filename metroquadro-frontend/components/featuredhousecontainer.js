import styles from '../styles/Featuredhousecontainer.module.css';
import { FeaturedHouseCard } from '../components/featuredhousecard';

export default async function FeaturedHouseContainer() {
    
    const res = await fetch('http://127.0.0.1:8090/api/collections/case/records?page=1&perPage=30');
    const data = await res.json();
    
    let houses = data.items;
    console.log(houses);

    return (
        <div className={styles.multiFeaturedHouseContainer}>
            {houses.map((house) => (
                <>
                    <FeaturedHouseCard 
                                        imgSrc={house.immagine.Image} 
                                        price={house.prezzo} 
                                        title={house.titolo} 
                                        numLocales="6" m2="200m²" 
                                        bathrooms="2" 
                                        floors="2" 
                                        description={house.descrizione}
                    />
                </>
            ))}
        </div>
    );
};


/*
<FeaturedHouseCard imgSrc="casa_1.jpg" price="€220.000" title="Casolare di campagna a Bergantino" numLocales="6" m2="200m²" bathrooms="2" floors="2" description="Si vende villetta a schiera in via San Romano Casetto 36B ad Ostiglia in zona tranquilla e con ottimo vicinato"/>
<FeaturedHouseCard imgSrc="casa_2.jpg" price="€650/mese" title="Villetta a schiera ad Ostiglia" numLocales="5" m2="170m²" bathrooms="3" floors="2" description="Si vende villetta a schiera in via San Romano Casetto 36B ad Ostiglia in zona tranquilla e con ottimo vicinato"/>
<FeaturedHouseCard imgSrc="casa_3.jpg" price="€170.000" title="Villetta singola a Revere" numLocales="3" m2="120m²" bathrooms="1" floors="1" description="Si vende villetta a schiera in via San Romano Casetto 36B ad Ostiglia in zona tranquilla e con ottimo vicinato"/>
<FeaturedHouseCard imgSrc="casa_1.jpg" price="€400/mese" title="Vai a tutte le case" numLocales="6" m2="200m²" bathrooms="2" floors="2" description="Si vende villetta a schiera in via San Romano Casetto 36B ad Ostiglia in zona tranquilla e con ottimo vicinato"/>
*/