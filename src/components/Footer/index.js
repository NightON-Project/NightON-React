import React from "react";
import styles from "./index.module.scss";
import facebook from "../../assets/img/facebook.png";
import instagram from "../../assets/img/instagram.png";
import tiktok from "../../assets/img/tiktok.png";
import twitter from "../../assets/img/twitter.png";
import logo from "../../assets/img/logo.png";
import playstore from "../../assets/img/playstore.svg";
import appstore from "../../assets/img/appstore.svg";

function index() {
  return (
    <footer className={styles.footer}>
      <hr />
      <div className={styles.footer_slices}>
        <div className={styles.infos}>
          <img src={logo} alt="logo" className={styles.logo_img} />
          {/* <span>
            <p>Bientôt disponible sur :</p>
          </span> */}
          <br />
          <span>
            <img src={playstore} alt="playstore" className={styles.playstore} />
          </span>
          <span>
            <img src={appstore} alt="playstore" className={styles.appstore} />
          </span>
        </div>
        <section className={styles.links}>
          <div className={styles.links_column}>
            <div className={styles.links_column_title}>
              <h6>Page</h6>
            </div>
            <div>
              <div>
                <p>Centre d'aide</p>
              </div>
            </div>
            <div>
              <div>
                <p>AirCover</p>
              </div>
            </div>
            <div>
              <div>
                <p>Lutte contre la discrimination</p>
              </div>
            </div>
            <div>
              <div>
                <p>Assistance handicap</p>
              </div>
            </div>
            <div>
              <div>
                <p>Options d'annulation</p>
              </div>
            </div>
            <div>
              <div>
                <p>J'ai un problème de voisinage</p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.links}>
          <div className={styles.links_column}>
            <div className={styles.links_column_title}>
              <h6>Aide</h6>
            </div>
            <div>
              <div>
                <p>Mettez votre logement sur NightOn</p>
              </div>
            </div>
            <div>
              <div>
                <p>NightCover pour les hôtes</p>
              </div>
            </div>
            <div>
              <div>
                <p>Ressources pour les hôtes</p>
              </div>
            </div>
            <div>
              <div>
                <p>Forum de la communauté</p>
              </div>
            </div>
            <div>
              <div>
                <p>Hébergement responsable</p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.links}>
          <div className={styles.links_column}>
            <div className={styles.links_column_title}>
              <h6>A propos</h6>
            </div>
            <div>
              <div>
                <p>Newsroom</p>
              </div>
            </div>
            <div>
              <div>
                <p>Nouvelles fonctionnalités</p>
              </div>
            </div>
            <div>
              <div>
                <p>Carrières</p>
              </div>
            </div>
            <div>
              <div>
                <p>Investisseurs</p>
              </div>
            </div>
            <div>
              <div>
                <p>Cartes cadeaux</p>
              </div>
            </div>
            <div>
              <div>
                <p>Séjours d'urgence NightOn.org</p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.links}>
          <div className={styles.links_column}>
            <div className={styles.right_part}>
              <div className={styles.instagram}>
                <img src={facebook} alt="facebook" />
              </div>
              <div className={styles.instagram}>
                <img src={twitter} alt="twitter" />
              </div>
              <div className={styles.instagram}>
                <img src={instagram} alt="instagram" />
              </div>
              <div className={styles.instagram}>
                <img src={tiktok} alt="tiktok" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <hr style={{ width: "800px", margin: "0 auto" }} />
      {/* <div className={styles.social_medias}> */}
      <div className={styles.left_part}>
        <div>
          <p>&copy; 2023 Your Company. All rights reserved.</p>
        </div>
        <div>
          <p>Confidentialité</p>
        </div>
        <div>
          <p>Conditions générales</p>
        </div>
        <div>
          <p>Infos sur NightOn</p>
        </div>
        <div>
          <p>Plan du site</p>
        </div>
      </div>
      {/* </div> */}
    </footer>
  );
}

export default index;
