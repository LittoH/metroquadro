'use client';

import styles from '../styles/ImmobiliList.module.css';
import Link from 'next/link';
import Image from 'next/image';
import useSWR from 'swr';
import { useState, useEffect } from 'react';
import PocketBase from 'pocketbase';

import { ShimmerText } from './ShimmerText';

export default function ImmobiliList({ isLoading, setIsLoading, searchFilter }) {

    const [houses, setHouses] = useState('');

    let numberOfHousesToFetch = 30;

    const client = new PocketBase('https://metroquadro-backend-production.up.railway.app');
    let fetchedItems;

    const fetchFilteredImmobili = async () => {
        const response = await client.collection('immobili_vendita').getList(1, 50, {
            filter: '' + searchFilter,
        });
        setHouses(response.items);
        setIsLoading(false);
        return response.items;
    }

    useEffect(() => {
        fetchFilteredImmobili();
    }, [searchFilter])


    
    //const imgSrcFromServer = "https://metroquadro-backend-production.up.railway.app/api/files/izz8qgmd4pz2olq/";//      OLD
    const imgSrcFromServer = "https://metroquadro-backend-production.up.railway.app/api/files/557r95q0bzdn30v/";//        NEW
    const parsedPath = "/immobili/";

    return (
        <>
            {isLoading &&
                <>
                    <div className={styles.immobiliListRow}>
                        <ShimmerText>
                            <div className={styles.immobileItemColumnThumb} style={{ borderRadius: "20px", width: "400px", height: "100px" }}></div>
                        </ShimmerText>
                        <ShimmerText>
                            <div className={styles.immobileItemColumn} style={{ borderRadius: "20px", width: "800px", height: "100px" }}></div>
                        </ShimmerText>
                    </div>
                    <div className={styles.immobiliListRow}>
                        <ShimmerText>
                            <div className={styles.immobileItemColumnThumb} style={{ borderRadius: "20px", width: "400px", height: "100px" }}></div>
                        </ShimmerText>
                        <ShimmerText>
                            <div className={styles.immobileItemColumn} style={{ borderRadius: "20px", width: "800px", height: "100px" }}></div>
                        </ShimmerText>
                    </div>
                    <div className={styles.immobiliListRow}>
                        <ShimmerText>
                            <div className={styles.immobileItemColumnThumb} style={{ borderRadius: "20px", width: "400px", height: "100px" }}></div>
                        </ShimmerText>
                        <ShimmerText>
                            <div className={styles.immobileItemColumn} style={{ borderRadius: "20px", width: "800px", height: "100px" }}></div>
                        </ShimmerText>
                    </div>
                </>
            }
            {!isLoading &&
                <div className={styles.immobiliList}>
                    <h3>La ricerca ha prodotto {houses.length} risultati.</h3>
                    {houses.length < 1 &&
                        <p>Prova a modificare i parametri di ricerca nella barra verde in alto per trovare gli immobili che cerchi.</p>
                    }
                    {houses && houses.filter(house => house.attivo).map((house) => (
                        <>
                            <Link href={parsedPath + house.id}>
                                <div className={styles.immobiliListRow}>
                                    <div className={styles.immobileItemColumnThumb}>
                                        <Image alt="Immagine immobile" className={styles.immobileThumbnail} fill src={imgSrcFromServer + house.id + "/" + house.immagine} />
                                    </div>
                                    <div className={styles.immobileItemColumn}>
                                        <div className={styles.immobileItemColumnContentContainer}>
                                            <h1 className={styles.houseTitleV2}>{house.titolo}</h1>
                                            <div className={styles.priceAndFeaturesContainerV2}>
                                                <div className={styles.featuredHousePriceV2}>{house.prezzo}</div>
                                                <div className={styles.featuresV2}>
                                                    <p style={{ color: "var(--mqBlack)" }}>{house.locali} locali | {house.metriquadri}m² | {house.bagni} bagni | {house.piani} piani</p>
                                                </div>
                                            </div>
                                            <p className={styles.featuredHouseBriefDescriptionV2}>{house.descrizione}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </>
                    ))}
                </div>
            }
        </>
    )
}