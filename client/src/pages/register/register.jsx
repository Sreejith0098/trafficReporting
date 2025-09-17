import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../register/registerstyled.css';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const response = await fetch(`${API_BASE_URL}/api/register/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage("Waiting for admin approval");
        setOpen(true);
      } else {
        setMessage(data.message || "Registration failed");
        setOpen(true);
      }
    } catch (error) {
      setMessage("Error connecting to server", error);
      setOpen(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div className="register-div">
      <div className="register-card">
        <h1 className="register-title">Register</h1>
        <form className="register-form" onSubmit={handleSubmit}>
          <input
            className="register-input"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            className="register-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="register-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="register-button" type="submit">Register</button>
        </form>
        <div className="register-links">
          <p>Already have an account? <Link to="/" className="login-link">Login here</Link></p>
        </div>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
          <MuiAlert onClose={handleClose} severity={message === 'Registration successful!' ? 'success' : 'error'} sx={{ width: '100%' }}>
            {message}
          </MuiAlert>
        </Snackbar>
      </div>
    </div>
  );
};

export default Register;
