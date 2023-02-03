import React, { useState, useRef } from 'react';

const ButtonGroup_3 = () => {

    const [value, setValue] = useState("");
    // const [colour, setColour] = useState();
    // const colorRef = useRef("");

    const handleChoice = (e: any) => {
        setValue(e.target.value);
    }

    //const handleClick = () => {
    //}

    return (
        <div className="container">
            <button className="choose-btn">+</button>
            <select value={value} onChange={handleChoice} className="dropdown-menu">
                <option className="empty" value={""}>Colours</option>
                <option className="sunset" value={"rgb(241, 157, 66)"}>pumpkin</option>
                <option className="water" value={"rgb(75, 227, 207)"}>water</option>
                <option className="rose" value={"rgb(208, 94, 176)"}>rose</option>
            </select>
            <div className="selected-color" style={{backgroundColor: value}}></div>
        </div>
    )
}
 
export default ButtonGroup_3;
