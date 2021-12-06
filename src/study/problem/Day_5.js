import {useState} from 'react';
import Day_5_print from './Day_5_print';

function Day_5(){
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
            <Day_5_print num={number} />
            <button onClick={btn_plus}>+1</button>
            <button onClick={btn_minus}>-1</button>
            <button onClick={btn_multi}>*2</button>
        </div>
    );
}

export default Day_5;