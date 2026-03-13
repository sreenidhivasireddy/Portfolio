import { useEffect, useRef, useState } from "react";
import "./styles/WhatIDo.css";
import { portfolioData } from "../data/portfolioData";

const researchCard = {
  label: "Research",
  heading: "PUBLISH & PROVE",
  description:
    "Back AI systems with rigorous evaluation, confusion matrix analysis, and peer-reviewed research in deep learning and network security.",
};

const summaryText =
  "I design AI systems from retrieval and evaluation through to product delivery, with equal focus on backend reliability and real user experience.";

const WhatIDo = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) {
      return;
    }

    const revealIfInView = () => {
      const rect = node.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setIsVisible(true);
        return true;
      }

      return false;
    };

    if (revealIfInView()) {
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const cards = [...portfolioData.focusAreas, researchCard];

  return (
    <section className="whatIDO" id="what-i-do" ref={sectionRef}>
      <div className={`what-section-title fade-up ${isVisible ? "visible" : ""}`}>
        <h2 className="what-main-title">WHAT I DO</h2>
      </div>

      <p
        className={`what-subtitle fade-up ${isVisible ? "visible" : ""}`}
        style={{ transitionDelay: "0.1s" }}
      >
        {summaryText}
      </p>

      <div className="what-grid">
        {cards.map((card, index) => (
          <article
            className={`what-card fade-up ${isVisible ? "visible" : ""}`}
            key={card.heading}
            style={{ transitionDelay: `${index * 0.15}s` }}
          >
            <p className="what-card-label">{card.label}</p>
            <h3>{card.heading}</h3>
            <p className="what-card-summary">{card.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default WhatIDo;
