import { NavLink } from "react-router-dom";
import UserMenu from "../UserMenu";
import styles from './AppBar.module.css';

export default function AppBar(params) {
    
    return (
        <header className={styles.header}
 >
            <nav>
                <NavLink exact
                    to="/register"
                    className={styles.link}
                    activeClassName={styles.activeLink}
                >
                    Register
                </NavLink>

                <NavLink exact
                    to="/login"
                    className={styles.link}
                    activeClassName={styles.activeLink}
                >
                    Login
                </NavLink>

                 <NavLink exact
                    to="/contacts"
                    className={styles.link}
                    activeClassName={styles.activeLink}
                >
                    Contacts
                </NavLink>
                
                
            </nav>
            <UserMenu />

        </header>
        
    );
}