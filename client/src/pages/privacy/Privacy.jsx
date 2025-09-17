import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Container,
  List,
  ListItem,
  ListItemText,
  Divider,
  Avatar,
  Grid,
} from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';

const accentColor = '#6e8efb';

const sectionStyle = {
  background: 'linear-gradient(90deg, #e8eaf6 0%, #f3f6fb 100%)',
  p: 4,
  borderRadius: 3,
  boxShadow: '0 8px 24px rgba(110,142,251,0.08)',
  mb: 4,
};

const headingStyle = {
  color: accentColor,
  mt: 3,
  fontWeight: 700,
  fontSize: { xs: '1.2rem', md: '1.5rem' },
  letterSpacing: 0.5,
};

const iconGradient = {
  background: `linear-gradient(135deg, ${accentColor} 0%, #88d3ce 100%)`,
  color: '#fff',
  boxShadow: '0 4px 12px rgba(110,142,251,0.2)',
};

const highlightStyle = {
  background: '#f5faff',
  borderLeft: `4px solid ${accentColor}`,
  p: 2,
  mb: 2,
  borderRadius: 1,
};

const Privacy = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Avatar sx={{ ...iconGradient, width: 72, height: 72, mx: 'auto', mb: 2 }}>
          <SecurityIcon sx={{ fontSize: 48 }} />
        </Avatar>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            color: '#1a1f36',
            fontWeight: 700,
            letterSpacing: 1,
            fontSize: { xs: '2rem', md: '2.5rem' },
          }}
        >
          Privacy Policy
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 1 }}>
          How we collect, use, and protect your personal information
        </Typography>
        <Divider sx={{ my: 2, background: accentColor, height: 2, borderRadius: 2 }} />
      </Box>

      <Paper sx={{ ...sectionStyle }}>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3, textAlign: 'right', fontStyle: 'italic' }}>
          Last updated: {new Date().toLocaleDateString()}
        </Typography>

        <Box sx={highlightStyle}>
          <Typography variant="h5" gutterBottom sx={headingStyle}>
            1. Information We Collect
          </Typography>
          <Typography variant="body1" paragraph>
            We collect information you provide directly to us, such as when you create an account, submit a report, or contact us for support. This includes:
          </Typography>
          <List sx={{ pl: 3 }}>
            <ListItem sx={{ px: 0 }}>
              <ListItemText
                primary="Account information (username, email, password)"
                sx={{ color: '#374151' }}
              />
            </ListItem>
            <ListItem sx={{ px: 0 }}>
              <ListItemText primary="Report details (location, incident type, description)" sx={{ color: '#374151' }} />
            </ListItem>
            <ListItem sx={{ px: 0 }}>
              <ListItemText primary="Contact information when you reach out to us" sx={{ color: '#374151' }} />
            </ListItem>
          </List>
        </Box>

        <Divider sx={{ my: 3, background: accentColor, opacity: 0.4 }} />

        <Box sx={highlightStyle}>
          <Typography variant="h5" gutterBottom sx={headingStyle}>
            2. How We Use Your Information
          </Typography>
          <Typography variant="body1" paragraph>
            We use the information we collect to:
          </Typography>
          <List sx={{ pl: 3 }}>
            <ListItem sx={{ px: 0 }}>
              <ListItemText primary="Process and manage your reports" sx={{ color: '#374151' }} />
            </ListItem>
            <ListItem sx={{ px: 0 }}>
              <ListItemText primary="Communicate with you about your account and reports" sx={{ color: '#374151' }} />
            </ListItem>
            <ListItem sx={{ px: 0 }}>
              <ListItemText primary="Improve our services and develop new features" sx={{ color: '#374151' }} />
            </ListItem>
            <ListItem sx={{ px: 0 }}>
              <ListItemText primary="Ensure the security and integrity of our platform" sx={{ color: '#374151' }} />
            </ListItem>
          </List>
        </Box>

        <Divider sx={{ my: 3, background: accentColor, opacity: 0.4 }} />

        <Box sx={highlightStyle}>
          <Typography variant="h5" gutterBottom sx={headingStyle}>
            3. Information Sharing
          </Typography>
          <Typography variant="body1" paragraph>
            We do not sell, trade, or otherwise transfer your personal information to third parties, except in the following circumstances:
          </Typography>
          <List sx={{ pl: 3 }}>
            <ListItem sx={{ px: 0 }}>
              <ListItemText primary="With your consent" sx={{ color: '#374151' }} />
            </ListItem>
            <ListItem sx={{ px: 0 }}>
              <ListItemText primary="To comply with legal obligations" sx={{ color: '#374151' }} />
            </ListItem>
            <ListItem sx={{ px: 0 }}>
              <ListItemText primary="To protect our rights and prevent fraud" sx={{ color: '#374151' }} />
            </ListItem>
            <ListItem sx={{ px: 0 }}>
              <ListItemText primary="With service providers who help us operate our platform" sx={{ color: '#374151' }} />
            </ListItem>
          </List>
        </Box>

        <Divider sx={{ my: 3, background: accentColor, opacity: 0.4 }} />

        <Box sx={highlightStyle}>
          <Typography variant="h5" gutterBottom sx={headingStyle}>
            4. Data Security
          </Typography>
          <Typography variant="body1" paragraph>
            We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption of sensitive data and regular security audits.
          </Typography>
        </Box>

        <Divider sx={{ my: 3, background: accentColor, opacity: 0.4 }} />

        <Box sx={highlightStyle}>
          <Typography variant="h5" gutterBottom sx={headingStyle}>
            5. Your Rights
          </Typography>
          <Typography variant="body1" paragraph>
            You have the right to:
          </Typography>
          <List sx={{ pl: 3 }}>
            <ListItem sx={{ px: 0 }}>
              <ListItemText primary="Access and update your personal information" sx={{ color: '#374151' }} />
            </ListItem>
            <ListItem sx={{ px: 0 }}>
              <ListItemText primary="Request deletion of your data" sx={{ color: '#374151' }} />
            </ListItem>
            <ListItem sx={{ px: 0 }}>
              <ListItemText primary="Opt out of marketing communications" sx={{ color: '#374151' }} />
            </ListItem>
            <ListItem sx={{ px: 0 }}>
              <ListItemText primary="Request data portability" sx={{ color: '#374151' }} />
            </ListItem>
          </List>
        </Box>

        <Divider sx={{ my: 3, background: accentColor, opacity: 0.4 }} />

        <Box sx={highlightStyle}>
          <Typography variant="h5" gutterBottom sx={headingStyle}>
            6. Contact Us
          </Typography>
          <Typography variant="body1" paragraph>
            If you have any questions about this Privacy Policy or our data practices, please contact us at:
          </Typography>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="body1">
                <strong>Email:</strong> <span style={{ color: accentColor }}>privacy@trafficreport.com</span>
              </Typography>
              <Typography variant="body1">
                <strong>Phone:</strong> <span style={{ color: accentColor }}>+1 (555) 123-4567</span>
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1">
                <strong>Address:</strong> 123 Traffic Management Center, City, State 12345
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export default Privacy;