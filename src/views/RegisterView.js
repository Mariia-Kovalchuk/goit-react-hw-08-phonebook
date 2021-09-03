import { useState } from "react";
import styles from './Views.module.css'


export default function LoginView() {
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    const [name, setName]= useState('')

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
            
            case 'name':
                setName(value);
                break;

            default:
                return;
        }

    };

    return (
        <div className={styles.container}>
            {/* <h1>Register Page</h1> */}

            <form onSubmit={handleSubmit} autoComplete="off">
                 <label >
                    Name
                    <input
                        type="name"
                        name="name"
                        value={name}
                        onChange={handleChange} className={styles.input}
                    />
                </label>
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

                <button type="submit" className={styles.button}>Register</button>
            </form>
        </div>
    );

};