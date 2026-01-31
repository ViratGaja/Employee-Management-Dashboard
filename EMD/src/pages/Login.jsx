import "../styles/auth.css";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="auth-card">
        <h2>Login</h2>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
