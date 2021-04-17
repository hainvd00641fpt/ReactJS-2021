import React, { useState } from 'react';
import './ColorBox.scss';

function ColorBox() {
    
    const [color, setColor] = useState( () => {
        const initColor = localStorage.getItem('box-color') || 'pink';
        return initColor;
    });

    function getRandomColor(){
        const listColor = ['green', 'blue', 'red', 'orange', 'yellow'];
        const randomIndex = Math.trunc(Math.random()*5);
        return listColor[randomIndex];
    }

    function handleBoxColor() {
        const newColor = getRandomColor();
        setColor(newColor);

        localStorage.setItem('box-color', newColor);
    }

    return (
        <div className="color-box" 
        style={{backgroundColor: color}}
        onClick={handleBoxColor}
        >
            Color box
        </div>
    )
}

ColorBox.propTypes = {

}

export default ColorBox

