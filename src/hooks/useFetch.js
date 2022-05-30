import { useState, useEffect } from "react";
import axios from 'axios';

export const useFetch = url => {

    const [data, setData] = useState()
    const [err, setErr] = useState()

    // fetch data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(url);
                setData(res.data);
                
            } catch(err) {
                setErr(err.message);
            }
        };

        url && fetchData()
    }, [url])

    return { data, err }
}