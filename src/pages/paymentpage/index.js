import React, { useState } from 'react';
import './payment.css';
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
                <br></br>
            <br></br>
            </form>
            <button className="submit">
                <div className="movement">
                <svg className="fleche" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Logo" x="10" y="10">
                    <path id="Vector" d="M11.3333 7.99992H2M11.3333 7.99992L7.33333 11.9999M11.3333 7.99992L7.33333 3.99992M14 3.33325V12.6666" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                </svg>

                  <span className='straight'>S'inscrire</span>
              </div>
            </button>
            </div>
            <div className='square-container'>
                <div className="white-square">
                    <div className='Id'>
                        <h3 className='identity'>
                            Papier d'identité
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
