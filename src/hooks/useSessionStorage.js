import { useState, useEffect } from 'react';

export const useSessionStorage = (key, defaultValue) => {

    const [value, setValue] = useState(() => JSON.parse(sessionStorage.getItem(key)) || defaultValue)

    // when changes
    useEffect(() => {
        sessionStorage.setItem(key, JSON.stringify(value));
    }, [key, value])

    return [value, setValue]
}