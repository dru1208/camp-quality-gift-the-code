import Link from 'next/link';
export default () => (
  <div>
    <div>Login form</div>
    <div className="login-form">
      <div className="input-container">
        <label htmlFor="user_email">Email:</label>
        <input name="user_email" type="email" required />
      </div>

      <div className="input-container">
        <label htmlFor="user_password">Password:</label>
        <input name="user_password" type="password" required />
      </div>

      <Link href="/home">
        <a>
          <div className="login-button">Login</div>
        </a>
      </Link>
    </div>
  </div>
);