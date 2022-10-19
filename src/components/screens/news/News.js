import React from 'react';
import styles from './news.module.css';
import ScrollToTop from '../../shared/scrollToTop/ScrollToTop';
import stats from '../../../images/stats.png';
import NewsCards from './newsCards/NewsCards';
import { useTheme } from '../../../contexts/ThemeContext';
import { useFetch } from '../../../hooks/useFetch';
import CustomAlert from '../../shared/customAlert/customAlert';
import Loader from '../../shared/loader/Loader';
import { REQUEST_FAILED_HEADING, REQUEST_FAILED_TEXT } from '../../../constants';

export default function News({newsUrl}) {

    const { data, err } = useFetch(newsUrl)

    const theme = useTheme()

    // props
    const newsCardsProps = {data, theme};
    const customAlertProps = {heading: REQUEST_FAILED_HEADING, text: REQUEST_FAILED_TEXT};
    
    return (
        <div id={styles.container}>
            <div id={styles.title_container} data-aos="fade-up" data-aos-duration="1200">
                <h1>All types of news</h1>
                <img id={styles.image} src={stats} alt='stats' />
            </div>
            {
                data ? <>
                <NewsCards {...newsCardsProps} />
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