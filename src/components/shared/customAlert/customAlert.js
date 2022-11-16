import React from "react";
import { Alert } from "react-bootstrap";
import styles from './customAlert.module.css';

const CustomAlert = ({ heading, text, ...rest }) => {
    return (
        <Alert {...rest} id={styles.alert}>
            <Alert.Heading>{heading}</Alert.Heading>
            <h4>{text}</h4>
        </Alert>
    )
}

export default CustomAlert