import React, { useState, useEffect } from 'react';
import { 
	Box, 
	Snackbar,
	Typography,
	Paper,
	IconButton,
	Breadcrumbs,
	Link,
	Card,
	CardContent,
	Avatar
} from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

import '../admindashboard/admindashboardstyled.css';
import { useOutletContext } from 'react-router-dom';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const AdminDashboard = () => {
		const [users, setUsers] = useState([]);
		const [reports, setReports] = useState([]);
		const [message, setMessage] = useState('');
		const [open, setOpen] = useState(false);
		const { selected, setSelected } = useOutletContext();

		useEffect(() => {
			if (selected === 'users') {
				fetchUsers();
			} else if (selected === 'reports') {
				fetchReports();
			}
		}, [selected]);

		const fetchReports = async () => {
			try {
				const res = await fetch(`${BASE_URL}/api/reports/`);
				const data = await res.json();
				setReports(data.reports || []);
			} catch {
				setMessage('Failed to fetch reports');
				setOpen(true);
			}
		};

		const fetchUsers = async () => {
			try {
				const res = await fetch(`${BASE_URL}/api/admin/users/`);
				const data = await res.json();
				setUsers(data.users || []);
			} catch {
				setMessage('Failed to fetch users');
				setOpen(true);
			}
		};

		const handleApprove = async (username) => {
			try {
				const res = await fetch(`${BASE_URL}/api/admin/approve/`, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ username })
				});
				const data = await res.json();
				setMessage(data.message);
				setOpen(true);
				fetchUsers();
			} catch {
				setMessage('Failed to approve user');
				setOpen(true);
			}
		};

		const handleDelete = async (username) => {
			try {
				const res = await fetch(`${BASE_URL}/api/admin/delete/`, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ username })
				});
				const data = await res.json();
				setMessage(data.message);
				setOpen(true);
				fetchUsers();
			} catch {
				setMessage('Failed to delete user');
				setOpen(true);
			}
		};

		const handleApproveReport = async (reportId, action) => {
			try {
				const res = await fetch(`${BASE_URL}/api/reports/approve/`, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ report_id: reportId, action })
				});
				const data = await res.json();
				setMessage(data.message);
				setOpen(true);
				fetchReports();
			} catch {
				setMessage(`Failed to ${action} report`);
				setOpen(true);
			}
		};

		// New: Hard delete report
		const handleDeleteReport = async (reportId) => {
			try {
				const res = await fetch(`${BASE_URL}/api/reports/delete/`, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ report_id: reportId })
				});
				const data = await res.json();
				setMessage(data.message);
				setOpen(true);
				fetchReports();
			} catch {
				setMessage('Failed to delete report');
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
		<Box sx={{ minHeight: '100vh', bgcolor: '#f8fafc', width: '100%', flex: 1, display: 'flex', flexDirection: 'column' }}>
			
			<Box component="main" sx={{ flexGrow: 1,  backgroundColor: '#f8fafc' }}>
				{selected === 'reports' ? (
					<Box>
						
						{/* Reports Table */}
						<Paper sx={{ borderRadius: 2, overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', width: '100%' }}>
							<Box sx={{ p: 3, borderBottom: '1px solid rgba(0, 0, 0, 0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
								<Typography variant="h6" sx={{ fontWeight: 600, color: '#1a1f36' }}>
									Recent Reports
								</Typography>
							</Box>
							<Box sx={{ overflowX: 'auto', width: '100%' }}>
								<table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '100%', tableLayout: 'fixed' }}>
									<thead>
										<tr style={{ backgroundColor: '#f8fafc' }}>
											<th style={{ padding: '16px', textAlign: 'left', fontWeight: 500, color: '#6b7280', fontSize: '0.875rem', borderBottom: '1px solid rgba(0, 0, 0, 0.06)' }}>ID</th>
											<th style={{ padding: '16px', textAlign: 'left', fontWeight: 500, color: '#6b7280', fontSize: '0.875rem', borderBottom: '1px solid rgba(0, 0, 0, 0.06)' }}>Reporter</th>
											<th style={{ padding: '16px', textAlign: 'left', fontWeight: 500, color: '#6b7280', fontSize: '0.875rem', borderBottom: '1px solid rgba(0, 0, 0, 0.06)' }}>Location</th>
											<th style={{ padding: '16px', textAlign: 'left', fontWeight: 500, color: '#6b7280', fontSize: '0.875rem', borderBottom: '1px solid rgba(0, 0, 0, 0.06)' }}>Type</th>
											<th style={{ padding: '16px', textAlign: 'left', fontWeight: 500, color: '#6b7280', fontSize: '0.875rem', borderBottom: '1px solid rgba(0, 0, 0, 0.06)' }}>Status</th>
											<th style={{ padding: '16px', textAlign: 'left', fontWeight: 500, color: '#6b7280', fontSize: '0.875rem', borderBottom: '1px solid rgba(0, 0, 0, 0.06)' }}>Date</th>
											<th style={{ padding: '16px', textAlign: 'right', fontWeight: 500, color: '#6b7280', fontSize: '0.875rem', borderBottom: '1px solid rgba(0, 0, 0, 0.06)' }}>Actions</th>
										</tr>
									</thead>
									<tbody>
										{reports.length === 0 ? (
											<tr>
												<td colSpan="7" style={{ padding: '16px', textAlign: 'center', color: '#6b7280' }}>No reports found.</td>
											</tr>
										) : (
											reports.map(report => (
												<tr key={report.id}>
													<td style={{ padding: '16px', color: '#4b5563', fontSize: '0.875rem', borderBottom: '1px solid rgba(0, 0, 0, 0.06)' }}>#{report.id}</td>
													<td style={{ padding: '16px', color: '#4b5563', fontSize: '0.875rem', borderBottom: '1px solid rgba(0, 0, 0, 0.06)' }}>{report.username}</td>
													<td style={{ padding: '16px', color: '#4b5563', fontSize: '0.875rem', borderBottom: '1px solid rgba(0, 0, 0, 0.06)' }}>{report.location}</td>
													<td style={{ padding: '16px', color: '#4b5563', fontSize: '0.875rem', borderBottom: '1px solid rgba(0, 0, 0, 0.06)' }}>{report.type}</td>
													<td style={{ padding: '16px', borderBottom: '1px solid rgba(0, 0, 0, 0.06)' }}>
														<Box sx={{ 
															backgroundColor: 
																report.status === 'approved' ? '#f0fdf4' : 
																report.status === 'rejected' ? '#fef2f2' : '#fff7ed',
															color: 
																report.status === 'approved' ? '#166534' : 
																report.status === 'rejected' ? '#991b1b' : '#9a3412',
															px: 2,
															py: 0.5,
															borderRadius: '9999px',
															display: 'inline-block',
															fontSize: '0.75rem',
															fontWeight: 500
														}}>
															{report.status.charAt(0).toUpperCase() + report.status.slice(1)}
														</Box>
													</td>
													<td style={{ padding: '16px', color: '#4b5563', fontSize: '0.875rem', borderBottom: '1px solid rgba(0, 0, 0, 0.06)' }}>
														{new Date(report.created_at).toLocaleDateString()}
													</td>
													<td style={{ padding: '16px', textAlign: 'right', borderBottom: '1px solid rgba(0, 0, 0, 0.06)' }}>
														{report.status === 'pending' && (
															<>
																<IconButton 
																	size="small" 
																	sx={{ 
																		color: '#4caf50', 
																		mr: 1,
																		'&:hover': {
																			backgroundColor: 'rgba(76, 175, 80, 0.04)'
																		}
																	}}
																	onClick={() => handleApproveReport(report.id, 'approve')}
																>
																	<CheckIcon fontSize="small" />
																</IconButton>
																<IconButton 
																	size="small" 
																	sx={{ 
																		color: '#f44336',
																		'&:hover': {
																			backgroundColor: 'rgba(244, 67, 54, 0.04)'
																		}
																	}}
																	onClick={() => handleApproveReport(report.id, 'reject')}
																>
																	<CloseIcon fontSize="small" />
																</IconButton>
															</>
														)}
														{report.status === 'approved' && (
															<IconButton 
																size="small" 
																sx={{ 
																	color: '#f44336',
																	mr: 1,
																	'&:hover': {
																		backgroundColor: 'rgba(244, 67, 54, 0.04)'
																	}
																}}
																onClick={() => handleApproveReport(report.id, 'reject')}
															>
																<CloseIcon fontSize="small" />
															</IconButton>
														)}
														{report.status === 'rejected' && (
															<IconButton 
																size="small" 
																sx={{ 
																	color: '#4caf50',
																	mr: 1,
																	'&:hover': {
																		backgroundColor: 'rgba(76, 175, 80, 0.04)'
																	}
																}}
																onClick={() => handleApproveReport(report.id, 'approve')}
															>
																<CheckIcon fontSize="small" />
															</IconButton>
														)}
														{/* Always show hard delete button */}
														<IconButton 
															size="small" 
															sx={{ 
																color: '#d32f2f',
																'&:hover': {
																	backgroundColor: 'rgba(211, 47, 47, 0.08)'
																}
															}}
															onClick={() => handleDeleteReport(report.id)}
														>
															<DeleteIcon fontSize="small" />
														</IconButton>
													</td>
												</tr>
											))
										)}
									</tbody>
								</table>
							</Box>
						</Paper>
					</Box>
				) : (
					<Box sx={{ width: '100%' }}>
						
						{/* Users Table */}
						<Paper sx={{ borderRadius: 2, overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', width: '100%' }}>
							<Box sx={{ p: 3, borderBottom: '1px solid rgba(0, 0, 0, 0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
								<Typography variant="h6" sx={{ fontWeight: 600, color: '#1a1f36' }}>
									Users List
								</Typography>
							</Box>
							<Box sx={{ overflowX: 'auto',width: '100%' }}>
								<table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '100%', tableLayout: 'fixed' }}>
									<thead>
										<tr style={{ backgroundColor: '#f8fafc' }}>
											<th style={{ padding: '16px', textAlign: 'left', fontWeight: 500, color: '#6b7280', fontSize: '0.875rem', borderBottom: '1px solid rgba(0, 0, 0, 0.06)' }}>Username</th>
											<th style={{ padding: '16px', textAlign: 'left', fontWeight: 500, color: '#6b7280', fontSize: '0.875rem', borderBottom: '1px solid rgba(0, 0, 0, 0.06)' }}>Status</th>
											<th style={{ padding: '16px', textAlign: 'right', fontWeight: 500, color: '#6b7280', fontSize: '0.875rem', borderBottom: '1px solid rgba(0, 0, 0, 0.06)' }}>Actions</th>
										</tr>
									</thead>
									<tbody>
										{users.length === 0 ? (
											<tr>
												<td colSpan="3" style={{ padding: '16px', textAlign: 'center', color: '#6b7280' }}>No users found.</td>
											</tr>
										) : (
											users.map(user => (
												<tr key={user.username}>
													<td style={{ padding: '16px', color: '#4b5563', fontSize: '0.875rem', borderBottom: '1px solid rgba(0, 0, 0, 0.06)' }}>
														{user.username}
													</td>
													<td style={{ padding: '16px', borderBottom: '1px solid rgba(0, 0, 0, 0.06)' }}>
														<Box sx={{ 
															backgroundColor: user.is_approved ? '#f0fdf4' : '#fff7ed',
															color: user.is_approved ? '#166534' : '#9a3412',
															px: 2,
															py: 0.5,
															borderRadius: '9999px',
															display: 'inline-block',
															fontSize: '0.75rem',
															fontWeight: 500
														}}>
															{user.is_approved ? 'Approved' : 'Pending'}
														</Box>
													</td>
													<td style={{ padding: '16px', textAlign: 'right', borderBottom: '1px solid rgba(0, 0, 0, 0.06)' }}>
														{!user.is_approved && (
															<IconButton 
																size="small" 
																sx={{ 
																	color: '#4caf50',
																	mr: 1,
																	'&:hover': {
																		backgroundColor: 'rgba(76, 175, 80, 0.04)'
																	}
																}}
																onClick={() => handleApprove(user.username)}
															>
																<CheckIcon fontSize="small" />
															</IconButton>
														)}
														<IconButton 
															size="small" 
															sx={{ 
																color: '#f44336',
																'&:hover': {
																	backgroundColor: 'rgba(244, 67, 54, 0.04)'
																}
															}}
															onClick={() => handleDelete(user.username)}
														>
															<DeleteIcon fontSize="small" />
														</IconButton>
													</td>
												</tr>
											))
										)}
									</tbody>
								</table>
							</Box>
						</Paper>
					</Box>
				)}
				<Snackbar 
					open={open} 
					autoHideDuration={3000} 
					onClose={handleClose} 
					anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
				>
					<MuiAlert 
						elevation={6}
						variant="filled"
						onClose={handleClose} 
						severity={message.includes('approved') ? 'success' : 'error'} 
						sx={{ width: '100%' }}
					>
						{message}
					</MuiAlert>
				</Snackbar>
			</Box>
		</Box>
	);
};

export default AdminDashboard;
									