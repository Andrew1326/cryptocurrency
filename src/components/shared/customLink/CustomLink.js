import React from "react";
import { Link } from 'react-router-dom';
import { useTheme } from "../../../contexts/ThemeContext";
import styles from './customLink.module.css';

export default function CustomLink({to, children}) {
    const theme = useTheme()

    return (
        <Link className={theme === 'dark' ? styles.link_dark : styles.link_light} to={to}>{children}</Link>
    )
}