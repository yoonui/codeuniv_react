import Layout from '../components/shared/Layout';
import styles from './Subscription.module.css';

function Subscription(){
    return (
        <Layout activeMenu="subscription">
            <div className={styles.container}>구독</div>
        </Layout>
    );
}

export default Subscription;