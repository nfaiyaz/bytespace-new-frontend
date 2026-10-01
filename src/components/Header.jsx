import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-inner">

        <Link to="/" className="logo">
          <span className="logo-mark" />
          <span>ByteSpace</span>
        </Link>

        <nav className="header-nav">
          <Link to="/">Home</Link>
          <Link to="/search">Courses</Link>
          <Link to="/creator/purepearl">Creators</Link>
        </nav>

        <div className="header-actions">
          <Link to="/login">Sign In</Link>
          <Link to="/register">Join Us</Link>
          <ShoppingBag size={20} />
        </div>

        <button
          className="header-menu"
          onClick={() => setOpen(!open)}
          aria-label="Open menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div
          style={{
            position: "absolute",
            top: "88px",
            left: 0,
            width: "100%",
            background: "#003BE2",
            padding: "24px 16px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            borderTop: "1px solid rgba(255,255,255,.15)",
          }}
        >
          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>

          <Link to="/search" onClick={() => setOpen(false)}>
            Courses
          </Link>

          <Link to="/creator/purepearl" onClick={() => setOpen(false)}>
            Creators
          </Link>

          <Link to="/login" onClick={() => setOpen(false)}>
            Sign In
          </Link>

          <Link to="/register" onClick={() => setOpen(false)}>
            Join Us
          </Link>
        </div>
      )}
    </header>
  );
}