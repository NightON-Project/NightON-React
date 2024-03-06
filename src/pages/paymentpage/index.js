import React, { useState } from 'react';
import './index.css';
import fiest from '../../assets/img/fiest.svg';

function Index() {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [adresse, setAdresse] = useState('');
    const [ville, setVille] = useState('');
    const [postcode, setPostcode] = useState('');
    const [acceptTerms, setAcceptTerms] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Logique de soumission du formulaire
    };
    
    const handleVerificationSubmit = (event) => {
        event.preventDefault();
        // Logique de soumission du code de vérification
    };

    return (
        <div className='container'>
            <div className='register'>
                <form onSubmit={handleSubmit}>
                 <input
                    type="text"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    placeholder="Nom"
                />
                <input
                    type="text"
                    value={prenom}
                    onChange={(e) => setPrenom(e.target.value)}
                    placeholder="Prénom"
                />
                <input
                    type="text"
                    value={birthdate}
                    onChange={(e) => setBirthdate(e.target.value)}
                    placeholder="Date de naissance"
                />
                <input
                    type="text"
                    value={adresse}
                    onChange={(e) => setAdresse(e.target.value)}
                    placeholder="Adresse"
                />
                <input
                    type="text"
                    value={ville}
                    onChange={(e) => setVille(e.target.value)}
                    placeholder="Ville"
                />
                <input
                    type="text"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                    placeholder="Code postal"
                />
                <label>
                    <input
                        type="checkbox"
                        checked={acceptTerms}
                        onChange={(e) => setAcceptTerms(e.target.checked)}
                    />
                    J'accepte les termes et conditions
                </label>
                <button type="submit">Soumettre</button>
            </form>
            </div>
            <div className='payment-container'></div>
        </div>
    );
}

export default Index;
