<<<<<<< HEAD
import React, { useState } from "react";
=======


import React, { useState } from "react";
// import Input from "../UI/Input";
>>>>>>> d50e8c897398770a3b314254e51d6d6c377d2d43
import "./index.scss";

const Index = () => {
  // État pour gérer si l'input a été cliqué
  const [isInputClicked, setInputClicked] = useState(false);

  // État pour gérer la visibilité des options
  const [isOptionsVisible, setOptionsVisible] = useState(false);

  // État pour gérer la distance
  const [distance, setDistance] = useState(30);

  // État pour gérer si "Autour de moi" est sélectionné
  const [isAroundMeSelected, setAroundMeSelected] = useState(false);

  // Fonction pour afficher les options
  const showOptions = () => {
    setOptionsVisible(true);
  };

  // Fonction pour masquer les options
  const hideOptions = () => {
    setOptionsVisible(false);
  };

  // Gestionnaire de clic sur l'input
  const handleInputClick = () => {
    setInputClicked(true);
    showOptions();
  };

  // Fonction pour effacer les filtres
  const clearFilters = () => {
    // Réinitialiser les états et masquer les options
    setInputClicked(false);
    setOptionsVisible(false);
    setAroundMeSelected(false);
    setDistance(30);
  };

  // Fonction pour appliquer les filtres
  const applyFilters = () => {
    alert("Filtres validés !");
  };

  // Gestionnaire de changement de la distance
  const handleDistanceChange = (event) => {
    setDistance(event.target.value);
  };

  // Gestionnaire de clic sur "Autour de moi"
  const handleAroundMeClick = () => {
    setAroundMeSelected(!isAroundMeSelected);
  };

  return (
    <div className="filter-container">
      {/* Input pour la localisation */}
      <input
        type="text"
        placeholder="Ajouter votre localisation"
        onClick={handleInputClick}
        onFocus={showOptions}
        onBlur={hideOptions}
      />

      {/* Options affichées si l'input est cliqué */}
      {isInputClicked && (
        <div className="filter-main">
          {/* Option "Autour de moi" */}
          <h1 className="text" onClick={handleAroundMeClick}>
            Autour de moi{" "}
          </h1>

          {/* Option "Toute la France" - Affichée seulement si "Autour de moi" n'est pas sélectionné */}
          {!isAroundMeSelected && <h1 className="text">Toute la France</h1>}

          {/* Options supplémentaires si "Autour de moi" est sélectionné */}
          {isAroundMeSelected && (
            <>
              {/* Slider pour la distance */}
              <input
                className="input1"
                type="range"
                min="1"
                max="200"
                value={distance}
                onChange={handleDistanceChange}
              />

              {/* Affichage de la distance sélectionnée */}
              <span>{distance} km</span>

              {/* Boutons pour effacer et valider les filtres */}
              <div className="btn">
                <button onClick={clearFilters}>Effacer</button>
                <button onClick={applyFilters}>Valider</button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Index;
