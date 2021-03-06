import Head from "next/head";
import Image from "next/image";
import Locator from "../components/Locator";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import ReactMapGL from "react-map-gl";
import { useState } from "react";

export default function Home() {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "800vh",
    latitude: 19.383203133438233,
    longitude: -98.79551247142092,
    zoom: 16,
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Map</h1>
      <Link href="/localizador">Localizador</Link>
      <Link href="/geocoder">Geocoder</Link>
      <br />
      <br />
      <h2>Dirección detectada</h2>
    </div>
  );
}
