'use client';

import styles from '../styles/ImmobiliList.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import PocketBase from 'pocketbase';
import { motion } from 'framer-motion';

import { ShimmerText } from './ShimmerText';

export default function ImmobiliList({ isLoading, setIsLoading, searchFilter }) {

    const [houses, setHouses] = useState([]);

    const client = new PocketBase('https://metroquadro-backend-production.up.railway.app');

    const fetchFilteredImmobili = async () => {
        try {
            const response = await client.collection('immobili_vendita').getList(1, 50, {
                filter: '' + searchFilter,
            });
            setHouses(response.items);
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching houses:", error);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchFilteredImmobili();
    }, [searchFilter])

    const imgSrcFromServer = "https://metroquadro-backend-production.up.railway.app/api/files/557r95q0bzdn30v/";
    const parsedPath = "/immobili/";

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <>
            {isLoading &&
                <div className={styles.immobiliList}>
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className={styles.shimmerCard}>
                            <ShimmerText>
                                <div className={styles.shimmerImage}></div>
                            </ShimmerText>
                            <div className={styles.shimmerContent}>
                                <ShimmerText><div className={styles.shimmerLine} style={{ width: '80%' }}></div></ShimmerText>
                                <ShimmerText><div className={styles.shimmerLine} style={{ width: '40%' }}></div></ShimmerText>
                                <ShimmerText><div className={styles.shimmerLine} style={{ width: '100%', marginTop: '20px' }}></div></ShimmerText>
                            </div>
                        </div>
                    ))}
                </div>
            }
            {!isLoading &&
                <motion.div 
                    className={styles.immobiliList}
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    <div className={styles.resultsCount}>
                        La ricerca ha prodotto {houses.filter(house => house.attivo).length} risultati.
                    </div>
                    
                    {houses.length < 1 &&
                        <p style={{ gridColumn: '1 / -1' }}>Prova a modificare i parametri di ricerca nella barra laterale per trovare gli immobili che cerchi.</p>
                    }
                    
                    {houses && houses.filter(house => house.attivo).map((house) => (
                        <motion.div key={house.id} variants={item}>
                            <Link href={parsedPath + house.id} style={{ textDecoration: 'none', height: '100%', display: 'block' }}>
                                <div className={styles.immobiliCard}>
                                    <div className={styles.cardImageContainer}>
                                        <Image 
                                            alt={house.titolo} 
                                            className={styles.immobileThumbnail} 
                                            fill 
                                            src={imgSrcFromServer + house.id + "/" + house.immagine} 
                                        />
                                    </div>
                                    <div className={styles.cardContent}>
                                        <h2 className={styles.houseTitle}>{house.titolo}</h2>
                                        <div className={styles.priceTag}>{house.prezzo}</div>
                                        <div className={styles.features}>
                                            <span className={styles.featureItem}>🏠 {house.locali} locali</span>
                                            <span className={styles.featureItem}>📏 {house.metriquadri}m²</span>
                                            <span className={styles.featureItem}>🛁 {house.bagni} bagni</span>
                                        </div>
                                        <p className={styles.description}>{house.descrizione}</p>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            }
        </>
    )
}
