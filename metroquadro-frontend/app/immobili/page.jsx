'use client';

import styles from '../../styles/Immobili.module.css'
import CustomButton from '../customButton';
import HouseListContainer from '../houselistcontainer';
import SearchBar from '../searchbar';
import BottoneDebug from '../bottoneDebug';
import ImmobiliList from '../immobiliList';

import { useState } from 'react';
import Link from 'next/link';


export default function Immobili() {

    let numberOfHousesToFetch = 30;
    //let immobiliListFilter = "";
    const [searchFilter, setSearchFilter] = useState('');

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <section className={styles.searchEngineSection}>
                    <div className={styles.seCustomContainer}>
                        <SearchBar searchFilter={searchFilter} setSearchFilter={setSearchFilter} />
                    </div>

                </section>

                <section className={styles.postHeroContent}>
                    <div className={styles.customContainer}>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <Link className={styles.navigationLinks} href={"/immobili"}><h3>Immobili</h3></Link>
                            <h3 style={{marginLeft: "5px", marginRight: "5px"}}>&gt;</h3>
                            <Link className={styles.navigationLinks} href={"/immobili"}><h3>Tutte le case</h3></Link>
                        </div>
                        <ImmobiliList searchFilter={searchFilter} />
                        <CustomButton
                            text="Clicca per caricare altri immobili"
                            path="./"
                            theme="dark"
                        />
                    </div>
                </section>
            </main>
        </div>
    );
};

