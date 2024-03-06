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
}

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

        </div>
      )