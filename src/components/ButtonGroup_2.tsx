import React, { useState } from 'react';

const ButtonGroup_2 = () => {
    const [count, setCount] = useState(0);
    
    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <div className="container">
          <button onClick={handleClick} className="count-btn">{count}</button>
          <div className="count-multiply">{count * 2}</div>
        </div>
      );
    }

export default ButtonGroup_2;