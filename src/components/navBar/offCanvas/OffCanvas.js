import React from 'react';
import { Form, Offcanvas, Row, Col, Button } from 'react-bootstrap';
import { fiats, limits, newsTypes } from './formData';
import styles from './offCanvas.module.css';
import { useForm } from 'react-hook-form';
import CrossIcon from './CrossIcon';
import { useTheme } from '../../../contexts/ThemeContext';
import { useSettingsUpdate } from '../../../contexts/SettingsContext';

const OffCanvas = ({ show, handleClose }) => {

    const updateSetting = useSettingsUpdate()
    const theme = useTheme()
    const { register, handleSubmit } = useForm();

    //* form submit
    const onSubmit = data => updateSetting(data);

    return (
        <Offcanvas id={theme === 'dark' ? styles.offcanvas_dark : styles.offcanvas_light} show={show} onHide={handleClose}>
            <Offcanvas.Header>
                <Offcanvas.Title><h3>Settings</h3></Offcanvas.Title>
                <div id={styles.cross_icon} onClick={handleClose}>
                    <CrossIcon theme={theme} />
                </div>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                        <Col>
                        <Form.Group>
                            <Form.Label>Fiat currency</Form.Label>
                            <Form.Select {...register('fiatCurrency')}>
                                {
                                    fiats.map((el, i) => <option key={i} value={el.name}>{el.name}</option>)
                                }
                            </Form.Select>
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group>
                            <Form.Label>News type</Form.Label>
                            <Form.Select {...register('newsType')}> 
                                {
                                    newsTypes.map((el, i) => <option key={i} value={el}>{el}</option>)
                                }
                            </Form.Select>
                        </Form.Group>
                        </Col>
                    </Row>
                    <Row id={styles.second_row}>
                        <Col>
                        <Form.Group>
                            <Form.Label>Coins limit</Form.Label>
                            <Form.Select {...register('coinsLimit')}>
                                {
                                    limits.map((el, i) => <option key={i} value={el}>{el}</option>)
                                }
                            </Form.Select>
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group>
                            <Form.Label>News limit</Form.Label>
                            <Form.Select {...register('newsLimit')}>
                                {
                                    limits.map((el, i) => <option key={i} value={el}>{el}</option>)
                                }
                            </Form.Select>
                        </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Button onClick={handleClose} type='submit' id={styles.save_btn}>save changes</Button>
                    </Row>
                </Form>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default OffCanvas