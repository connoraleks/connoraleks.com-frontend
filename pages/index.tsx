/* eslint-disable @next/next/no-sync-scripts */
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import Profile from '../components/Profile';
import Links from '../components/Links';


const Home: NextPage = () => {
  useEffect(() => {
    setTimeout(() => window.scrollTo({
      top: -1,
      behavior: 'smooth'
    }), 0)
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Connor Aleksandrowicz</title>
        <meta name="description" content="Connor Aleksandrowicz personal website" />
        <link rel="icon" href="/shocked.png" />
      </Head>
      <div className={styles.intro}>
        <Profile/>
        <Links/>
      </div>
    </div>
  )
}

export default Home
