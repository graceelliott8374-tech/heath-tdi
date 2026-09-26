import SEO from "../../components/SEO/SEO";
import { Link } from "react-router-dom";

import RingoError from "../../assets/images/ringo/Ringo_Error.jpg";
import "./NotFound.css";

function NotFound() {
  return (
    <main className="not-found" aria-labelledby="not-found-title">
      <SEO
        title="Page Not Found | Heath Telephone & Data"
        description="The page you requested could not be found."
        canonicalPath="/404"
        robots="noindex, nofollow"
      />

      <div className="container not-found__inner">
        <div className="not-found__content">
          <p className="not-found__eyebrow">404 — Page Not Found</p>

          <h1 id="not-found-title">Even Ringo Couldn&apos;t Find This Page.</h1>

          <p className="not-found__text">
            The page you&apos;re looking for may have moved, been renamed, or
            never existed. Ringo checked twice, just to be sure.
          </p>

          <div className="not-found__actions">
            <Link to="/" className="not-found__link not-found__link--primary">
              Return Home
            </Link>

            <Link
              to="/contact"
              className="not-found__link not-found__link--secondary"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="not-found__image-wrapper">
          <img
            src={RingoError}
            alt="Ringo, Heath Telephone and Data's Head of Client Relations"
            className="not-found__image"
          />
        </div>
      </div>
    </main>
  );
}

export default NotFound;
