import React, { useState } from 'react';
import './register.css';
import { FaFacebook } from 'react-icons/fa';

function Index() {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Ici vous pouvez ajouter le code pour gérer l'envoi des données du formulaire
    console.log(nom, prenom, email, acceptTerms);
  };

  return (
    <div className="container">
      <div className="register">
        <header className="register-header">
          <h1>Que la fête commence !!!</h1>
          <p>Rejoins Nighton, réserve ton logement et commence à faire la fête dès maintenant !</p>
          <button className='google'>Sign in with Google</button>
          <button className='facebook'></button>
          <div className='alignement'> 
        <hr className='line1'/> or <hr className='line2'/> 
        </div>
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
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <label>
              <input
                type="checkbox"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}/>
              J'accepte les termes et conditions
            </label>
            <button className='submit'>S'inscrire</button>
          </form>
        </header>
      </div>
      {/* Ajout de la nouvelle div avec le carré blanc */}
      <div className="square-container">
        <div className="white-square"></div>
      </div>
    </div>
  );
}

export default Index;
