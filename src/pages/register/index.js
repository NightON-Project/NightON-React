import React, { useState } from 'react';
import './register.css';
import fiest from './fiest.svg';


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
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    //Mise à jour constante des données entrées par l'utilisateur
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    //Envoie de la requête !
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });


            //Gestion de la réponse !
            if (response.ok) {
                console.log(response.body);
            } else {
                const errorResponse = await response.json(); // Récupérer le JSON renvoyé par le serveur
                console.log(errorResponse.message); // Afficher le message d'erreur côté client
            }
        } catch (error) {
            console.error('Erreur lors de la requête :', error);
        }
    };

  return (
    <div className="container">
      <div className="register">
        <div className="box2">
          <img className='rectangle' alt='rectangle' src='Rectangle.png'/>
        </div>
        <header className="register-header">
          <h1>Que la fête commence !!!</h1>
          <p>Rejoins Nighton, réserve ton logement et commence à faire la fête dès maintenant !</p>
          <button>Sign in with Google</button>
          <div>OR</div>
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
                onChange={(e) => setAcceptTerms(e.target.checked)}
              />
              J'accepte les termes et conditions
            </label>
            <button type="submit">S'inscrire</button>
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