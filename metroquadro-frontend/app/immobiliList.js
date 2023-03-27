'use client';

import styles from '../styles/ImmobiliList.module.css';
import Link from 'next/link';
import Image from 'next/image';

import useSWR from 'swr';
import { useState, useEffect } from 'react';

//const fetcher = (...args) => fetch(...args).then(res => res.json());

import PocketBase from 'pocketbase';

export default function ImmobiliList({ searchFilter }) {

    const [houses, setHouses] = useState('');

    let numberOfHousesToFetch = 30;
    
    const client = new PocketBase('https://metroquadro-backend-production.up.railway.app');
    let fetchedItems;

    const fetchFilteredImmobili = async () => {
        const response = await client.collection('immobili_vendita').getList(1, 50, {
            filter: '' + searchFilter,
        });
        setHouses(response.items);
        return response.items;
    }

    useEffect(() => {
        fetchFilteredImmobili();
    }, [searchFilter])

    const imgSrcFromServer = "https://metroquadro-backend-production.up.railway.app/api/files/izz8qgmd4pz2olq/";
    const parsedPath = "/immobili/";

    return (
        <>
            <div className={styles.immobiliList}>
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
        </>
    )
}