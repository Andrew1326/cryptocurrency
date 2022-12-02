import React from 'react';
import styles from './newsCard.module.css';
import { Card } from 'react-bootstrap';
import { useTheme } from '../../contexts/ThemeContext';

const NewsCard = ({ data }) => {

    const theme = useTheme()

    //* markup
    const createMarkup = html => ({__html: html});

    return (
        <Card className={styles.card} bg={theme} key={data.id}>
            <Card.Img variant="top" loading='lazy' src={data.imgURL} />
            <Card.Header>
                <Card.Title>{data.title}</Card.Title>
            </Card.Header>
            <Card.Body>
                <Card.Text dangerouslySetInnerHTML={createMarkup(data.description)}></Card.Text>
            </Card.Body>
            <Card.Footer className={styles.card_footer}>
                <a href={data.link} target='_blank' rel="noreferrer">read more</a>
            </Card.Footer>
        </Card>
    )
}

export default NewsCard