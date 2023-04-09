'use client';

import styles from '../../styles/Immobili.module.css'
import CustomButton from '../customButton';
import SearchBar from '../searchbar';
import ImmobiliList from '../immobiliList';

import { useState } from 'react';
import Link from 'next/link';


export default function Immobili() {

    const [searchFilter, setSearchFilter] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <section className={styles.searchEngineSection}>
                    <div className={styles.seCustomContainer}>
                        <SearchBar isLoading={isLoading} setIsLoading={setIsLoading} searchFilter={searchFilter} setSearchFilter={setSearchFilter} />
                    </div>
                </section>

                <section className={styles.postHeroContent}>
                    <div className={styles.customContainer}>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <Link className={styles.navigationLinks} href={"/immobili"}><h3>Immobili</h3></Link>
                            <h3 style={{ marginLeft: "5px", marginRight: "5px" }}>&gt;</h3>
                            <Link className={styles.navigationLinks} href={"/immobili"}><h3>Tutte le case</h3></Link>
                        </div>
                        <ImmobiliList isLoading={isLoading} setIsLoading={setIsLoading} searchFilter={searchFilter} />
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <CustomButton
                                text="Clicca per caricare altri immobili"
                                path="./"
                                theme="dark"
                            />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

