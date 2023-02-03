import React, { useState, useRef } from 'react';

const ButtonGroup_7 = () => {

    const box = useRef<any>();

    const handleClick = () => {
        box.current.style.position = "absolute";
        box.current.style.top = "0";
        box.current.style.right = "0";
        box.current.innerHTML = "Esmu stūrī";
    }

    return (
        <div className="container container-5 container-7">
            <button className="change-btn" onClick={handleClick}>Send div to corner</button>
            <div ref={box} className="box">{}</div>
        </div>
    )
}

export default ButtonGroup_7;