import React, {useEffect, useState} from 'react';
import styles from './index.module.scss';
import Card from './card';
import axios from 'axios';

const Cards = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Effectuez une requête vers l'API MealDB en utilisant axios
    axios
      .get(`https://30f4-80-70-37-74.ngrok-free.app/no_accueil?s=${searchTerm}`)
      .then(res => setData(res.data['API rep'] || [])); // Assurez-vous que data est toujours un tableau
  }, [searchTerm]);

  return (
    <div className={styles.wrapper}>
      {data.map(location => (
        <Card location={location} />
      ))}
    </div>
  );
};

export default Cards;
