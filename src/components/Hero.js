// src/components/Hero.js
import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <h1>다양한 학습 레벨!</h1>
      <p>자신에게 맞는 다양한 학습 레벨들을 경험해 보세요.</p>
      <button className="hero-button">둘러보기</button>
    </section>
  );
};

export default Hero;
