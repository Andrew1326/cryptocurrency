import React, { useMemo } from 'react';
import { Table } from 'react-bootstrap';
import { fiats } from '../../../components/navBar/offCanvas/formData';
import { useSettings } from '../../../contexts/SettingsContext';
import { useTheme } from '../../../contexts/ThemeContext';

export default function CoinsTable({data, value}) {

    const theme = useTheme()
    const { fiatCurrency } = useSettings()

    //* str to lower case
    const toLower = str => str.toLowerCase();

    //* filtering coins
    const filteredData = useMemo(() => {
        return data.coins.filter(el => toLower(el.name).includes(toLower(value)) || toLower(el.symbol).includes(toLower(value)))
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    //* currency symbol
    const currencySymbol = fiats.find(el => el.name === fiatCurrency).symbol;

    return (
            <Table responsive striped bordered hover variant={theme}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>name</th>
                        <th>price</th>
                        <th>price in BTC</th>
                        <th>changes in 1h</th>
                        <th>changes in 1d</th>
                        <th>changes in 1w</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredData.map((coin, index) => <tr key={index}>
                            <td>{coin.rank}</td>
                            <td><img loading='lazy' style={{width: '24px', height: '24px'}} src={coin.icon} alt="icon" />&nbsp;&nbsp;{coin.name}&nbsp;&nbsp;{coin.symbol}</td>
                            <td>{`${currencySymbol}${coin.price.toFixed(2)}`}</td>
                            <td>{coin.priceBtc.toFixed(8)}</td>
                            <td style={{color: coin.priceChange1h > 0 ? '#32D25A' : '#FF3535'}}>{coin.priceChange1h}%</td>
                            <td style={{color: coin.priceChange1d > 0 ? '#32D25A' : '#FF3535'}}>{coin.priceChange1d}%</td>
                            <td style={{color: coin.priceChange1w > 0 ? '#32D25A' : '#FF3535'}}>{coin.priceChange1w}%</td>
                        </tr>)
                    }
                </tbody>
            </Table>
    )
}