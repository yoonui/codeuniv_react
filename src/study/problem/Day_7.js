import {useState} from 'react';

function Day_7(){
    const [num, setNum] = useState(0);

    function btnClick(){
        if(num === 0){
            setNum(1);
        }
        else {
            setNum(0);
        }
    }
    
    return (
        <div>
            <button onClick={btnClick}>True?</button>
            {num === 1 && <div>True!</div>}
        </div>
    );
}

export default Day_7;