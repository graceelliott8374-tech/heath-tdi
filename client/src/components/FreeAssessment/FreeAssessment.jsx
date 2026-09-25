import "./FreeAssessment.css";
import { Link } from "react-router-dom";
import {
  MagnifyingGlass,
  ShieldCheck,
  Gauge,
  Network,
} from "@phosphor-icons/react";

function FreeAssessment() {
  return (
    <section
      className="free-assessment"
      aria-labelledby="free-assessment-title"
    >
      <div className="container free-assessment__content">
        <div className="free-assessment__text">
          <p className="free-assessment__eyebrow">Free Network Assessment</p>

          <h2 id="free-assessment-title">How Healthy Is Your Network?</h2>

          <p className="free-assessment__intro">
            Heath Telephone &amp; Data offers a free network assessment to help
            identify performance issues, potential vulnerabilities, and
            opportunities to improve your technology infrastructure.
          </p>

          <div className="free-assessment__features">
            <div className="free-assessment__feature">
              <Gauge size={28} weight="duotone" aria-hidden="true" />
              <span>Network performance</span>
            </div>

            <div className="free-assessment__feature">
              <ShieldCheck size={28} weight="duotone" aria-hidden="true" />
              <span>Security concerns</span>
            </div>

            <div className="free-assessment__feature">
              <Network size={28} weight="duotone" aria-hidden="true" />
              <span>Infrastructure needs</span>
            </div>

            <div className="free-assessment__feature">
              <MagnifyingGlass size={28} weight="duotone" aria-hidden="true" />
              <span>Areas for improvement</span>
            </div>
          </div>

          <Link
            to="/free-network-assessment"
            className="free-assessment__button"
          >
            Request Your Free Assessment
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FreeAssessment;
