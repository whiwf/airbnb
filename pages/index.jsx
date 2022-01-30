import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Airbnb - learning Next.js project</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />
    </>
  );
}
