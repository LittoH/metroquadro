import styles from '../styles/Searchbar.module.css';
import ScrollUp from './scrollUp';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import { useMediaQuery } from 'react-responsive';

const optionsComuni = [
    { value: 'Ostiglia', label: 'Ostiglia' },
    { value: 'Mantova', label: 'Mantova' },
    { value: 'Cittadella', label: 'Cittadella' },
];

const optionsContratto = [
    { value: 'Vendita', label: 'Vendita' },
    { value: 'Affitto', label: 'Affitto' },
];

const optionsTipologia = [
    { value: 'Casa', label: 'Casa' },
    { value: 'Appartamento', label: 'Appartamento' },
];

const optionsPrezzo = [
    { value: '10000', label: '€10.000' },
    { value: '20000', label: '€20.000' },
    { value: '30000', label: '€30.000' },
    { value: '40000', label: '€40.000' },
    { value: '50000', label: '€50.000' },
    { value: '60000', label: '€60.000' },
    { value: '70000', label: '€70.000' },
    { value: '80000', label: '€80.000' },
    { value: '90000', label: '€90.000' },
    { value: '100000', label: '€100.000' },
    { value: '120000', label: '€120.000' },
    { value: '140000', label: '€140.000' },
    { value: '160000', label: '€160.000' },
    { value: '180000', label: '€180.000' },
    { value: '200000', label: '€200.000' },
    { value: '220000', label: '€220.000' },
    { value: '240000', label: '€240.000' },
    { value: '260000', label: '€260.000' },
    { value: '280000', label: '€280.000' },
    { value: '300000', label: '€300.000' },
    { value: '320000', label: '€320.000' },
    { value: '340000', label: '€340.000' },
    { value: '360000', label: '€360.000' },
    { value: '380000', label: '€380.000' },
    { value: '400000', label: '€400.000' },
    { value: '450000', label: '€450.000' },
    { value: '500000', label: '€500.000' },
    { value: '550000', label: '€550.000' },
    { value: '600000', label: '€600.000' },
];

const optionsSuperficie = [
    { value: '20', label: '20m²' },
    { value: '40', label: '40m²' },
    { value: '60', label: '60m²' },
    { value: '80', label: '80m²' },
    { value: '100', label: '100m²' },
    { value: '120', label: '120m²' },
    { value: '140', label: '140m²' },
    { value: '160', label: '160m²' },
    { value: '180', label: '180m²' },
    { value: '200', label: '200m²' },
    { value: '250', label: '250m²' },
    { value: '300', label: '300m²' },
    { value: '350', label: '350m²' },
    { value: '400', label: '400m²' },
    { value: '450', label: '450m²' },
    { value: '500', label: '500m²' },
];

