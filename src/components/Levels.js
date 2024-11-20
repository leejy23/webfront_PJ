// src/components/Levels.js
import React from "react";
import "../styles/Levels.css";

const Levels = () => {
  const levels = [
    {
      id: "level-0",
      title: "초급",
      description: "일상에서 자주 사용하는 짧은 표현과 문장들",
      image: "/img/easy1.png",
    },
    {
      id: "level-1",
      title: "일상 회화",
      description: "오늘은 어떤 공부를 할까?",
      image: "/img/easy2.png",
    },
    {
      id: "level-2",
      title: "기초 문법",
      description: "문법에 자신감을 가지세요.",
      image: "/img/easy3.png",
    },
    {
      id: "level-3",
      title: "어휘 확장",
      description: "안녕, 밥 먹었어?.",
      image: "/img/easy4.png",
    },
  ];

  return (
    <section className="container">
      {/* 초급 항목 */}
      <div className="level-card no-border">
        <img
          src={levels[0].image}
          alt={levels[0].title}
          className="large-image"
        />
        <div className="level-text">
          <h3>{levels[0].title}</h3>
          <p className="description">{levels[0].description}</p>
          <a href="/blank-page" className="learn-button">
            학습 시작
          </a>
        </div>
      </div>

      {/* 그리드 레이아웃 */}
      <div className="grid-layout">
        {levels.slice(1).map((level) => (
          <div
            key={level.id}
            className={`level-card ${
              level.id === "level-3" ? "full-border" : ""
            }`}
            style={level.id === "level-3" ? { gridArea: "level-3" } : {}}
          >
            <img src={level.image} alt={level.title} className="level-image" />
            <div className="level-text">
              <h3>{level.title}</h3>
              <p className="description">{level.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Levels;
