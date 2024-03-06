import React from "react";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import fiest from './fiest.png';
import GoogleSign from './googleSign';
import party from './party.jpeg';

function SignIn() {

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
                        <input type="text" id="nom" name="nom" placeholder="Nom" required />
                        <input type="text" id="prenom" name="prenom" placeholder="Prénom" required />
                        <input type="email" id="email" name="email" placeholder="Email" required />
                        <p>En cliquant sur "Inscripton", vous acceptez nos <span><Link to="#">CGU</Link></span></p>
                        <input type="submit" value="Inscription" />
                    </form>
                    <span className={styles.deja}>Vous êtes déjà inscrit ? </span><Link to="/login">Connexion</Link>
                </div>
                <div className={styles.SblocRight}>
                    <img src={party} alt='party'/>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
