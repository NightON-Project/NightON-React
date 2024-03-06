import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { auth, provider } from "./config";
import Home from './Home';
import { signInWithPopup } from "firebase/auth";
import google from './google.png';

function SignIn() {
    const [value, setValue] = useState('');

    const handleClick = () => {
        signInWithPopup(auth, provider)
            .then((data) => {
                if (data.user) {
                    setValue(data.user.email);
                    localStorage.setItem("email", data.user.email);
                } else {
                    console.log("L'authentification a été annulée par l'utilisateur.");
                }
            })
            .catch((error) => {
                console.error("Erreur d'authentification :", error);
            });
    }

    useEffect(() => {
        setValue(localStorage.getItem('email'));
    }, []);

    return (
        <div className={styles.component}>
            {value ? <Home /> :
                <button onClick={handleClick}>
                    <img src={google} alt='google_icon'/>
                    <span>Se connecter avec Google</span>
                </button>
            }
        </div>
    );
}

export default SignIn;
