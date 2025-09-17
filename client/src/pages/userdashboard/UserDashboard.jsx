import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import {
  Box,
  Snackbar,
  Typography,
  Paper,
  IconButton,
  Card,
  CardContent,
  Button,
  Modal,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select
} from '@mui/material';
import UserSidebar from '../../components/UserSidebar';
import MuiAlert from '@mui/material/Alert';
import ReportIcon from '@mui/icons-material/Report';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddIcon from '@mui/icons-material/Add';
import ViewListIcon from '@mui/icons-material/ViewList';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

export default function UserDashboard() {
  const navigate = useNavigate();
  const { selected } = useOutletContext();
  const [reports, setReports] = useState([]);
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [newReport, setNewReport] = useState({
    location: '',
    type: '',
    description: ''
  });
  const [editMode, setEditMode] = useState(false);
  const [editingReportId, setEditingReportId] = useState(null);

  useEffect(() => {
    const username = localStorage.getItem('username');
    if (!username) {
      navigate('/');
    }
  }, [navigate]);

  useEffect(() => {
    if (selected === 'dashboard' || selected === 'reports') {
      fetchReports();
    }
  }, [selected]);

  const fetchReports = useCallback(async () => {
    try {
      let url;
      if (selected === 'dashboard') {
        // Show all reports for dashboard
        url = `${BASE_URL}/api/reports/`;
      } else if (selected === 'reports') {
        // Show only user's reports for my reports
        const username = localStorage.getItem('username');
        url = `${BASE_URL}/api/reports/user/${username}/`;
      }
      
      const res = await fetch(url);
      const data = await res.json();
      setReports(data.reports || []);
    } catch {
      setMessage('Failed to fetch reports');
      setOpen(true);
    }
  }, [selected]);

  useEffect(() => {
    if (selected === 'dashboard' || selected === 'reports') {
      fetchReports();
    }
  }, [selected, fetchReports]);  const handleDelete = async (reportId) => {
    try {
      const res = await fetch(`${BASE_URL}/api/reports/delete/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
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

  const handleModalClose = () => {
    setOpenModal(false);
    setNewReport({
      location: '',
      type: '',
      description: ''
    });
    setEditMode(false);
    setEditingReportId(null);
  };

  const handleEdit = (report) => {
    setNewReport({
      location: report.location,
      type: report.type,
      description: report.description
    });
    setEditMode(true);
    setEditingReportId(report.id);
    setOpenModal(true);
  };

  const handleSubmitReport = async () => {
    try {
      const username = localStorage.getItem('username');
      if (!username) {
        setMessage('You must be logged in to submit a report');
        setOpen(true);
        navigate('/login');
        return;
      }

      if (!newReport.location || !newReport.type || !newReport.description) {
        setMessage('Please fill in all fields');
        setOpen(true);
        return;
      }

      const endpoint = editMode ? `${BASE_URL}/api/reports/edit/` : `${BASE_URL}/api/reports/create/`;
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...newReport,
          username,
          report_id: editMode ? editingReportId : undefined
        })
      });
      const data = await response.json();
      
      if (response.ok) {
        setMessage(editMode ? 'Report updated successfully!' : 'Report submitted successfully!');
        handleModalClose();
        fetchReports();
      } else {
        setMessage(data.message || (editMode ? 'Failed to update report' : 'Failed to submit report'));
      }
      setOpen(true);
    } catch (error) {
      console.error('Error with report:', error);
      setMessage(editMode ? 'Failed to update report' : 'Failed to submit report');
      setOpen(true);
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f8fafc' }}>
      <Box sx={{ display: 'flex', height: '100%' }}>
       
        <Modal
          open={openModal}
          onClose={handleModalClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
          }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {editMode ? 'Edit Report' : 'Submit New Report'}
              </Typography>
              <IconButton onClick={handleModalClose} size="small">
                <CloseIcon />
              </IconButton>
            </Box>
            
            <Box component="form" noValidate autoComplete="off" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                required
                fullWidth
                label="Location"
                value={newReport.location}
                onChange={(e) => setNewReport({ ...newReport, location: e.target.value })}
              />
              
              <FormControl fullWidth required>
                <InputLabel>Type</InputLabel>
                <Select
                  value={newReport.type}
                  label="Type"
                  onChange={(e) => setNewReport({ ...newReport, type: e.target.value })}
                >
                  <MenuItem value="accident">Accident</MenuItem>
                  <MenuItem value="congestion">Congestion</MenuItem>
                  <MenuItem value="construction">Construction</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </FormControl>
              
              <TextField
                required
                fullWidth
                label="Description"
                multiline
                rows={4}
                value={newReport.description}
                onChange={(e) => setNewReport({ ...newReport, description: e.target.value })}
              />
              
              <Button
                variant="contained"
                onClick={handleSubmitReport}
                sx={{
                  backgroundColor: '#6e8efb',
                  '&:hover': {
                    backgroundColor: '#5a7af5',
                  },
                  textTransform: 'none',
                  mt: 2
                }}
              >
                {editMode ? 'Update Report' : 'Submit Report'}
              </Button>
            </Box>
          </Box>
        </Modal>

        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>


            <Box component="main" sx={{ flexGrow: 1, p: 4, backgroundColor: '#f8fafc' }}>
               <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 3, mb: 4 }}>
                <Card sx={{ borderRadius: 2, boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                  <CardContent>
                    <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                      Total Reports
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 600, color: '#1a1f36' }}>
                      {reports.length}
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ borderRadius: 2, boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                  <CardContent>
                    <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                      Pending
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 600, color: '#ff9800' }}>
                      {reports.filter(r => r.status === 'pending').length}
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ borderRadius: 2, boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                  <CardContent>
                    <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                      Approved
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 600, color: '#4caf50' }}>
                      {reports.filter(r => r.status === 'approved').length}
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ borderRadius: 2, boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                  <CardContent>
                    <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                      Rejected
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 600, color: '#f44336' }}>
                      {reports.filter(r => r.status === 'rejected').length}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>

              <Paper sx={{ borderRadius: 2, overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', width: '100%' }}>
                <Box sx={{ p: 3, borderBottom: '1px solid rgba(0, 0, 0, 0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: '#1a1f36' }}>
                    {selected === 'dashboard' ? 'All Reports' : 'My Reports'}
                  </Typography>
                  {selected === 'reports' && (
                    <Button
                      variant="contained"
                      startIcon={<AddIcon />}
                      onClick={() => setOpenModal(true)}
                      sx={{
                        backgroundColor: '#6e8efb',
                        '&:hover': {
                          backgroundColor: '#5a7af5',
                        },
                        textTransform: 'none'
                      }}
                    >
                      New Report
                    </Button>
                  )}
                </Box>
                <Box sx={{ overflowX: 'auto', overflowY: 'auto', width: '100%' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '100%', tableLayout: 'fixed' }}>
                    <thead>
                      <tr style={{ backgroundColor: '#f8fafc' }}>
                        <th style={{ padding: '16px', textAlign: 'left', fontWeight: 500, color: '#6b7280', fontSize: '0.875rem', borderBottom: '1px solid rgba(0, 0, 0, 0.06)' }}>ID</th>
                        {selected === 'dashboard' && (
                          <th style={{ padding: '16px', textAlign: 'left', fontWeight: 500, color: '#6b7280', fontSize: '0.875rem', borderBottom: '1px solid rgba(0, 0, 0, 0.06)' }}>Username</th>
                        )}
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
                          <td colSpan={selected === 'dashboard' ? 7 : 6} style={{ padding: '16px', textAlign: 'center', color: '#6b7280' }}>No reports found.</td>
                        </tr>
                      ) : (
                        reports.map(report => (
                          <tr key={report.id}>
                            <td style={{ padding: '16px', color: '#4b5563', fontSize: '0.875rem', borderBottom: '1px solid rgba(0, 0, 0, 0.06)' }}>#{report.id}</td>
                            {selected === 'dashboard' && (
                              <td style={{ padding: '16px', color: '#4b5563', fontSize: '0.875rem', borderBottom: '1px solid rgba(0, 0, 0, 0.06)' }}>{report.username || 'Unknown'}</td>
                            )}
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
                            <td style={{ padding: '16px', color: '#4b5563', fontSize: '0.875rem', borderBottom: '1px solid rgba(0, 0, 0, 0.06)' }}>{new Date(report.created_at).toLocaleDateString()}</td>
                            <td style={{ padding: '16px', textAlign: 'right', borderBottom: '1px solid rgba(0, 0, 0, 0.06)' }}>
                              <IconButton 
                                size="small"
                                onClick={() => handleEdit(report)}
                                disabled={report.status !== 'pending' || (selected === 'dashboard' && report.username !== localStorage.getItem('username'))}
                                sx={{ 
                                  color: (report.status === 'pending' && (selected === 'reports' || report.username === localStorage.getItem('username'))) ? '#6e8efb' : '#c0c0c0',
                                  mr: 1,
                                  '&:hover': {
                                    backgroundColor: (report.status === 'pending' && (selected === 'reports' || report.username === localStorage.getItem('username'))) ? 'rgba(110, 142, 251, 0.04)' : 'transparent'
                                  },
                                  '&.Mui-disabled': {
                                    opacity: 0.5
                                  }
                                }}
                                title={
                                  report.status !== 'pending' 
                                    ? `Cannot edit ${report.status} report` 
                                    : (selected === 'dashboard' && report.username !== localStorage.getItem('username'))
                                    ? 'Cannot edit other users\' reports'
                                    : 'Edit report'
                                }
                              >
                                <EditIcon fontSize="small" />
                              </IconButton>
                              <IconButton 
                                size="small"
                                onClick={() => handleDelete(report.id)}
                                disabled={selected === 'dashboard' && report.username !== localStorage.getItem('username')}
                                sx={{ 
                                  color: (selected === 'reports' || report.username === localStorage.getItem('username')) ? '#f44336' : '#c0c0c0',
                                  '&:hover': {
                                    backgroundColor: (selected === 'reports' || report.username === localStorage.getItem('username')) ? 'rgba(244, 67, 54, 0.04)' : 'transparent'
                                  },
                                  '&.Mui-disabled': {
                                    opacity: 0.5
                                  }
                                }}
                                title={
                                  (selected === 'dashboard' && report.username !== localStorage.getItem('username'))
                                    ? 'Cannot delete other users\' reports'
                                    : 'Delete report'
                                }
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
                severity={message.includes('success') ? 'success' : 'error'} 
                sx={{ width: '100%' }}
              >
                {message}
              </MuiAlert>
            </Snackbar>
          </Box>
        </Box>
      </Box>

  );
}
