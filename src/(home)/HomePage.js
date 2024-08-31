import React, { useEffect } from 'react'
import "./HomePage.css"

const HomePage = () => {
 useEffect(() => {
   const text = document.querySelector(".hero-text");
   const image = document.querySelector(".hero-image");

   // Trigger the animation after a slight delay to ensure page load
   setTimeout(() => {
     text.classList.add("move-center");
     image.classList.add("move-center");
   }, 100); // Delay in milliseconds
 }, []);
  return (
    <section className="hero-section">
      <div className="hero-text">
        Welcome to the Ultimate Calculation & Game Hub!
      </div>
      <div className="hero-image">
        <img src="images/hero.png" alt="calculation" />
      </div>
    </section>
  );
}

export default HomePage