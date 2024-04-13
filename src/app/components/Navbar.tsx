import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/home.module.css";
import darkLogo from "../assets/WhatsApp Image 2024-04-12 at 19.01.48.jpeg";
import lightLogo from "../assets/WhatsApp Image 2024-04-12 at 19.01.48.jpeg";
import menuMobile from "../assets/menuMobileLight.png";
import close from "../assets/close.png";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className={styles.navbar}>
      <div>
        <Link className={styles.link} href="/">
          <Image
            className={styles.logo}
            width="130"
            height="91"
            alt=""
            src={
              pathname.includes("S") || pathname.includes("s")
                ? lightLogo
                : darkLogo
            }
          />
        </Link>
      </div>
      <div>
        <Image
          onClick={() => setShowMenu(!showMenu)}
          className={styles.menuMobile}
          alt=""
          src={showMenu ? close : menuMobile}
        />
      </div>
      <div
        className={`${styles.containerLinks} ${
          showMenu ? styles.showMobileMenu : ""
        }`}
      >
        <Link
          style={pathname.includes("/aboutUs") ? { fontWeight: "bold" } : {}}
          className={styles.link}
          href="/aboutUs"
        >
          Nostros
        </Link>
        <Link
          style={
            pathname.includes("/wantMyVirtualStore")
              ? { fontWeight: "bold" }
              : {}
          }
          className={styles.link}
          href="/wantMyVirtualStore"
        >
          Productos <br /> Sub Productos
        </Link>
        <Link className={styles.link} target="_blank" href="https://google.com">
          Nuestras <br /> Integraciones
        </Link>
        <Link className={styles.link} target="_blank" href="https://google.com">
          Que ofrecemos <br />
          Precios
        </Link>
        <Link className={styles.link} target="_blank" href="https://google.com">
          Registro
        </Link>
        <Link className={styles.link} target="_blank" href="https://google.com">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
