import { Link } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";

export default function Register() {
  return (
    <AuthLayout>
      <div className="auth-heading">
        <span className="eyebrow">JOIN BYTESPACE</span>
        <h1>Create your account</h1>
        <p>Start learning and build skills for your future.</p>
      </div>

      <form className="auth-form">
        <label>
          Full name
          <input type="text" placeholder="Your name" />
        </label>

        <label>
          Email address
          <input type="email" placeholder="you@example.com" />
        </label>

        <label>
          Password
          <input type="password" placeholder="Create a password" />
        </label>

        <button className="button button-lime full" type="submit">
          Create account
        </button>
      </form>

      <p className="auth-footer">
        Already have an account? <Link to="/login">Log in</Link>
      </p>

      <Link to="/" className="auth-home">
        Back to home
      </Link>
    </AuthLayout>
  );
}