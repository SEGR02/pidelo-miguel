"use client";
import Image from "next/image";
import styles from "./styles/home.module.css";
import Navbar from "./components/Navbar";
import ball from "./assets/ball.svg";
import image3 from "./assets/imagenazul.svg";
import image5 from "./assets/img6.jpg";
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <header>
        <Navbar />
      </header>
      <main className={styles.section1}>
        <div>
          <div className={styles.leftSection1}>
            <h1 className={styles.title}>
              Somos tu aliado estratégico en la creación de tu página web,
            </h1>
            <h2 className={styles.p}>
              Ofreciéndote una presencia digital{" "}
              <span className={styles.colorRigthP}>
                económica, fácil y rápida{" "}
              </span>
              para promocionar tus productos o servicios.
            </h2>
            <div className={styles.buttonContainer}>
              <Link href="/aboutUs">
                <button className={styles.button}>¿Qué te ofrecemos?</button>
              </Link>
            </div>
          </div>
          <div className={styles.rigthSection1}>
            <div className={styles.img1Container}>
              <Image className={styles.image1} alt="" src={image5} />
            </div>
            <div className={styles.containerRigthP}>
              <h2 className={styles.rigthP}>
                <span className={styles.colorRigthP}>Es simple,</span> te{" "}
                <span className={styles.colorRigthP}>proporcionamos </span>
                páginas web,{" "}
                <span className={styles.colorRigthP}>
                  multi producto, auto gestionables..
                </span>
              </h2>
            </div>
          </div>
          <Image className={styles.ball} alt="" src={ball} />
        </div>
      </main>
      <section className={styles.containerCards}>
        <div className={styles.card}>
          <p className={styles.cardsP}>
            Una solución integral para{" "}
            <span className={styles.colorCardsP}>crear y administrar </span>
            tu propia página web
          </p>
        </div>
        <div className={styles.imageWithCardContainer}>
          <Image className={styles.image2} alt="" src={image3} />
          <div className={styles.cardCustom}>
            <p className={styles.cardsP}>
              Interfaz intuitiva para{" "}
              <span className={styles.colorCardsP}>crear y personalizar </span>
              tus páginas web fácilmente.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <p className={styles.cardsP}>
            Nuestro objetivo es ayudarte a{" "}
            <span className={styles.colorCardsP}>alcanzar tus metas</span> en
            línea de manera efectiva.
          </p>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
