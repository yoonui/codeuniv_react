import { Link } from 'react-router-dom';
import styles from './Menu.module.css';

function Menu(){
    return (
        <div className={styles.menu}>
            <div>
                <Link to="/">홈</Link>
            </div>
            <div>
                <Link to="/explore">탐색</Link>
            </div>
            <div>
                <Link to="/subscription">구독</Link>
            </div>
        </div>
    );
}

export default Menu;