import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="not-found grid-bg">
      <div>
        <span className="eyebrow lime">ERROR</span>
        <h1>404</h1>
        <h2>The page you are looking for doesn't exist.</h2>
        <p>
          The page may have been moved or the URL may be incorrect.
        </p>

        <Link to="/" className="button button-lime">
          Back to Home
        </Link>
      </div>
    </main>
  );
}