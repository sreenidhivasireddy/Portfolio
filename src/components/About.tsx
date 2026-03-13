import { useEffect, useRef, useState } from "react";
import "./styles/About.css";
import { portfolioData } from "../data/portfolioData";

const skillPills = [
  "Azure AI Engineer Certified",
  "RAG & LLM Systems",
  "Published Researcher",
];

const About = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
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
        threshold: 0.3,
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-section" id="about" ref={sectionRef}>
      <div className="about-glow about-glow-left"></div>
      <div className="about-glow about-glow-right"></div>
      <div className="about-me">
        <h3 className={`about-title ${isVisible ? "about-visible" : ""}`}>
          About Me
        </h3>
        <span
          className={`about-underline ${isVisible ? "about-visible" : ""}`}
          aria-hidden="true"
        ></span>
        <p className={`about-para ${isVisible ? "about-visible" : ""}`}>
          {portfolioData.about}
        </p>
        <div className={`about-pill-row ${isVisible ? "about-visible" : ""}`}>
          {skillPills.map((pill) => (
            <span className="about-pill" key={pill}>
              {pill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
