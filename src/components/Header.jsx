import { Link } from "react-router-dom";
import { Search, Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="header">
      <div className="container nav">
        <Link to="/" className="logo">
          Byte<span>Space</span>
        </Link>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/search">Courses</Link>
          <Link to="/creator/1">Creators</Link>
        </nav>

        <div className="nav-actions">
          <Link to="/search" className="icon-button">
            <Search size={19} />
          </Link>

          <Link to="/login" className="login-link">
            Log in
          </Link>

          <Link to="/register" className="button button-dark">
            Sign up
          </Link>
        </div>

        <button className="mobile-menu">
          <Menu size={23} />
        </button>
      </div>
    </header>
  );
}