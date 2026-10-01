import { Link } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";

export default function Login() {
  return (
    <AuthLayout>
      <div className="auth-heading">
        <span className="eyebrow">WELCOME BACK</span>
        <h1>Log in to ByteSpace</h1>
        <p>Continue your learning journey.</p>
      </div>

      <form className="auth-form">
        <label>
          Email address
          <input type="email" placeholder="you@example.com" />
        </label>

        <label>
          Password
          <input type="password" placeholder="Enter your password" />
        </label>

        <div className="form-row">
          <label className="checkbox">
            <input type="checkbox" />
            Remember me
          </label>

          <a href="/">Forgot password?</a>
        </div>

        <button className="button button-lime full" type="submit">
          Log in
        </button>
      </form>

      <p className="auth-footer">
        Don't have an account? <Link to="/register">Create one</Link>
      </p>

      <Link to="/" className="auth-home">
        Back to home
      </Link>
    </AuthLayout>
  );
}