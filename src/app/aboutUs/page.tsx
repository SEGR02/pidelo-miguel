"use client";
import Image from "next/image";
import styles from "../styles/aboutUs.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import figure from "../assets/figure35.svg";
import agile from "../assets/agile-development latest 1.svg";
import cart from "../assets/cartslatest 1.svg";
import phone from "../assets/conversation latest.svg";

export default function AboutUs() {
  return (
    <div className={styles.mainContainer}>
      <header className={styles.header}>
        <Navbar />
      </header>
      <main className={styles.mainSection}>
        <div className={styles.mainSectionRight}>
          <div className={styles.sectionTitle}>
            <p className={styles.title}>¿Qué te ofrecemos?</p>
          </div>
          <p className={styles.descriptionTitle}>
            Es hora de que tu negocio se sume a la era digital. Te acompañamos
            en ese viaje.
          </p>
          <div className={`${styles.card} ${styles.cardLeft}`}>
            <Image alt="" src={cart} />
            <p className={styles.cardTitle}>
              Cuenta con una amplia variedad de páginas web auto gestionables
            </p>
            <p className={styles.cardDescription}>
              Ya sea de servicios, productos, automotora, inmobiliaria y blog de
              noticias, podrás gestionar toda tu información, productos, fotos y
              videos, referenciales, todo lo necesitas para el éxito de tu
              negocio.
            </p>
          </div>
        </div>
        <div className={styles.cardsContainer}>
          <div className={`${styles.card} ${styles.cardMiddle}`}>
            <Image alt="" src={agile} />
            <p className={styles.cardTitle}>
              Productos Especiales, Corporativos o Institucionales
            </p>
            <p className={styles.cardDescription}>
              Agencias deportivas, organizaciones, instituciones, asociaciones,
              inmobiliarias con clasificados, multi productos, revistas online,
              cuyo propósito es ofrecer información general sobre tu actividad,
              no te quedes sin consultarnos.
            </p>
          </div>
          <div className={`${styles.card} ${styles.cardRigth}`}>
            <Image alt="" src={phone} />
            <p className={styles.cardTitle}>Administración de redes sociales</p>
            <p className={styles.cardDescription}>
              Es la manera de permanecer conectado con tus seguidores, dar a
              conocer tus servicios o productos, ellas son uno de los mejores
              canales de comunicación, pero debemos saber manejarlos, así como
              cuál adecuamos la mejor red social para tu negocio.
            </p>
          </div>
          <Image className={styles.figure} alt="" src={figure} />
        </div>
      </main>
      <p className={styles.lastP}>
        Potenciamos tu negocio en el mundo <br />
        digital con nuestra herramienta web, <br />
        impulsándolo hacia el éxito online.
        <br /> ¡Aprovecha esta oportunidad para <br />
        expandir tu negocio!
      </p>
      <footer className={styles.footerContainer}>
        <Footer />
      </footer>
    </div>
  );
}
