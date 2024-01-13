// FilterComponent.jsx

import React, { useState } from "react";
import Input from "../UI/Input";
import "./index.css";

const Index = () => {
  const [isInputClicked, setInputClicked] = useState(false);
  const [isOptionsVisible, setOptionsVisible] = useState(false);
  const [distance, setDistance] = useState(30);
  const [isAroundMeSelected, setAroundMeSelected] = useState(false);

  const showOptions = () => {
    setOptionsVisible(true);
  };

  const hideOptions = () => {
    setOptionsVisible(false);
  };

  const handleInputClick = () => {
    setInputClicked(true);
    showOptions();
  };

  const clearFilters = () => {
    alert("Filtres effacés !");
  };

  const applyFilters = () => {
    alert("Filtres validés !");
  };

  const handleDistanceChange = (event) => {
    setDistance(event.target.value);
  };

  const handleAroundMeClick = () => {
    setAroundMeSelected(!isAroundMeSelected);
  };

  return (
    <div className="filter-container">
      <Input
        type="text"
        placeholder="Ajouter votre localisation"
        onClick={handleInputClick}
        onFocus={showOptions}
        onBlur={hideOptions}
      />

      {isInputClicked && (
        <div className="filter-main">
          <h1 onClick={handleAroundMeClick}>Autour de moi </h1>
          {isAroundMeSelected && (
            <>
              <h1>Autour de moi ({distance} km)</h1>
              <input
                type="range"
                min="1"
                max="200"
                value={distance}
                onChange={handleDistanceChange}
              />
              <div className="btn">
                <button onClick={clearFilters}>Effacer</button>
                <button onClick={applyFilters}>Valider</button>
              </div>
              <span>{distance} km</span>
            </>
          )}
          {!isAroundMeSelected && (
            <>
              <h1>Toute la France</h1>
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
