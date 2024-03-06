import React from "react";
import styles from "../auth/googleSignIn/index.module.scss";
import { Link } from "react-router-dom";
import fiest from '../auth/googleSignIn/fiest.png';
import GoogleSign from '../auth/googleSignIn/googleSign';
import party2 from './party2.jpeg';

function LogIn() {

    return (
        <div className={styles.main}>
            <div className={styles.bloc}>
                <div className={styles.SblocLeft}>
                    <h2>
                        <img src={fiest} alt='emoji_fiesta'/>
                        <strong> Que la fête commence !!! </strong>
                    </h2>
                    <p className={styles.rejoins}>Rejoignez Nighton, réservez votre logement et commencez à faire la fête dès maintenant !</p>
                    <span><GoogleSign/></span>
                    <div className={styles.traits}> 
                        <hr/> <span>OU</span> <hr/> 
                    </div>

                    <form action="/submit" method="post">
                        <input type="email" id="email" name="email" placeholder="Email" required />
                        <p>En cliquant sur "Connexion", vous acceptez nos <span><Link to="#">CGU</Link></span></p>
                        <input type="submit" value="Connexion" />
                    </form>
                    <span className={styles.deja}>Pas encore inscrit ? </span><Link to="/signin">Inscription</Link>
                </div>
                <div className={styles.SblocRight}>
                    <img src={party2} alt='party2'/>
                </div>
            </div>
        </div>
    );
}

export default LogIn;
