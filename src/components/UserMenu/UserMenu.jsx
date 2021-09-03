// import { useSelector, useDispatch } from 'react-redux';
import styles from './UserMenu.module.css';


export default function UserMenu() {

    return (
        <div className={styles.userMenu}>
            <p>User email: { }</p>
            <button type='submit' className={styles.button} >Logout</button>
        </div>
    )
}