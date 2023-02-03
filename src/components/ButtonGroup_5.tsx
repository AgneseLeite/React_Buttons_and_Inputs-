import React, { useRef } from 'react';

const ButtonGroup_5 = () => {

    const box = useRef<any>("");

    const handleClick = () => {
        box.current.style.backgroundColor = "gold";
    }

    return (
        <div className="container container-5">
            <button className="change-btn" onClick={handleClick}>Change colour</button>
            <div ref={box} className="box"></div>
        </div>
    )
}

export default ButtonGroup_5;