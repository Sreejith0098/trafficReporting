import React, { useState } from "react";
import '../adminlogin/adminloginstyled.css';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import {useNavigate} from 'react-router-dom'
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const AdminLogin = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [message, setMessage] = useState("");
	const [open, setOpen] = useState(false);
 
	const navigate = useNavigate()
	
	const handleSubmit = async (e) => {
		e.preventDefault();
		setMessage("");
		try {
			const response = await fetch(`${API_BASE_URL}/api/admin/login/`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ username, password }),
			});
			const data = await response.json();
			if (response.ok) {
				setMessage("Admin login successful!");
				setOpen(true);
				// Redirect logic here
				navigate('/admindashboard')
			} else {
				setMessage(data.message || "Login failed");
				setOpen(true);
			}
		} catch (error) {
			setMessage("Error connecting to server",error);
			setOpen(true);
		}
	};

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') return;
		setOpen(false);
	};

	return (
		<div className="admin-login-div">
			<div className="login-card">
				<h1 className="login-title">Admin Login</h1>
				<form className="login-form" onSubmit={handleSubmit}>
					<input
						className="login-input"
						type="text"
						placeholder="Admin Username"
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
				<Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
					<MuiAlert onClose={handleClose} severity={message === 'Admin login successful!' ? 'success' : 'error'} sx={{ width: '100%' }}>
						{message}
					</MuiAlert>
				</Snackbar>
			</div>
		</div>
	);
};

export default AdminLogin;
