import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { ReactComponent as ScrollIcon } from '../../../images/scroll_icon.svg';

const ScrollToTop = () => {

    const [scrollNeeded, setScrollNeeded] = useState(false)

    //* scroll to top
    useEffect(() => {
        const options = {
            top: 0,
            behavior: 'smooth'
        };
        window.scrollTo(options);

        setScrollNeeded(false)

    }, [scrollNeeded])

    return <Button onClick={() => setScrollNeeded(true)}><ScrollIcon /></Button>
}

export default ScrollToTop