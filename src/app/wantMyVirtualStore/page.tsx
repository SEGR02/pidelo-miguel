"use client";
import styles from "../styles/wantMyVirtualStore.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import steps from "../assets/productsmiguelbluehard.svg";
import stepsMobile from "../assets/parecefinalproductosmiguel2.svg";
import subproducts from "../assets/firstsubproducts.svg";
import subproducts2 from "../assets/secondsubproducts.svg";
import subproducts3 from "../assets/thirdsubproducts.svg";
import subproductsMobile from "../assets/firstsubproductsmobile.svg";
import subproducts2Mobile from "../assets/secondsubproductsmobile.svg";
import subproducts3Mobile from "../assets/thirdsubproductsmobile.svg";

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
        </div>
        <div className={styles.stepsImageContainer2}>
          <Image className={styles.stepsImage} alt="" src={subproducts} />
          <Image
            className={styles.stepsImageMobile2}
            alt=""
            src={subproductsMobile}
          />
        </div>
        <div className={styles.titleContainer3}>
          <p className={styles.title}>
            <span className={styles.titleColorWord}>
              Es más, puedes contratar por única vez
            </span>
          </p>
        </div>
        <div className={styles.stepsImageContainer2}>
          <Image className={styles.stepsImage} alt="" src={subproducts2} />
          <Image
            className={styles.stepsImageMobile2}
            alt=""
            src={subproducts2Mobile}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            flexDirection: "column",
          }}
        >
          <div className={styles.titleContainer4}>
            <p className={styles.title}>
              <span className={styles.titleColorWord}>Ademas te brindamos</span>
            </p>
          </div>
        </div>
        <div className={styles.stepsImageContainer2}>
          <Image className={styles.stepsImage} alt="" src={subproducts3} />
          <Image
            className={styles.stepsImageMobile2}
            alt=""
            src={subproducts3Mobile}
          />
        </div>
      </main>
      <footer className={styles.footerContainer}>
        <Footer />
      </footer>
    </div>
  );
}
