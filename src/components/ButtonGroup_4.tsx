import React, { useState, useRef } from 'react';

const ButtonGroup_4 = () => {
    const [inputValue, setInputValue] = useState("");
    const [visible, setVisible] = useState(true);
    const inputRef = useRef<any>(null);
    const [count, setCount] = useState(100);
    const [fontSize, setFontSize] = useState(16);

    const inputText = (event: any) => {
        setInputValue(event.target.value);
        console.log("Input change");
    }

    const handleClick = (e: any) => {
        e.preventDefault();
        setCount(count + 1);
        setFontSize(fontSize + 1);
        console.log("Changing count");
    }

    return (
        <div className="container">
            <form action="">
            <button onClick={handleClick} className="count-btn-2">+</button>
            <h3 className="counter" 
            style={{ fontSize: fontSize }}>Count: {count}</h3>
            <br />
            <input type="text" 
                    ref={inputRef} 
                    value={inputValue} 
                    onChange={inputText} 
                    className="input__component"
            />
            {visible && <><p className="input-val">{inputValue}</p> </>}
            </form>
        </div>
    )
}

export default ButtonGroup_4;