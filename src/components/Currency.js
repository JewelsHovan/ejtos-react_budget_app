import React, {useContext, useState} from 'react';
import {AppContext} from '../context/AppContext';
import Dropdown from 'react-bootstrap/Dropdown';

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);
    const [selectedCurrency, setSelectedCurrency] = useState(currency);

    const handleChange = (eventKey, event) => {
        setSelectedCurrency(eventKey);
        
        dispatch({
            type : "CHG_CURRENCY",
            payload : eventKey,
        });
    };

    const getCurrencyName = (symbol) => {
        switch(symbol) {
            case "$":
                return "Dollar";
            case "£":
                return "Pound";
            case "€":
                return "Euro";
            case "₹":
                return "Ruppee";
            default:
                return "";
        }
    };

    return (
        <div style={{backgroundColor: 'lightgreen'}}>
            <Dropdown onSelect={handleChange}>
                <Dropdown.Toggle variant='transparent' id="dropdown-basic">
                    Currency ({selectedCurrency} {getCurrencyName(selectedCurrency)})
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item eventKey="$">$ Dollar</Dropdown.Item>
                    <Dropdown.Item eventKey="£">£ Pound</Dropdown.Item>
                    <Dropdown.Item eventKey="€">€ Euro</Dropdown.Item>
                    <Dropdown.Item eventKey="₹">₹ Ruppee</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};

export default Currency;