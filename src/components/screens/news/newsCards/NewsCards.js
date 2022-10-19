import React from 'react';
import styles from './newsCards.module.css';
import { Card } from 'react-bootstrap';

export default function NewsCards({data, theme}) {

    // filtering news
    data = data.news.filter(el => !el.source.includes('Reddit'));

    //markup
    const createMarkup = html => {
        return {__html: html}
    };

    return (
        <div id={styles.news_cards_container}>
                {
                data.map(el => <Card className={styles.card} bg={theme} key={el.id}>
                    <Card.Img variant="top" loading='lazy' src={el.imgURL} />
                    <Card.Header>
                        <Card.Title>{el.title}</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text dangerouslySetInnerHTML={createMarkup(el.description)}></Card.Text>
                    </Card.Body>
                    <Card.Footer className={styles.card_footer}>
                        <a href={el.link} target='_blank' rel="noreferrer">read more</a>
                    </Card.Footer>
                </Card>)
                }
        </div>
    )
}