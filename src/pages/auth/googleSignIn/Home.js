import React from 'react';

function Home() {
  const logout =()=>{
    localStorage.clear()
    window.location.reload()
  }
  return (
    <div className="Home">
      <h1>
        Welcome to the Home Page !!!
      </h1>
      <button onClick={logout}>Déconnexion</button>
    </div>
  );
}

export default Home;
