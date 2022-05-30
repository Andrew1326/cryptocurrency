import React from "react";
import CoinsTable from "./CoinsTable";
import styles from './coins.module.css';
import ScrollToTop from "../../shared/scrollToTop/ScrollToTop";
import increase from '../../../images/increase.png';
import decrease from '../../../images/decrease.png';
import { useTheme } from '../../../contexts/ThemeContext';
import { useFetch } from "../../../hooks/useFetch";
import { useInput } from "../../../hooks/useInput";
import Loader from '../../shared/loader/Loader';
import CustomAlert from '../../shared/customAlert/customAlert'
import { REQUEST_FAILED_HEADING, REQUEST_FAILED_TEXT } from '../../../constants';

export default function Coins({fiatCurrency, coinsUrl}) {

    const { data, err } = useFetch(coinsUrl)

    const [value, Input] = useInput()
    const theme = useTheme()

    // props
    const coinsTableProps = {data, value, theme, fiatCurrency};
    const customAlertProps = {heading: REQUEST_FAILED_HEADING, text: REQUEST_FAILED_TEXT};

    return (
        <div id={styles.container}>
            <div id={styles.title_container} data-aos="fade-up" data-aos-duration="700">
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
                err ? <CustomAlert {...customAlertProps} />
                :
                <Loader />
            }    
        </div>
    )
}