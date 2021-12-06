import { useState } from 'react';

function Day_4(){
    const [number, setNumber] = useState(0);

    function btn_plus(){
        setNumber(number + 1);
    }
    function btn_minus(){
        setNumber(number - 1);
    }
    function btn_multi(){
        setNumber(number * 2);
    }

    return (
        <div>
            <div>값 : {number}</div>
            <button onClick={btn_plus}>+1</button>
            <button onClick={btn_minus}>-1</button>
            <button onClick={btn_multi}>*2</button>
        </div>
    );
}

export default Day_4;