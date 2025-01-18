import React from "react";
import Login from "../component/Login"
import '../index.css'
const LoginPage = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center bg vh-100"
    >
      <div className="card shadow-lg p-4" style={{ width: "400px" }}>
        <h3 className="text-center mb-4">Welcome</h3>
        <p className="text-center text-muted mb-4">
          Please login to continue to your dashboard.
        </p>
        <Login />
        <div className="text-center mt-3">
          <a href="/" className="text-decoration-none">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
