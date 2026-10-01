export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="logo footer-logo">
            Byte<span>Space</span>
          </div>
          <p>
            Discover your passion, build your skills and learn from creators
            around the world.
          </p>
        </div>

        <div>
          <h4>Explore</h4>
          <a href="/search">Courses</a>
          <a href="/search">Categories</a>
          <a href="/creator/1">Creators</a>
        </div>

        <div>
          <h4>Company</h4>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Help Center</a>
        </div>

        <div>
          <h4>Account</h4>
          <a href="/login">Log in</a>
          <a href="/register">Sign up</a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 ByteSpace. All rights reserved.</span>
        <span>Learn. Create. Grow.</span>
      </div>
    </footer>
  );
}