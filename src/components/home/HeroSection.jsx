
import React from 'react';
import Slider from './Slider';
import Container from './Container';
import styles from "@/styles/home/hero.module.css";

export default function HeroSection() {
  return (
    <Container>
      <section className={styles.hero}>
        <div className={`${styles.textSection} text-gray-700`}>
          <h1>one stop sloution <span className='text-pink-500'>E-Store</span></h1>
          <p>Discover the latest electronics, jewellery, men's and women's clothing</p>
          <p>Exclusive deals just for you!</p>
          <button className={`${styles.ctaButton} bg-pink-500 px-4 py-2`}>Shop Now</button>
        </div>
      <Slider />
      </section>
    </Container>
  )
}
