import React from 'react';
import Navbar from '../../components/Navbar/index';
import Footer from '../../components/Footer/index';
import Card from '../../components/Card/cards';
import styles from './index.module.scss';
function Index() {
  return (
    <div>
      <div style={{position: 'relative'}} className="home-container">
        <Navbar />
        <h1 className={styles.main_header}>Transformez vos soirées</h1>
        <p className={styles.main_p}>Lorem ipsum dolor sit amet.</p>
        <Card />
        <Footer />
      </div>
    </div>
  );
}

export default Index;
