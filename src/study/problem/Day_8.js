import {useState} from 'react';
import styles from './Day_8.module.css';

function Day_8(){
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
        <div className={styles.all}>
            {num ? <div className={styles.true_box}>true 입니다!</div> : <div className={styles.false_box}>false 입니다!</div>}
            <br/><button onClick={btnClick}>색바꾸기</button>
        </div>
    );
}

export default Day_8;