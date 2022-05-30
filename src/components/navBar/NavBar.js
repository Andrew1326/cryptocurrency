import React, { useState } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import CustomLink from '../shared/customLink/CustomLink';
import styles from './navBar.module.css';
import OffCanvas from './offCanvas/OffCanvas';
import SettingsIcon from './offCanvas/SettingsIcon';
import { useTheme, useThemeUpdate } from '../../contexts/ThemeContext';
import { ReactComponent as SunIcon } from '../../images/sun.svg';
import { ReactComponent as MoonIcon } from '../../images/moon.svg';

export default function NavBar(props) {

    const theme = useTheme()
    const themeUpdate = useThemeUpdate()
    
    const [show, setShow] = useState(false)

    // offcanvas show && close
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    // theme changing
    const handleThemeUpdate = () => themeUpdate();
 
    // props
    const customOffcanvasProps = {show, handleClose, theme, ...props}

    return (
        <Navbar fixed='top' collapseOnSelect expand="lg" bg={theme} variant={theme} id={styles.navbar}>
            <Container>
                <OffCanvas {...customOffcanvasProps} />
                <div className={styles.icon} onClick={handleShow}>
                    <SettingsIcon theme={theme} />
                </div>
            <div id={styles.links_container}>
            <CustomLink to='/'><i>CoinsPlace</i></CustomLink>
            <CustomLink to='/coins'>Coins</CustomLink>
            <CustomLink to='/news'>News</CustomLink>
            </div>
            <div className={styles.icon} onClick={handleThemeUpdate}>
                {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </div>
            </Container>
        </Navbar>
    )
}