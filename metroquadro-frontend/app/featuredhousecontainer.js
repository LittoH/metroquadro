'use client'

import styles from '../styles/Featuredhousecontainer.module.css'
import FeaturedHouseCard from './featuredhousecard'
import Image from 'next/image';
import PocketBase from 'pocketbase';
import { useState, useEffect } from 'react';
import { useRef } from 'react';

export default function FeaturedHouseContainer() {

    const [houses, setHouses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    // Questo ci serve per ottenere la reference del div da scrollare orizzontalmente quando
    // clicchiamo sull'icona della freccia
    const divRef = useRef(null);

    // Inizio parte relativa al fetch dal lato client 
    const client = new PocketBase('https://metroquadro-backend-production.up.railway.app');
    let searchFilter = "";

    const fetchFilteredImmobili = async () => {
        try {
            const response = await client.collection('immobili_vendita').getList(1, 50, {
                filter: 'attivo=true && in_evidenza=true',
                sort: '-created',
            });
            setHouses(response.items);
        } catch (error) {
            console.error("Error fetching houses:", error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchFilteredImmobili();
    }, [])

    // Fine parte relativa al fetch dal lato client 

    const handleScroll = () => {
        if (divRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = divRef.current;
            setShowLeftArrow(scrollLeft > 0);
            // Allow a small buffer (e.g. 10px) for float precision issues
            setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        const scrollableDiv = divRef.current;
        if (scrollableDiv) {
            scrollableDiv.addEventListener('scroll', handleScroll);
            // Check initial state
            handleScroll();
            return () => {
                scrollableDiv.removeEventListener('scroll', handleScroll);
            };
        }
    }, [houses]);


    function scroll(direction) {
        if (divRef.current) {
            const scrollAmount = 430; // Card width + margin
            divRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    }

    return (
        <div className={styles.multiFeaturedHouseWrapper}>
            {showLeftArrow && 
                <div className={`${styles.arrowButton} ${styles.leftArrow}`} onClick={() => scroll('left')}>
                    <Image className={styles.arrowImage} src="/nav-arrow-left.svg" width={24} height={24} alt="Previous" />
                </div>
            }

            <div ref={divRef} className={styles.multiFeaturedHouseContainer}>
                {isLoading ? (
                    <div style={{width: '100%', textAlign: 'center', padding: '50px', color: '#888'}}>
                        Caricamento immobili in evidenza...
                    </div>
                ) : (
                    houses.map((house) => (
                        <FeaturedHouseCard
                            key={house.id}
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
                    ))
                )}
            </div>

            {showRightArrow && houses.length > 0 &&
                <div className={`${styles.arrowButton} ${styles.rightArrow}`} onClick={() => scroll('right')}>
                    <Image className={styles.arrowImage} src="/nav-arrow-right.svg" width={24} height={24} alt="Next" />
                </div>
            }
        </div>
    );
};