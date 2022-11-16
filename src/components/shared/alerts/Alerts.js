import React from 'react';
import { REQUEST_FAILED_TEXT, REQUEST_FAILED_HEADING, OFFLINE_HEADING, OFFLINE_TEXT } from '../../../constants';
import CustomAlert from '../customAlert/customAlert';
import styles from './alerts.module.css';

const Responsive = ({ children }) => <div className={styles.alert_container}>{children}</div> 

export const ErrorAlert = () => {
    const props = { heading: REQUEST_FAILED_HEADING, text: REQUEST_FAILED_TEXT, variant: 'warning' };

    return (
        <Responsive>
            <CustomAlert {...props} />
        </Responsive>
    )
}

export const OfflineAlert = () => {
    const props = { heading: OFFLINE_HEADING, text: OFFLINE_TEXT, variant: 'warning' };
    
    return (
        <Responsive>
            <CustomAlert {...props} />
        </Responsive>
    )
}