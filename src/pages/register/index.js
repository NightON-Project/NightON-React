import React, { useState } from 'react';
import './register.css';
import fiest from '../../assets/img/fiest.svg';


function Index() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
//const [acceptTerms, setAcceptTerms] = useState(false); 
  const [showVerification, setShowVerification] = useState(true);
  const [code, setCode] = useState(Array(5).fill('')); // État pour stocker le code de vérification


 
  const handleEmailClick = () => {
      // Logique pour envoyer l'email de vérification
      setShowVerification(true); // Affiche le conteneur de vérification
  
  };
  const updateCode = (index, value) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode); }

  const handleSubmit = (event) => {
  event.preventDefault();
      // Logique de soumission du formulaire
    };
  
  const handleVerificationSubmit = (event) => {
      event.preventDefault();
      // Logique de soumission du code de vérification
    };
  
 
  return (
    <div className="container">
      <div className="register">
        <header className="register-header">
          <div className='fiest'>
          <img src={fiest} alt='logo'/>
            <h2 className='intro'> <strong> Que la fête commence !!!</strong></h2>
          </div>
          <br></br>
          <p className='rejoins'>Rejoins Nighton, réserve ton logement et commence à faire la fête dès maintenant!</p>
          <br></br>
          <div className='reseaux'>
            <button className='google'>
             <svg className='un' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.501 12.2331C22.501 11.3698 22.4296 10.7398 22.2748 10.0864H12.2153V13.983H18.12C18.001 14.9514 17.3582 16.4097 15.9296 17.3897L15.9096 17.5202L19.0902 19.9349L19.3106 19.9564C21.3343 18.1247 22.501 15.4297 22.501 12.2331Z" fill="#4285F4"/>
              <path d="M12.2145 22.5001C15.1073 22.5001 17.5358 21.5667 19.3097 19.9567L15.9287 17.39C15.024 18.0083 13.8097 18.44 12.2145 18.44C9.38118 18.44 6.97645 16.6083 6.11922 14.0767L5.99358 14.0871L2.68632 16.5955L2.64307 16.7133C4.40495 20.1433 8.02399 22.5001 12.2145 22.5001Z" fill="#34A853"/>
              <path d="M6.11997 14.0767C5.89379 13.4234 5.76289 12.7233 5.76289 12C5.76289 11.2767 5.89379 10.5767 6.10807 9.92337L6.10208 9.78423L2.75337 7.2356L2.64381 7.28667C1.91765 8.71002 1.50098 10.3084 1.50098 12C1.50098 13.6917 1.91765 15.29 2.64381 16.7133L6.11997 14.0767Z" fill="#FBBC05"/>
              <path d="M12.2145 5.55997C14.2264 5.55997 15.5835 6.41163 16.3574 7.12335L19.3812 4.23C17.5241 2.53834 15.1074 1.5 12.2145 1.5C8.02402 1.5 4.40496 3.85665 2.64307 7.28662L6.10734 9.92332C6.97647 7.39166 9.38122 5.55997 12.2145 5.55997Z" fill="#EB4335"/>
              </svg><span className='g-fire'>Se connecter avec Google</span></button>
            <button className='facebook'>
            <svg width="93" height="40" viewBox="0 0 93 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 8C0 3.58172 3.58172 0 8 0H85C89.4183 0 93 3.58172 93 8V32C93 36.4183 89.4183 40 85 40H8C3.58172 40 0 36.4183 0 32V8Z" fill="white"/>
            <circle cx="46.5" cy="20" r="10.5" fill="url(#paint0_linear_2010_585)"/>
            <path d="M50.4103 23.2112L50.8767 20.2476H47.9589V18.3252C47.9589 17.5143 48.3657 16.7233 49.6726 16.7233H51V14.2002C51 14.2002 49.7959 14 48.6452 14C46.2411 14 44.6712 15.4197 44.6712 17.9888V20.2476H42V23.2112H44.6712V30.3759C45.2075 30.458 45.7562 30.5 46.3151 30.5C46.874 30.5 47.4226 30.458 47.9589 30.3759V23.2112H50.4103Z" fill="white"/>
            <defs>
            <linearGradient id="paint0_linear_2010_585" x1="46.5" y1="9.5" x2="46.5" y2="30.4377" gradientUnits="userSpaceOnUse">
            <stop stop-color="#18ACFE"/>
            <stop offset="1" stop-color="#0163E0"/>
            </linearGradient>
            </defs>
            </svg>
          </button>
          </div>
          <br></br>
        <div className='alignement'> 
            <hr className='line1'/> <span className='or'>OR</span> <hr className='line2'/> 
        </div>
          <form onSubmit={handleSubmit}>
          <div className='toggle-div'>
          </div>
          <br></br>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="leomartin@gmail.com"
            />
            <br></br>
             {showVerification && (
            <div className="verification-container">
            <input className='digit'
            type='password' 
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            placeholder=" + "/>  
            <input className='digit'
            type='password' 
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            placeholder=" + "/>
            <input className='digit'
            type='password' 
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            placeholder=" + "/>
            <input className='digit'
            type='password' 
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            placeholder=" + "/>
            <input className='digit'
            type='password' 
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            placeholder=" + "/>
            </div>
             )}
             <br></br>
              <button className="submit">
                <div className="movement">
                   <svg className="fleche" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <g id="Logo">
                     <path id="Vector" d="M11.3333 7.99992H2M11.3333 7.99992L7.33333 11.9999M11.3333 7.99992L7.33333 3.99992M14 3.33325V12.6666" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                     </g>
                   </svg>
                  <span className='straight'>S'inscrire</span>
              </div>
            </button>
            <br></br>
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
