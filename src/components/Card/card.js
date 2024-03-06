import React from 'react';
import {Link} from 'react-router-dom'; // Import Link from React Router
import styles from './index.module.scss';
import hotel from '../../assets/hotels/hotel-1.jpeg';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';

const Card = () => {
  return (
    <Link to="/hotel-details">
      {' '}
      {/* Add Link component with the desired route */}
      <div className={styles.card_container}>
        <img src={hotel} alt="" className={styles.card_img} />
        <div className={styles.card_infos}>
          <h3 className={styles.card_title}>Place</h3>
          <div className={styles.rating}>
            <StarRateRoundedIcon />
            <p>4.88</p>
          </div>
        </div>
        <p style={{marginTop: 0, color: 'var(--font-grey)'}}>
          Beach and sea views
        </p>
        <p
          style={{
            marginTop: '0.2rem',
            fontSize: '0.8rem',
            color: 'var(--font-grey)',
          }}>
          19-25 May
        </p>
        <p style={{marginTop: 0, color: 'var(--black)'}}>
          <strong>850€</strong> night
        </p>
      </div>
    </Link>
  );
};

export default Card;
