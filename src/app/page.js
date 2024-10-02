import React from 'react';
import styles from './globals.css';
const Home = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to My Next.js App!</h1>
        <p className={styles.description}>This is your first Next.js page.</p>
      </main>
    </div>
  );
};
export default Home;