export default function SearchBar({ isLoading, setIsLoading, searchFilter, setSearchFilter, canReset, setCanReset }) {

    const [lastFilter, setLastFilter] = useState('unfiltered');

    const [numberActiveFilters, setNumberActiveFilters] = useState(0);
    const [selectedOptionIsSet, setSelectedOptionIsSet] = useState(false);
    const [selectedOptionContrattoIsSet, setSelectedOptionContrattoIsSet] = useState(false);
    const [selectedOptionTipologiaIsSet, setSelectedOptionTipologiaIsSet] = useState(false);
    const [selectedOptionPrezzoIsSet, setSelectedOptionPrezzoIsSet] = useState(false);
    const [selectedOptionSuperficieIsSet, setSelectedOptionSuperficieIsSet] = useState(false);

    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedOptionContratto, setSelectedOptionContratto] = useState(null);
    const [selectedOptionTipologia, setSelectedOptionTipologia] = useState(null);
    const [selectedOptionPrezzo, setSelectedOptionPrezzo] = useState(null);
    const [selectedOptionSuperficie, setSelectedOptionSuperficie] = useState(null);

    const [isMobileSearchBarOpen, setIsMobileSearchBarOpen] = useState(false);
    const [firstMobileCheckCompleted, setFirstMobileCheckCompleted] = useState(false);

    function LoadCaseWithFilter() {

        let filter = '';
        if (selectedOptionIsSet) {
            filter += 'comune="' + selectedOption.value + '"';
        }
        if (selectedOptionContrattoIsSet) {
            if (filter !== '') {
                filter += ' && ';
            }
            filter += 'contratto="' + selectedOptionContratto.value + '"';
        }
        if (selectedOptionTipologiaIsSet) {
            if (filter !== '') {
                filter += ' && ';
            }
            filter += 'tipologia_immobile="' + selectedOptionTipologia.value + '"';
        }
        if (selectedOptionPrezzoIsSet) {
            if (filter !== '') {
                filter += ' && ';
            }
            filter += 'prezzo_nf<=' + selectedOptionPrezzo.value + '';
        }
        if (selectedOptionSuperficieIsSet) {
            if (filter !== '') {
                filter += ' && ';
            }
            filter += 'metriquadri_nf<=' + selectedOptionSuperficie.value + '';
        }

        //console.log("Filtro completo di ricerca: " + filter);

        console.log("Search filter is: " + filter);
        console.log("Last searched filter is : " + lastFilter);

        if (filter != lastFilter) {
            setIsLoading(true);
            setSearchFilter(filter);
            setLastFilter(filter);
            setCanReset(true);
        }

        if (isMobile) {
            CloseFiltersMenu();
        }
    }

    useEffect(() => {
        if (selectedOption) {
            setSelectedOptionIsSet(true);
        }
    }, [selectedOption])

    useEffect(() => {
        if (selectedOptionContratto) {
            setSelectedOptionContrattoIsSet(true);
        }
    }, [selectedOptionContratto])

    useEffect(() => {
        if (selectedOptionTipologia) {
            setSelectedOptionTipologiaIsSet(true);
        }
    }, [selectedOptionTipologia])

    useEffect(() => {
        if (selectedOptionPrezzo) {
            setSelectedOptionPrezzoIsSet(true);
        }
    }, [selectedOptionPrezzo])

    useEffect(() => {
        if (selectedOptionSuperficie) {
            setSelectedOptionSuperficieIsSet(true);
        }
    }, [selectedOptionSuperficie])


    const isMobile = useMediaQuery({ maxWidth: '767px' });

    function FiltersReset() {
        setIsLoading(true);
        setSearchFilter('');
        setLastFilter('');
        setCanReset(false);
    }

    function OpenFiltersMenu() {
        setIsMobileSearchBarOpen(true);
    }

    function CloseFiltersMenu() {
        setIsMobileSearchBarOpen(false);
    }

    useEffect(() => {
        if (isMobile && !firstMobileCheckCompleted) {
            setIsMobileSearchBarOpen(false);
            setFirstMobileCheckCompleted(true);
        } else if (!isMobile && !firstMobileCheckCompleted) {
            setIsMobileSearchBarOpen(true);
            setFirstMobileCheckCompleted(true);
        }
    })

    return (
        <>
            <ScrollUp />
            <div className={styles.greenBarWrapper}>
                <div className={styles.selectsContainer}>
                    {isMobileSearchBarOpen &&
                        <>
                            <div className={styles.selectItemContainerShort}>
                                <Select
                                    defaultValue={selectedOption}
                                    onChange={setSelectedOption}
                                    options={optionsComuni}
                                    placeholder={"Comune"}
                                />
                            </div>
                            <div className={styles.selectItemContainerShort}>
                                <Select
                                    defaultValue={selectedOptionContratto}
                                    onChange={setSelectedOptionContratto}
                                    options={optionsContratto}
                                    placeholder={"Contratto"}
                                />
                            </div>
                            <div className={styles.selectItemContainerLong}>
                                <Select
                                    defaultValue={selectedOptionTipologia}
                                    onChange={setSelectedOptionTipologia}
                                    options={optionsTipologia}
                                    placeholder={"Tipologia"}
                                />
                            </div>
                            <div className={styles.selectItemContainerMedium}>
                                <Select
                                    defaultValue={selectedOptionPrezzo}
                                    onChange={setSelectedOptionPrezzo}
                                    options={optionsPrezzo}
                                    placeholder={"Prezzo MAX"}
                                />
                            </div>
                            <div className={styles.selectItemContainerLong}>
                                <Select
                                    defaultValue={selectedOptionSuperficie}
                                    onChange={setSelectedOptionSuperficie}
                                    options={optionsSuperficie}
                                    placeholder={"Superficie MAX"}
                                />
                            </div>
                        </>
                    }
                    {isMobile && !isMobileSearchBarOpen &&
                        <div className={`${styles.searchBarButton2} ${styles.mobileButtonOnly}`} onClick={() => OpenFiltersMenu()}>Filtri</div>
                    }
                    {isMobileSearchBarOpen &&
                        <div className={styles.searchBarButton2} onClick={() => LoadCaseWithFilter()}>Cerca</div>
                    }
                    {isMobileSearchBarOpen && canReset &&
                        <div className={styles.searchBarButton2} onClick={() => FiltersReset()}>Elimina filtro</div>
                    }
                    {isMobile && isMobileSearchBarOpen &&
                        <div className={`${styles.searchBarButton2} ${styles.mobileButtonOnly}`} onClick={() => CloseFiltersMenu()}>Chiudi</div>
                    }
                </div>

            </div>
        </>
    )
}
