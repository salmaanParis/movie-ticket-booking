import React from 'react';

const Login = () => {
  return (
    <div className="auth-container">
      <img src="image1.jpg" alt="Background" className="background-image" />
      <div className="auth-box">
        <h2>Login</h2>
        <form>
          <label>
            Email:
            <input type="email" required />
          </label>
          <label>
            Password:
            <input type="password" required />
          </label>
          <a href="/reset-password" className="forgot-password">Forgot Password?</a>
          <button type="submit">Login</button>
          <p>Don't have an account? <a href="/signup">Sign up</a></p>
        </form>
      </div>
      <style>
        {`
          .auth-container {
            position: relative;
            width: 100%;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
          }

          .background-image {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: brightness(50%);
          }

          .auth-box {
            position: relative;
            background: rgba(255, 255, 255, 0.8);
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
            text-align: center;
          }

          .auth-box h2 {
            margin-top: 0;
          }

          .auth-box label {
            display: block;
            margin-bottom: 10px;
          }

          .auth-box input {
            width:90%;
            padding: 10px;
            margin-top: 5px;
            border: 1px solid #ddd;
            border-radius: 5px;
          }

          .auth-box button {
            background: #FF4D4D;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 1rem;
            transition: background 0.3s;
          }

          .auth-box button:hover {
            background: #FF7E7E;
          }

          .forgot-password {
            display: block;
            margin-top: 10px;
            text-decoration: none;
            color: #FF4D4D;
          }

          .forgot-password:hover {
            text-decoration: underline;
          }

          .auth-box p {
            margin-top: 10px;
          }
        `}
      </style>
    </div>
  );
};

export default Login;
