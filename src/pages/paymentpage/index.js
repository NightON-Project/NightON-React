import React, { useState } from 'react';
import './payment.css';

function Index() {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [adresse, setAdresse] = useState('');
    const [ville, setVille] = useState('');
    const [postcode, setPostcode] = useState('');
    const [acceptTerms, setAcceptTerms] = useState(false);
    const [identityFile, setIdentityFile] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!nom || !prenom || !birthdate || !adresse || !ville || !postcode || !identityFile) {
            alert("Veuillez remplir toute les champs et télécharger vos documents d'identités.");
            return;
        }
        if (!acceptTerms) {
            alert("Vous devez acceptez les termes et conditions.");
            return;
        }

        const formData = new FormData();
        formData.append('nom', nom);
        formData.append('prenom', prenom);
        formData.append('birthdate', birthdate);
        formData.append('adresse', adresse);
        formData.append('ville', ville);
        formData.append('postcode', postcode);
        formData.append('identityFile', identityFile);

        // A remplacer par lAPI
        fetch('your-api-endpoint', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            alert("Le formulaire a été soumis avec succès !");
        })
        .catch(error => {
            console.error(error);
            alert("Il y a eu une erreur lors de la soumission du formulaire.");
        });
    };

    const handleFileChange = (event) => {
        setIdentityFile(event.target.files[0]);
    };

    return (
        <div className='container'>
            <div className='register'>
                <form onSubmit={handleSubmit}>
                    {/* Form Inputs */}
                    <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} placeholder="Nom" />
                    <input type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} placeholder="Prénom" />
                    <input type="text" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} placeholder="Date de naissance" />
                    <input type="text" value={adresse} onChange={(e) => setAdresse(e.target.value)} placeholder="Adresse" />
                    <input type="text" value={ville} onChange={(e) => setVille(e.target.value)} placeholder="Ville" />
                    <input type="text" value={postcode} onChange={(e) => setPostcode(e.target.value)} placeholder="Code postal" />

                    {/* Terms and Conditions */}
                    <div className="terms-checkbox-container">
                        <input
                            type="checkbox"
                            id="acceptTerms"
                            checked={acceptTerms}
                            onChange={(e) => setAcceptTerms(e.target.checked)}
                            className="terms-checkbox"
                        />
                        <label htmlFor="acceptTerms" className="terms-label">
                            J'accepte les termes et conditions
                        </label>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="submite" disabled={!acceptTerms}>
                        <div className="movement">
                            <svg className="fleche" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Logo" x="10" y="10">
                                    <path id="Vector" d="M11.3333 7.99992H2M11.3333 7.99992L7.33333 11.9999M11.3333 7.99992L7.33333 3.99992M14 3.33325V12.6666" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                            </svg>
                            <span className='straight'>S'inscrire</span>
                        </div>
                    </button>
                </form>
            </div>
            <div className='square-containere'>

                {/* Section pout les papiers d'identité */}

                <div className="white-square">
                    <div className='Id'>
                        <p className='identity'>Papier d'identité</p>
                    </div>

                     {/* upload des doc */}

                     <div className='file-upload-container'>
                        <input className='uploader'
                            type="file" 
                            onChange={handleFileChange} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
