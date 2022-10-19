import React from 'react';
import styles from './home.module.css';
import btn_coin from '../../../images/btc_coin.png';
import eth_coin from '../../../images/eth_coin.png';
import sol_coin from '../../../images/sol_coin.png';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Home() {

    const navigate = useNavigate()

    const images = [
        {src: btn_coin, alt: 'btn coin', duration: '700'},
        {src: eth_coin, alt: 'eth coin', duration: '1400'},
        {src: sol_coin, alt: 'sol coin', duration: '2100'}
    ]

    return (
        <>
        <div id={styles.container}>
            <h1  data-aos="zoom-in" data-aos-duration="1200">Welcome, to app CoinsPlace.<br />In this app you can easily find information about cryptocurrency</h1>
            <div id={styles.images_container}>
                {
                    images.map((el, i) => <img data-aos="fade-down-right" data-aos-duration={el.duration} className={styles.image} key={i} src={el.src} alt={el.alt} />)
                }
            </div>
            <div id={styles.btn_container}>
                <Button size="lg" onClick={() => navigate('/coins')}>view coins</Button>
            </div>
        </div>
        </>
    )
}