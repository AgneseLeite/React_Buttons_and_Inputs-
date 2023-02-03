import React, { useRef } from 'react';

const ButtonGroup_6 = () => {

    const box = useRef(null);

    const cloneElement = () => {
        if (box.current) {
          const boxElement: any = box.current;
          const clone = boxElement.cloneNode(true);
          boxElement.parentNode?.appendChild(clone);
        }
      }

    return (
        <div className="container container-5">
            <button className="change-btn" onClick={cloneElement}>Clone div</button>
            <div ref={box} className="box"></div>
        </div>
    )
}

export default ButtonGroup_6;