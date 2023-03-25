'use client';

import styles from '../styles/ImmobiliList.module.css';
import Link from 'next/link';
import Image from 'next/image';

import useSWR from 'swr';
import { useState, useEffect } from 'react';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function ImmobiliList({ searchFilter }) {

    let houses;
    let numberOfHousesToFetch = 30;

    let fetchString = "https://metroquadro-backend-production.up.railway.app/api/collections/immobili_vendita/records?page=1&perPage=" + numberOfHousesToFetch + searchFilter;
    const { data } = useSWR(fetchString, fetcher);

    if (data) {
        houses = data.items;
        //console.log(data);
    }

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
                                                {house.locali} locali | {house.metriquadri}m² | {house.bagni} bagni | {house.piani} piani
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