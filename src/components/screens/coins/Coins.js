import React, { useDeferredValue } from "react";
import CoinsTable from "./CoinsTable";
import styles from './coins.module.css';
import ScrollToTop from "../../shared/scrollToTop/ScrollToTop";
import increase from '../../../images/increase.png';
import decrease from '../../../images/decrease.png';
import useFetch from "../../../hooks/useFetch";
import useInput from "../../../hooks/useInput";
import Loader from '../../shared/loader/Loader';
import { ErrorAlert } from '../../shared/alerts/Alerts';
import { createUrl } from "../../../App";
import { COINS_URL } from "../../../constants";
import { useSettings } from "../../../contexts/SettingsContext";

const Coins = () => {

    const { fiatCurrency, coinsLimit } = useSettings()

    const coinsUrl = createUrl(COINS_URL, { 
        currency: fiatCurrency,
        limit: coinsLimit
    });

    const { data, err } = useFetch(coinsUrl, [fiatCurrency, coinsLimit])

    const [value, Input] = useInput()
    const deferredValue = useDeferredValue(value)

    //* props
    const coinsTableProps = {data, value: deferredValue};

    return (
        <div id={styles.container}>
            <div id={styles.title_container} data-aos="fade-up" data-aos-duration="1200">
                <img className={styles.image} src={increase} alt='increase' />
                <h1>Most popular coins stats</h1>
                <img className={styles.image} src={decrease} alt='decrease' />
            </div>
            {
                data ? <>
                <div id={styles.results_container}>
                    {Input}
                    <CoinsTable {...coinsTableProps} />
                </div>
                <div id={styles.scroll_top_container}>
                    <ScrollToTop />    
                </div>
                </>
                :
                err ? <ErrorAlert />
                :
                <Loader />
            }    
        </div>
    )
}

export default Coins