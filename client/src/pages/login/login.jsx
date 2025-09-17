import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import '../login/loginstyled.css';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const response = await fetch(`${API_BASE_URL}/api/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('username', username);
        setMessage("Login successful!");
        setOpen(true);
        setTimeout(() => {
          navigate('/userdashboard');
        }, 1000);
      } else {
        setMessage(data.message || "Login failed");
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
    <div className="login-div">
      <div className="login-card">
        <h1 className="login-title"> Login</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            className="login-input"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            className="login-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="login-button" type="submit">Login</button>
        </form>
        <div className="login-links ">
          <p style={{color:'blue'}} >Don't have an account? <Link to="/register" className="register-link">Register here</Link></p>
          <Link style={{fontStyle:'bold', color:"darkblue"}} to={'/adminlogin'} >Login as admin</Link>
        </div>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
          <MuiAlert onClose={handleClose} severity={message === 'Login successful!' ? 'success' : 'error'} sx={{ width: '100%' }}>
            {message}
          </MuiAlert>
        </Snackbar>
      </div>
    </div>
  );
};

export default Login;
