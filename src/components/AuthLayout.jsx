export default function AuthLayout({ children }) {
  return (
    <div className="auth-page grid-bg">
      <div className="auth-brand">
        Byte<span>Space</span>
      </div>

      <div className="auth-box">{children}</div>
    </div>
  );
}