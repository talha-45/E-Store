"use client";

import React, { useEffect, useState } from "react";
import styles from "@/styles/home/hero.module.css";
import Image from "next/image";

const images = [
  "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
  "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_t.png",
  "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
  "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png",
  "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_t.png",
  "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png",
  "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_t.png",
  // "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692257709689-logitech heaphone.jpg",
  // "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691056487173-headphon2.jpg",
  // "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691057474498-earphone.jpg",
  // "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691057718636-headphone5.jpg",
  // "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1694100438525-51Prg4Smx-L._SL1500_.jpg",
];

export default function Slider() {
  const [currertSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // if (currertSlide == images.length - 1) {
      setCurrentSlide((currentValue) => {
        if (currentValue == images.length - 1) {
          return 0;
        } else {
          return currentValue + 1;
        }
      });
    }, 2000);
    return () => {
      clearInterval(interval);
    }
  }, []);
  return (
    <div className={styles.imageSection}>
      <div className={styles.slider}>
        {images.map((images, index) => {
          return (
            <Image
              alt={"Slide" + index}
              key={"Slide" + index}
              className={`${styles.slide} 
              ${currertSlide == index && styles.active}`}
              src={images}
              fill
            />
          );
        })}
      </div>
    </div>
  );
}
