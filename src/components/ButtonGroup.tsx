import React, { useState, useRef, useEffect } from 'react';


const ButtonGroup = () => {
    const [inputValue, setInputValue] = useState("");
    const [visible, setVisible] = useState(false);
    const inputRef = useRef<any>(null);
    const formRef = useRef<any>(null);

    const inputText = (event: any) => {
        setInputValue(event.target.value);
   }

   const handleSubmit = (e: any) => {
    e.preventDefault();
    setVisible(true);
    // formRef.current.reset();
    // setInputValue("");
}

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div className="container">
            <form onSubmit={handleSubmit}
                  ref={formRef}>
                <input 
                    type="text" 
                    ref={inputRef} 
                    value={inputValue} 
                    onChange={inputText} 
                    className="input__component"
                />
                <button type="submit" className="submit-btn" onClick={handleSubmit}>Submit</button>
            </form>
        {visible && <><p className="input-val">{inputValue}</p> </>}
        </div> 
    )
}
 

export default ButtonGroup;