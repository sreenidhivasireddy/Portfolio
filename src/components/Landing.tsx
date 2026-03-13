import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import { portfolioData } from "../data/portfolioData";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              {portfolioData.firstName.toUpperCase()}
              <br />
              <span>{portfolioData.lastName.toUpperCase()}</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>AI</h3>
            <h2 className="landing-info-h2">ENGINEER</h2>
            <h2 className="landing-info-sub">GENERATIVE AI</h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
