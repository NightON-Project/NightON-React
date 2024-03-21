import React, { useState } from "react";
import styles from "./index.module.scss";
import { Link, useLocation } from "react-router-dom";
import fiest from './fiest.png';
import GoogleSign from './googleSign';
import party from './party.jpeg';

function SignIn() {
    const location = useLocation();
    const [formData, setFormData] = useState({
        nom: "",
        prenom: "",
        email: ""
    });
    const [formErrors, setFormErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        const errors = {};
        if (!formData.nom.trim()) errors.nom = "Veuillez saisir votre nom.";
        if (!formData.prenom.trim()) errors.prenom = "Veuillez saisir votre prénom.";
        if (!formData.email.trim()) errors.email = "Veuillez saisir votre email.";
        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            try {
                const response = await fetch("https://57e1-46-193-56-9.ngrok-free.app/register", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        firstname_user: formData.nom,
                        lastname_user: formData.prenom,
                        email_user: formData.email
                    })
                });
                const data = await response.json();

                if (response.ok) {
                    // setFormData({ nom: "", prenom: "", email: "" });
                    setMessage("Inscription réussie !");
                    setTimeout(() => {
                        setMessage("");
                        window.location.href = "/login";
                    }, 3000);
                } 
                else {
                    const data = await response.json();
                    if (response.status === 500) {
                        setMessage(data.detail || "Une erreur interne du serveur est survenue.");
                    } else {
                        setMessage(data.message || "Une erreur est survenue lors de l'inscription. Ok ?");
                    }
                }
            } catch (error) {
                console.error("Erreur lors de la requête POST :", error);
                setMessage("Un compte avec cette adresse mail existe déjà !");
            } finally {
                setSubmitting(false);
            }
        } else {
            setSubmitting(false);
        }
    };

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

                    <form onSubmit={handleSubmit}>
                        {formErrors.nom && <p className={styles.error}>{formErrors.nom}</p>}
                        <input type="text" id="nom" name="nom" placeholder="Nom" value={formData.nom} onChange={handleChange} />
                        {formErrors.prenom && <p className={styles.error}>{formErrors.prenom}</p>}
                        <input type="text" id="prenom" name="prenom" placeholder="Prénom" value={formData.prenom} onChange={handleChange} />
                        {formErrors.email && <p className={styles.error}>{formErrors.email}</p>}
                        <input type="email" id="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                        <p>En cliquant sur "Inscription", vous acceptez nos <span><Link to="#">CGU</Link></span></p>
                        <input type="submit" value={submitting ? "En cours..." : "Inscription"} disabled={submitting} />
                    </form>
                    {message && <p className={`${styles.message} ${message === "Inscription réussie !" ? styles.successMessage : styles.errorMessage}`}>{message}</p>}
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
