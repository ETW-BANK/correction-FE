import React, { useState } from 'react';
import style from '../style.module.css'

const useSelection = (initialState = null) => {
    const [selected, setSelected] = useState(initialState);

    const handleSel = (value) => {
        setSelected(value);
    };

    return [selected, handleSel];
};

const Toggle = ({ value, selected, handleSel, handleChoice }) => {
    const buttonStyle = `${style.formButton} ${selected ? style.selected : ''}`

    const handleClick = () => {
        handleSel(value);
        handleChoice(value);
    }

    return (
        //Bootstrap knapp borde kanske ändra 
        <button type="button" className={buttonStyle} onClick={handleClick}>{value} </button>
    )
}
export { useSelection, Toggle };