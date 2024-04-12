"use client";
import styles from "../styles/wantMyVirtualStore.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import steps from "../assets/stepsDesktopFinal.svg";
import stepsMobile from "../assets/steps-mobile-final3.svg";
import subproducts from "../assets/subproducts.svg";

export default function WantMyVirtualStore() {
  return (
    <div className={styles.mainContainer}>
      <header className={styles.header}>
        <Navbar />
      </header>
      <main>
        <div>
          <div className={styles.titleContainer}>
            <p className={styles.title}>
              Toma{" "}
              <span className={styles.titleColorWord}>
                tu importante decisión
              </span>{" "}
              de tener tu web{" "}
              <span className={styles.titleColorWord}>auto gestionable</span>
            </p>
          </div>
          <p className={styles.descriptionTitle}>
            A continuación, te contamos nuestros productos
          </p>
        </div>
        <div className={styles.stepsImageContainer}>
          <Image className={styles.stepsImage} alt="" src={steps} />
          <Image className={styles.stepsImageMobile} alt="" src={stepsMobile} />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            flexDirection: "column",
          }}
        >
          <div className={styles.titleContainer2}>
            <p className={styles.title}>
              <span className={styles.titleColorWord}>Sub Productos </span>
              que puedes adherir a tus productos
            </p>
          </div>
          <p className={styles.descriptionTitle2}>
            Es mas, puedes contratar por única vez
          </p>
        </div>
        <div className={styles.stepsImageContainer2}>
          <Image className={styles.stepsImage} alt="" src={subproducts} />
          <Image className={styles.stepsImageMobile} alt="" src={stepsMobile} />
        </div>
      </main>
      <footer className={styles.footerContainer}>
        <Footer />
      </footer>
    </div>
  );
}
