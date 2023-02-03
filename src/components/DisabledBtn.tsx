import React, { useState, useEffect } from 'react';

const DisabledBtn = () => {
    // const [load, setLoad] = useState(false);

    const handleClick = (e: any) => {
        // setTimeout(function(){
            e.currentTarget.disabled = true;
            console.log('button clicked');
        // }, 5000);
      };

    return (
        <div className="container">
            <button 
            onClick={handleClick}
            disabled={true} 
            className="submit-btn">Submit</button>
        </div>
    )

}

export default DisabledBtn;