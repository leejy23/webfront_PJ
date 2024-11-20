// src/components/Levels.js
import React from "react";
import "../styles/Levels.css";

const Levels = () => {
  const levels = {
    beginner: [
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
        spanFull: true,
      },
    ],
    intermediate: [
      {
        id: "level-5",
        title: "상황별 회화",
        description: "얼마에요? 현금으로 결제할게요.",
        image: "/img/normal2.png",
      },
      {
        id: "level-6",
        title: "문법 확장",
        description: "이 영화는 영미 드라마를 보는 것과 같아",
        image: "/img/normal3.png",
      },
      {
        id: "level-7",
        title: "문화 이해",
        description: "한국 음식을 좋아해요. 한번 같이 가요.",
        image: "/img/normal4.png",
        spanFull: true,
      },
    ],
    advanced: [
      {
        id: "level-9",
        title: "비즈니스 영어",
        description: "We need to improve our synergy for better results.",
        image: "/img/hard2.png",
      },
      {
        id: "level-10",
        title: "고급 문법과 관용구",
        description: "It's time to step up our game and deliver the results.",
        image: "/img/hard3.png",
      },
      {
        id: "level-11",
        title: "토론 주제",
        description: "~ 문제에 대한 다양한 의견을 공유하고자 합니다.",
        image: "/img/hard4.png",
        spanFull: true,
      },
    ],
  };

  const topLevels = {
    beginner: {
      id: "level-0",
      title: "초급",
      description: "일상에서 자주 사용하는 짧은 표현과 문장들",
      image: "/img/easy1.png",
    },
    intermediate: {
      id: "level-4",
      title: "중급",
      description:
        "상황별 대화: 쇼핑, 여행, 레스토랑 등 다양한 상황에서의 대화연습",
      image: "/img/normal1.png",
    },
    advanced: {
      id: "level-8",
      title: "고급",
      description:
        "비즈니스 영어: 비즈니스 상황에서 사용하는 영어, 발표 및 면접 연습",
      image: "/img/hard1.png",
    },
  };

  const renderTopLevel = (topLevel) => (
    <div className="level-card no-border top-level">
      <img src={topLevel.image} alt={topLevel.title} className="large-image" />
      <div className="level-text">
        <h3>{topLevel.title}</h3>
        <p className="description">{topLevel.description}</p>
        <a href="/blank-page" className="learn-button">
          학습 시작
        </a>
      </div>
    </div>
  );

  const renderLevels = (category, topLevel) => (
    <section className="container">
      {renderTopLevel(topLevel)}
      <div className="grid-layout">
        {levels[category].map((level) => (
          <div
            key={level.id}
            className={`level-card ${level.spanFull ? "full-span" : ""}`}
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

  return (
    <div>
      {renderLevels("beginner", topLevels.beginner)}
      {renderLevels("intermediate", topLevels.intermediate)}
      {renderLevels("advanced", topLevels.advanced)}
    </div>
  );
};

export default Levels;
