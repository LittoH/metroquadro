'use client';

import styles from '../../styles/Immobili.module.css'
import SidebarFilter from '../components/SidebarFilter';
import ImmobiliList from '../immobiliList';

import { useState } from 'react';
import Link from 'next/link';


export default function Immobili() {

    const [searchFilter, setSearchFilter] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [canReset, setCanReset] = useState(false);

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <aside className={styles.sidebarSection}>
                    <SidebarFilter 
                        isLoading={isLoading} 
                        setIsLoading={setIsLoading} 
                        searchFilter={searchFilter} 
                        setSearchFilter={setSearchFilter} 
                        canReset={canReset} 
                        setCanReset={setCanReset} 
                    />
                </aside>

                <section className={styles.contentSection}>
                    <div className={styles.breadcrumbs}>
                        <Link className={styles.navigationLinks} href={"/"}>Home</Link>
                        <span className={styles.separator}>&gt;</span>
                        <Link className={styles.navigationLinks} href={"/immobili"}>Immobili</Link>
                    </div>
                    
                    <ImmobiliList 
                        isLoading={isLoading} 
                        setIsLoading={setIsLoading} 
                        searchFilter={searchFilter} 
                    />
                </section>
            </main>
        </div>
    );
};

