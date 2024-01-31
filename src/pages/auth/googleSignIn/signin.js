import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import {auth,provider} from "./config";
import Home from './Home';
import { signInWithPopup } from "firebase/auth";

function SignIn(){
    const [value,setValue] = useState('')
    const handleClick =()=>{
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            localStorage.setItem("email",data.user.email)
        })
    }

    useEffect(()=>{
        setValue(localStorage.getItem('email'))
    })

    return (
        <div className={styles.bloc}>
            {value?<Home />:
                <button onClick={handleClick}>Se connecter avec Google</button>
            }
        </div>
    );
}

export default SignIn;