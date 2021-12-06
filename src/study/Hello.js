import styles from './Hello.module.css';

function Hello(){
    // div 태그를 리턴하는 JSX 문법 사용
    return <div className={styles.title}>Hello, React!</div>;
}

export default Hello;