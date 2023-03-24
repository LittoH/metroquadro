'use client';

import styles from '../styles/ImmobiliList.module.css';
import Image from 'next/image';

import useSWR from 'swr';
import { useState } from 'react';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function ImmobiliList() {

    let houses;
    let numberOfHousesToFetch = 30;
    const [filter, setFilter] = useState('');


    let fetchString = "https://metroquadro-backend-production.up.railway.app/api/collections/immobili_vendita/records?page=1&perPage=" + numberOfHousesToFetch + filter;
    const { data } = useSWR(fetchString, fetcher);

    if (data) {
        houses = data.items;
        console.log(data);
    }

    function LoadCaseMantova() {
        setFilter("&filter=(comune='Mantova')");
    }

    function LoadCaseOstiglia() {
        setFilter("&filter=(comune='Ostiglia')");
    }

    const imgSrcFromServer = "https://metroquadro-backend-production.up.railway.app/api/files/izz8qgmd4pz2olq/";

    return (
        <>
            <div onClick={() => LoadCaseMantova()} style={{ color: "white", borderRadius: "10px", padding: "10px", width: "100px", backgroundColor: "#555" }}>Filtra per Mantova</div>
            <div onClick={() => LoadCaseOstiglia()} style={{ marginTop: "10px", color: "white", borderRadius: "10px", padding: "10px", width: "100px", backgroundColor: "#555" }}>Filtra per Ostiglia</div>
            <div className={styles.immobiliList}>
                {houses && houses.filter(house => house.attivo).map((house) => (
                    <>
                        <div className={styles.immobiliListRow}>
                            <div className={styles.immobileItemColumn} style={{ position: "relative" }}>
                                <Image className={styles.immobileThumbnail} fill src={imgSrcFromServer + house.id + "/" + house.immagine} />
                            </div>
                            <div className={styles.immobileItemColumn}>
                                <div className={styles.immobileItemColumnContentContainer}>
                                    <h3>{house.titolo}</h3>
                                    <p>{house.prezzo}</p>
                                    <p>{house.locali}</p>
                                    <p>{house.metriquadri}</p>
                                    <p>{house.bagni}</p>
                                    <p>{house.piani}</p>
                                    <p>{house.annuncio}</p>
                                </div>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </>
    )
}