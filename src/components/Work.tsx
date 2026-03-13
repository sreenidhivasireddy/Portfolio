import { useEffect, useRef, useState, type CSSProperties } from "react";
import "./styles/Work.css";
import { portfolioData } from "../data/portfolioData";

const featuredProjectNumbers = new Set(["01", "02", "03"]);

const metricCards = [
  { label: "Accuracy", value: "98.38%" },
  { label: "Precision", value: "96.77%" },
  { label: "Recall", value: "96.77%" },
  { label: "F1", value: "96.77%" },
];

const confusionMatrix = [
  { label: "TN", value: "15070" },
  { label: "FP", value: "164" },
  { label: "FN", value: "164" },
  { label: "TP", value: "4914" },
];

const signaturePipelineSteps = [
  "Image Input",
  "Preprocess",
  "CNN/VGG16",
  "Sigmoid",
  "Genuine / Forged",
];

const Work = () => {
  const railRef = useRef<HTMLDivElement | null>(null);
  const featuredRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [visibleFeaturedCards, setVisibleFeaturedCards] = useState<
    Record<string, boolean>
  >({});
  const [isDemoLoaded, setIsDemoLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLDivElement;
          const number = target.dataset.projectNumber;

          if (!number || !entry.isIntersecting) {
            return;
          }

          setVisibleFeaturedCards((current) => {
            if (current[number]) {
              return current;
            }

            return {
              ...current,
              [number]: true,
            };
          });

          observer.unobserve(target);
        });
      },
      {
        threshold: 0.2,
      }
    );

    Object.values(featuredRefs.current).forEach((node) => {
      if (node) {
        observer.observe(node);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollRail = (direction: "left" | "right") => {
    const rail = railRef.current;
    if (!rail) {
      return;
    }

    rail.scrollBy({
      left: direction === "left" ? -rail.clientWidth : rail.clientWidth,
      behavior: "smooth",
    });
  };

  const setFeaturedRef = (number: string) => (node: HTMLDivElement | null) => {
    featuredRefs.current[number] = node;
  };

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <div className="work-head">
          <div>
            <h2>
              My <span>Work</span>
            </h2>
          </div>
          <div className="work-controls">
            <button
              type="button"
              className="work-arrow"
              onClick={() => scrollRail("left")}
              aria-label="Scroll work cards left"
            >
              &larr;
            </button>
            <button
              type="button"
              className="work-arrow"
              onClick={() => scrollRail("right")}
              aria-label="Scroll work cards right"
            >
              &rarr;
            </button>
          </div>
        </div>

        <div className="work-rail" data-cursor="disable" ref={railRef}>
          {portfolioData.highlights.map((item) => (
            <div className="work-slide" key={item.number}>
              {featuredProjectNumbers.has(item.number) ? (
                <div
                  className={`work-box ${
                    visibleFeaturedCards[item.number] ? "work-box-visible" : ""
                  }`}
                  ref={setFeaturedRef(item.number)}
                  data-project-number={item.number}
                >
                  <div className="work-info">
                    <div className="work-title">
                      <h3>{item.number}</h3>
                      <div>
                        <div className="work-title-row">
                          <h4>{item.name}</h4>
                          {item.number === "01" ? (
                            <span className="work-live-pill">Live Demo</span>
                          ) : item.number === "02" ? (
                            <span className="work-live-pill">
                              98.38% Accuracy
                            </span>
                          ) : (
                            <span className="work-live-pill">CNN + VGG16</span>
                          )}
                        </div>
                        <p>{item.category}</p>
                      </div>
                    </div>
                    <p className="work-summary">{item.summary}</p>
                    <div className="work-stack-block work-stack-block-primary">
                      <h4>Tech stack</h4>
                      <p>{item.tools}</p>
                    </div>
                    <div className="work-stack-groups">
                      {item.stackGroups.map((group) => (
                        <div className="work-stack-group" key={group.title}>
                          <h5>{group.title}</h5>
                          <p>{group.items}</p>
                        </div>
                      ))}
                    </div>
                    {item.number === "02" || item.number === "03" ? (
                      <a
                        className="work-link-button"
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View GitHub
                      </a>
                    ) : null}
                  </div>

                  <div className="work-visual-column">
                    {item.number === "01" ? (
                      <div className="work-desktop-figure">
                        <div className="work-figure-top">
                          <span className="work-dot"></span>
                          <span className="work-dot"></span>
                          <span className="work-dot"></span>
                          <div className="work-figure-url">AI Study Assistant</div>
                        </div>
                        <div className="work-figure-body work-figure-body-image">
                          <div className="work-video-shell">
                            <div className="work-video-frame">
                              {isDemoLoaded ? (
                                <iframe
                                  className="work-video-embed"
                                  src="https://www.youtube.com/embed/g591gvmiJuQ?autoplay=1&rel=0"
                                  title="RAG-Based Intelligent Study Assistant demo video"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                  referrerPolicy="strict-origin-when-cross-origin"
                                  allowFullScreen
                                />
                              ) : (
                                <button
                                  type="button"
                                  className="work-video-poster"
                                  onClick={() => setIsDemoLoaded(true)}
                                  aria-label="Play RAG-Based Intelligent Study Assistant demo video"
                                >
                                  <img
                                    className="work-figure-screenshot"
                                    src="https://i.ytimg.com/vi/g591gvmiJuQ/maxresdefault.jpg"
                                    alt="RAG-Based Intelligent Study Assistant demo preview"
                                  />
                                  <span className="work-video-overlay"></span>
                                  <span className="work-video-badge">
                                    Watch Demo
                                  </span>
                                  <span className="work-video-play">
                                    <span></span>
                                  </span>
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : item.number === "02" ? (
                      <div className="work-desktop-figure work-metrics-figure">
                        <div className="work-figure-top">
                          <span className="work-dot"></span>
                          <span className="work-dot"></span>
                          <span className="work-dot"></span>
                          <div className="work-figure-url">Security Metrics</div>
                        </div>
                        <div className="work-figure-body work-figure-body-metrics">
                          <div className="work-metrics-shell">
                            <div className="work-metric-grid">
                              {metricCards.map((metric, index) => (
                                <div
                                  className="work-metric-card"
                                  key={metric.label}
                                  style={
                                    {
                                      "--metric-delay": `${index * 0.08}s`,
                                    } as CSSProperties
                                  }
                                >
                                  <span>{metric.label}</span>
                                  <strong>{metric.value}</strong>
                                </div>
                              ))}
                            </div>

                            <div className="work-matrix-panel">
                              <div className="work-matrix-head">
                                <span>Confusion Matrix</span>
                                <strong>SIMARGL2022</strong>
                              </div>
                              <div className="work-matrix-grid">
                                {confusionMatrix.map((metric) => (
                                  <div className="work-matrix-cell" key={metric.label}>
                                    <span>{metric.label}</span>
                                    <strong>{metric.value}</strong>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="work-desktop-figure work-signature-figure">
                        <div className="work-figure-top">
                          <span className="work-dot"></span>
                          <span className="work-dot"></span>
                          <span className="work-dot"></span>
                          <div className="work-figure-url">Forgery Pipeline</div>
                        </div>
                        <div className="work-figure-body work-figure-body-signature">
                          <div className="work-signature-shell">
                            <div className="work-signature-card-row">
                              <div className="work-signature-card work-signature-card-genuine">
                                <span>Genuine</span>
                                <strong>GENUINE</strong>
                                <em>Verified stroke pattern</em>
                              </div>
                              <div className="work-signature-card work-signature-card-forged">
                                <span>Forged</span>
                                <strong>FORGED</strong>
                                <em>Altered pressure curve</em>
                              </div>
                            </div>

                            <div className="work-signature-pipeline">
                              {signaturePipelineSteps.map((step, index) => (
                                <div
                                  className="work-signature-step"
                                  key={step}
                                >
                                  <span>{step}</span>
                                  {index < signaturePipelineSteps.length - 1 ? (
                                    <i className="work-signature-arrow" aria-hidden="true"></i>
                                  ) : null}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="work-architecture work-architecture-visual">
                      {item.architecture.map((point) => (
                        <div className="work-point" key={point}>
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  className="work-card"
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="work-card-top">
                    <span className="work-card-number">{item.number}</span>
                    <div className="work-card-meta">
                      <p>{item.category}</p>
                      <h3>{item.name}</h3>
                    </div>
                  </div>

                  <p className="work-summary">{item.summary}</p>

                  <div className="work-stack-block">
                    <h4>Tech Stack</h4>
                    <p>{item.tools}</p>
                  </div>

                  <div className="work-architecture">
                    {item.architecture.map((point) => (
                      <div className="work-point" key={point}>
                        {point}
                      </div>
                    ))}
                  </div>

                  <div className="work-card-footer">
                    {item.stackGroups.slice(0, 3).map((group) => (
                      <span className="work-chip" key={group.title}>
                        {group.title}
                      </span>
                    ))}
                  </div>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
