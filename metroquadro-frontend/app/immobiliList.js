'use client';

import styles from '../styles/ImmobiliList.module.css';
import Link from 'next/link';
import Image from 'next/image';

import useSWR from 'swr';
import { useState, useEffect } from 'react';

const fetcher = (...args) => fetch(...args).then(res => res.json());


// Inizio parte nuova
import PocketBase from 'pocketbase';
//Fine parte nuova

export default function ImmobiliList({ searchFilter }) {

    console.log("searchFilter is: " + searchFilter);

    const [houses, setHouses] = useState('');

    //let houses;
    let numberOfHousesToFetch = 30;
    
    /* LEGACY FETCH
    let fetchString = "https://metroquadro-backend-production.up.railway.app/api/collections/immobili_vendita/records?page=1&perPage=" + numberOfHousesToFetch + searchFilter;
    const { data } = useSWR(fetchString, fetcher);
    */

    // Inizio parte nuova
    const client = new PocketBase('https://metroquadro-backend-production.up.railway.app');
    let fetchedItems;

    const fetchFilteredImmobili = async () => {
        const response = await client.collection('immobili_vendita').getList(1, 50, {
            //filter: 'comune = "Ostiglia" && garage = "Non disponibile"',
            filter: '' + searchFilter,
        });
        setHouses(response.items);
        return response.items;
    }

    useEffect(() => {
        fetchFilteredImmobili();
    }, [searchFilter])


    // Fine parte nuova

    /* LEGACY FETCH
    if (data) {
        houses = data.items;
        console.log("Metodo 1: \n" + houses);
    }
    */

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
                                    <Image className={styles.immobileThumbnail} fill src={imgSrcFromServer + house.id + "/" + house.immagine} />
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