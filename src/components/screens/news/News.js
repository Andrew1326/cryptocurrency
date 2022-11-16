import React from 'react';
import styles from './news.module.css';
import ScrollToTop from '../../shared/scrollToTop/ScrollToTop';
import stats from '../../../images/stats.png';
import NewsCards from './newsCards/NewsCards';
import useFetch from '../../../hooks/useFetch';
import Loader from '../../shared/loader/Loader';
import { ErrorAlert } from '../../shared/alerts/Alerts';
import { useSettings } from '../../../contexts/SettingsContext';
import { createUrl } from '../../../App';
import { NEWS_URL } from '../../../constants';

const News = () => {

    const { newsLimit, newsType } = useSettings()

    const newsUrl = createUrl(`${NEWS_URL}/${newsType}`, {
        limit: newsLimit
    });

    const { data, err } = useFetch(newsUrl, [newsType, newsLimit])

    const newsCardsProps = {data};
    
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
                err ? <ErrorAlert />
                :
                <Loader />
            }
        </div>
    )
}

export default News