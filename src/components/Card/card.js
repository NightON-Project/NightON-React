import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'; // Import Link from React Router
import styles from './index.module.scss';
import hotel from '../../assets/hotels/hotel-1.jpeg';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';

const maxSizeTitle = 20;
const Card = ({location}) => {
  var redirection_link = '/hotel_details?id=' + location.id_property;
  var title_shorter = location.nom_affichage;
  if (location.nom_affichage.length > maxSizeTitle) {
    title_shorter = title_shorter.substr(0, maxSizeTitle) + '...';
  }
  return (
    <Link to={redirection_link}>
      {' '}
      {/* Add Link component with the desired route */}
      <div className={styles.card_container}>
        <img src={location.url1} alt="" className={styles.card_img} />
        <div className={styles.card_infos}>
          <h3 className={styles.card_title}>{title_shorter}</h3>
          <div className={styles.rating}>
            <StarRateRoundedIcon />
            <p>4.88</p>
          </div>
        </div>
        <p style={{marginTop: 0, color: 'var(--font-grey)'}}>
          {location.ss_category}
        </p>
        <p
          style={{
            marginTop: '0.2rem',
            fontSize: '0.8rem',
            color: 'var(--font-grey)',
          }}>
          {location.date_dispo_debut} au {location.date_dispo_fin}
        </p>
        <p style={{marginTop: 0, color: 'var(--black)'}}>
          <strong>{location.prix}€</strong>/nuit
        </p>
      </div>
    </Link>
  );
};

export default Card;
