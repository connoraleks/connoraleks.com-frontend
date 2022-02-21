/* eslint-disable @next/next/no-sync-scripts */
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import Profile from '../components/Profile';
import Navbar from '../components/Navbar';


const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Project Sigma</title>
        <meta name="description" content="Welcome to Project Sigma" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Profile/>
      <div className={styles.content}>

      </div>
    </div>
  )
}

export default Home
