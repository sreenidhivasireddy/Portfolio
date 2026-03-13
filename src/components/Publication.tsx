import { useEffect, useRef, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import "./styles/Publication.css";
import { portfolioData } from "../data/portfolioData";

const Publication = () => {
  const publication = portfolioData.publications[0];
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = cardRef.current;
    if (!node) {
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

  return (
    <div className="publication-section section-container" id="publication">
      <div className="publication-head">
        <h2>
          My <span>Publication</span>
        </h2>
      </div>

      <div
        className={`publication-card ${isVisible ? "publication-card-visible" : ""}`}
        ref={cardRef}
        data-cursor="disable"
      >
        <div className="publication-meta-column">
          <div className="publication-title-row">
            <h3>{publication.title}</h3>
            <span className="publication-badge">Published</span>
          </div>

          <div className="publication-stat-pills">
            {publication.stats.map((stat) => (
              <span key={stat}>{stat}</span>
            ))}
          </div>

          <div className="publication-info-grid">
            <div className="publication-info-card">
              <h4>Authors</h4>
              <p>{publication.authors}</p>
            </div>
            <div className="publication-info-card">
              <h4>Journal</h4>
              <p>
                <a
                  href={publication.venueLink}
                  target="_blank"
                  rel="noreferrer"
                  className="publication-journal-link"
                >
                  {publication.venue}
                </a>
              </p>
            </div>
            <div className="publication-info-card">
              <h4>ISSN</h4>
              <p>
                Online: {publication.issnOnline}
                <br />
                Print: {publication.issnPrint}
              </p>
            </div>
            <div className="publication-info-card">
              <h4>Volume &amp; Issue</h4>
              <p>{publication.volumeIssue}</p>
            </div>
            <div className="publication-info-card">
              <h4>Year</h4>
              <p>{publication.published}</p>
            </div>
            <div className="publication-info-card">
              <h4>Type</h4>
              <p>{publication.type}</p>
            </div>
          </div>
        </div>

        <div className="publication-content-column">
          <div className="publication-abstract">
            <h4>Abstract</h4>
            <p>{publication.summary}</p>
            <a
              href={publication.link}
              target="_blank"
              rel="noreferrer"
              className="publication-read-more"
            >
              Read more <MdArrowOutward />
            </a>
          </div>

          <div className="publication-keywords">
            {publication.keywords.map((keyword) => (
              <span key={keyword}>{keyword}</span>
            ))}
          </div>

          <a
            className="publication-link"
            href={publication.link}
            target="_blank"
            rel="noreferrer"
          >
            View Publication <MdArrowOutward />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Publication;
