import React from 'react';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PeopleIcon from '@mui/icons-material/People';
import DashboardIcon from '@mui/icons-material/Dashboard';


const Sidebar = ({ selected, setSelected }) => (
  
  <Box
    sx={{
      width: 280,
      boxSizing: 'border-box',
      background: '#fff',
      borderRight: 'none',
      boxShadow: '0 4px 20px 0 rgba(0,0,0,0.05)',
      marginTop: '0',
      marginBottom: '0',
      borderRadius: '0',
      padding: '0',
      height: '100vh',
      overflowY: 'auto',
      '&::-webkit-scrollbar': {
        width: '6px',
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(167, 119, 227, 0.2)',
        borderRadius: '3px',
      },
    }}
  >
    <Box sx={{ p: 3, borderBottom: '1px solid rgba(0, 0, 0, 0.06)', display: 'flex', alignItems: 'center', gap: 2 }}>
      <Box sx={{ width: 30, height: 30, borderRadius: '10px', background: 'linear-gradient(135deg, #6e8efb 0%, #a777e3 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <DashboardIcon sx={{ color: 'white', fontSize: '1.3rem' }} />
      </Box>
      <Box sx={{ flex: 1 }}>
        <Typography  sx={{ fontSize: '20px', fontWeight: 600, color: '#1a1f36' }}>
           Admin Dashboard
        </Typography>
      </Box>
    </Box>
    <List sx={{ px: 2, py: 1 }}>
      <ListItem disablePadding>
        <ListItemButton
          selected={selected === 'reports'}
          onClick={() => setSelected('reports')}
          sx={{
            borderRadius: '8px',
            mb: 0.5,
            py: 1,
            '&.Mui-selected': {
              background: '#f1f5f9',
              color: '#6e8efb',
              '&:hover': { background: '#f1f5f9' },
              '& .MuiListItemIcon-root': { color: '#6e8efb' },
            },
            '&:hover': { background: '#f8fafc' },
            transition: 'all 0.2s ease-in-out',
          }}
        >
          <ListItemIcon sx={{ color: '#6e8efb', minWidth: '42px', '& .MuiSvgIcon-root': { fontSize: '1.3rem' } }}>
            <AssessmentIcon />
          </ListItemIcon>
          <ListItemText primary="Reports" sx={{ '& .MuiTypography-root': { fontWeight: 500, fontSize: '0.95rem', letterSpacing: '0.01em' } }} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton
          selected={selected === 'users'}
          onClick={() => setSelected('users')}
          sx={{
            borderRadius: '8px',
            mb: 0.5,
            py: 1,
            '&.Mui-selected': {
              background: '#f1f5f9',
              color: '#6e8efb',
              '&:hover': { background: '#f1f5f9' },
              '& .MuiListItemIcon-root': { color: '#6e8efb' },
            },
            '&:hover': { background: '#f8fafc' },
            transition: 'all 0.2s ease-in-out',
          }}
        >
          <ListItemIcon sx={{ color: '#6e8efb', minWidth: '42px', '& .MuiSvgIcon-root': { fontSize: '1.3rem' } }}>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Users" sx={{ '& .MuiTypography-root': { fontWeight: 500, fontSize: '0.95rem', letterSpacing: '0.01em' } }} />
        </ListItemButton>
      </ListItem>
    </List>
  </Box>
);

export default Sidebar;
