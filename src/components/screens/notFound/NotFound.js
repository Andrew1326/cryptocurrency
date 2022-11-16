import React from 'react';
import { Button } from 'react-bootstrap';
import bitcoin from '../../../images/bitcoin.png';
import styles from './notFound.module.css';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {

    const navigate = useNavigate()

    return (
        <>
        <div id={styles.container}>
            <div id={styles.title_container}>
                <h1><span>4</span><img id={styles.img} src={bitcoin} alt="bitcoin" /><span>4</span></h1>
            </div>
            <div id={styles.text_container}>
                <h2>{('page not found').toUpperCase()}</h2>
            </div>
            <div id={styles.home_btn_container}>
                <Button variant='warning' size='lg' onClick={() => navigate('/')}>go home</Button>
            </div>
        </div>
        </>
    )
}

export default NotFound