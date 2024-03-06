import React, {useState} from 'react';

function Index() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  //Mise à jour constante des données entrées par l'utilisateur
  const handleChange = e => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  };

  //Envoie de la requête !
  const handleSubmit = async e => {
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
    <div className="registration-container">
      <h1>Inscription</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nom :</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Adresse e-mail :</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Mot de passe :</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
}

export default Index;
