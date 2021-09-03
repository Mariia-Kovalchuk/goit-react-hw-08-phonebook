import { useState } from "react";
import styles from './Views.module.css'

export default function LoginView() {
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')

    const handleSubmit = () => {
    
    }
    
    const handleChange = e => {
        const { name, value } = e.currentTarget;
        switch (name) {
            case 'email':
                setEmail(value);
                break;

            case 'password':
                setPassword(value);
                break;

            default:
                return;
        }

    };

    return (
        <div className={styles.container}>
            {/* <h1>Login Page</h1> */}

            <form onSubmit={handleSubmit} autoComplete="off">
                <label >
                    Email
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </label>

                <label >
                    Password
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </label>

                <button type="submit" className={styles.button}>Login</button>
            </form>
        </div>
    );

};