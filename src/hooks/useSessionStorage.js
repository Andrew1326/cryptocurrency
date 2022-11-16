import { useState, useEffect } from 'react';

const useSessionStorage = (key, defaultValue) => {

    const [value, setValue] = useState(() => JSON.parse(sessionStorage.getItem(key)) || defaultValue)

    //* when changes
    useEffect(() => {
        sessionStorage.setItem(key, JSON.stringify(value));
    }, [key, value])

    return [value, setValue]
}

export default useSessionStorage