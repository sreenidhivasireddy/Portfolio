import "./styles/Certifications.css";
import { portfolioData } from "../data/portfolioData";

const Certifications = () => {
  return (
    <section className="certifications-section section-container">
      <div className="certifications-container">
        <h2>Certifications</h2>
        <div className="certifications-grid">
          {portfolioData.certifications.map((item) => (
            <article
              className="certification-card"
              key={`${item.title}-${item.issuer}`}
            >
              <a
                className="certification-copy"
                href={item.link}
                target="_blank"
                rel="noreferrer"
              >
                <span className="certification-label">{item.issuer}</span>
                <h3>{item.title}</h3>
                <p className="certification-period">{item.period}</p>
                <div className="certification-details">
                  <p>
                    <span>Credential ID</span>
                    {item.credentialId}
                  </p>
                  <p>
                    <span>Certification Number</span>
                    {item.certificationNumber}
                  </p>
                  <p>
                    <span>Earned On</span>
                    {item.earnedOn}
                  </p>
                  <p>
                    <span>Valid Through</span>
                    {item.validThrough}
                  </p>
                </div>
              </a>
              {item.badge === "associate" && (
                <img
                  className="certification-badge-image"
                  src="/images/azure-ai-engineer-badge.png"
                  alt="Microsoft Certified Associate badge"
                />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
