'use client'

import styles from '../styles/Featuredhousecontainer.module.css'
import FeaturedHouseCard from './featuredhousecard'
import Image from 'next/image';
import PocketBase from 'pocketbase';
import { useState, useEffect } from 'react';
import { useRef } from 'react';

export default function FeaturedHouseContainer() {

    const [houses, setHouses] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [hasScrolled, setHasScrolled] = useState(false);

    // Questo ci serve per ottenere la reference del div da scrollare orizzontalmente quando
    // clicchiamo sull'icona della freccia
    const divRef = useRef(null);

    // Inizio parte relativa al fetch dal lato client 
    const client = new PocketBase('https://metroquadro-backend-production.up.railway.app');
    let searchFilter = "";

    const fetchFilteredImmobili = async () => {
        const response = await client.collection('immobili_vendita').getList(1, 50, {
            filter: '' + searchFilter,
            sort: '-created',
        });
        setHouses(response.items);
        setIsLoading(false);
        return response.items;
    }

    useEffect(() => {
        fetchFilteredImmobili();
    }, [])

    // Fine parte relativa al fetch dal lato client 

    // Aggiungo degli event listeners per capire se ho scrollato orizzontalmente lo slider
    useEffect(() => {
        const scrollableDiv = document.querySelector('#scrollableDiv');
        const handleScroll = () => {
            if (scrollableDiv.scrollLeft > 0) {
                setHasScrolled(true);
            } else {
                setHasScrolled(false);
            }
        };
        scrollableDiv.addEventListener('scroll', handleScroll);
        return () => {
            scrollableDiv.removeEventListener('scroll', handleScroll);
        };
    }, [hasScrolled]);


    function ScrollRight() {
        divRef.current.scrollLeft += 600;
    }

    function ScrollLeft() {
        divRef.current.scrollLeft -= 600;
    }

    return (
        <div className={styles.multiFeaturedHouseWrapper}>
            <div className={styles.rightArrow} onClick={() => ScrollRight()}>
                <Image className={styles.rightArrowImage} src="/nav-arrow-right.svg" width={50} height={50} alt="Right arrow" />
            </div>

            {hasScrolled && 
                <div className={styles.leftArrow} onClick={() => ScrollLeft()}>
                    <Image className={styles.rightArrowImage} src="/nav-arrow-left.svg" width={50} height={50} alt="Right arrow" />
                </div>
            }

            <div id="scrollableDiv" ref={divRef} className={styles.multiFeaturedHouseContainer}>
                {!isLoading && houses.filter(house => house.attivo && house.in_evidenza).map((house) => (
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
        </div>
    );
};