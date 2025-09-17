import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Container,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Alert,
  Snackbar,
  Divider,
  Avatar,
  Fade,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

const accent = '#1976d2';
const emergency = '#d32f2f';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSnackbar({
      open: true,
      message: 'Thank you for your message! We\'ll get back to you soon.',
      severity: 'success'
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #e3f0ff 0%, #f8fbff 100%)',
        py: 4,
   
      }}
    >
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Fade in timeout={700}>
            <Avatar
              sx={{
                mx: 'auto',
                bgcolor: accent,
                width: 84,
                height: 84,
                boxShadow: '0 8px 24px rgba(25,118,210,0.12)',
                mb: 2,
              }}
            >
              <ContactSupportIcon sx={{ fontSize: 42, color: '#fff' }} />
            </Avatar>
          </Fade>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 700,
              color: accent,
              mb: 2,
              letterSpacing: 1,
              fontSize: { xs: '2rem', md: '2.5rem' }
            }}
          >
            Contact Us
          </Typography>
          <Typography variant="h6" sx={{ color: '#374151', maxWidth: 600, mx: 'auto', mb: 2 }}>
              Have questions about our traffic reporting system? We're here to help you make roads safer for everyone.
            </Typography>
          <Divider sx={{ mx: 'auto', width: 220, my: 2, background: accent, height: 3, borderRadius: 1 }} />
        </Box>

        <Grid container spacing={5} alignItems="flex-start">
          {/* Contact Form - single column */}
          <Grid item xs={12} md={6} sx={{ width: '100%' }}>
            <Paper
              elevation={6}
              sx={{
                p: { xs: 2.5, md: 4 },
                borderRadius: 3,
                background: 'linear-gradient(120deg, #ffffff 70%, #e3f0ff 100%)',
                boxShadow: '0 8px 24px rgba(25,118,210,0.08)',
                width: '100%',
                maxWidth: '100%',
              }}
            >
              <Box
                sx={{
                  width: 100,
                  height: 100,
                  background: 'radial-gradient(circle, #e3f0ff 0%, transparent 70%)',
                  zIndex: 0,
                }}
              />
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  color: accent,
                  letterSpacing: 0.5
                }}
              >
                Send us a Message
              </Typography>

              <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
                <Grid container spacing={2} direction="column" sx={{ width: '100%' }}>
                  <Grid item xs={12} sx={{ width: '100%' }}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      variant="outlined"
                      required
                      sx={{
                        background: '#f7fbff',
                        borderRadius: 2,
                        width: '100%',
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ width: '100%' }}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      variant="outlined"
                      required
                      sx={{
                        background: '#f7fbff',
                        borderRadius: 2,
                        width: '100%',
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ width: '100%' }}>
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      variant="outlined"
                      required
                      sx={{
                        background: '#f7fbff',
                        borderRadius: 2,
                        width: '100%',
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ width: '100%' }}>
                    <TextField
                      fullWidth
                      label="Your Message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      variant="outlined"
                      sx={{
                        background: '#f7fbff',
                        borderRadius: 2,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      size="large"
                      sx={{
                        mt: 2,
                        fontWeight: 700,
                        background: `linear-gradient(90deg, ${accent} 60%, #84b8ff 100%)`,
                        boxShadow: '0 4px 12px rgba(25,118,210,0.12)',
                        letterSpacing: 0.5,
                        py: 1.2,
                        '&:hover': {
                          background: `linear-gradient(90deg, #1565c0 70%, #84b8ff 100%)`,
                        }
                      }}
                      endIcon={<SendIcon />}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>

                <Grid item xs={12} md={6}>
                <Box
                  sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  gap: 3,
                  justifyContent: 'center',
                  alignItems: 'stretch',
                  height: '100%',
                  marginBottom: '20px',
                  }}
                >
                  {/* Email Card */}
              <Card
                elevation={4}
                sx={{
                  borderRadius: 2.5,
                  background: 'linear-gradient(100deg, #e3f0ff 0%, #ffffff 100%)',
                  boxShadow: '0 4px 16px rgba(25,118,210,0.08)',
                  minWidth: 210,
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <CardContent sx={{ p: 2.5, flex: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <EmailIcon sx={{ color: accent, mr: 2, fontSize: '2rem' }} />
                    <Typography variant="h6" sx={{ fontWeight: 700, color: accent }}>
                      Email Support
                    </Typography>
                  </Box>
                  <Typography variant="body1" sx={{ mb: 1, fontWeight: 500, color: '#333' }}>
                    support@trafficreport.com
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666' }}>
                    We typically respond within 24 hours during business days.
                  </Typography>
                </CardContent>
              </Card>

              {/* Phone Card */}
              <Card
                elevation={4}
                sx={{
                  borderRadius: 2.5,
                  background: 'linear-gradient(100deg, #e3f0ff 0%, #ffffff 100%)',
                  boxShadow: '0 4px 16px rgba(25,118,210,0.08)',
                  minWidth: 210,
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <CardContent sx={{ p: 2.5, flex: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <PhoneIcon sx={{ color: accent, mr: 2, fontSize: '2rem' }} />
                    <Typography variant="h6" sx={{ fontWeight: 700, color: accent }}>
                      Phone Support
                    </Typography>
                  </Box>
                  <Typography variant="body1" sx={{ mb: 1, fontWeight: 500, color: '#333' }}>
                    +1 (555) 123-4567
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666' }}>
                    Monday - Friday: 9:00 AM - 6:00 PM EST
                  </Typography>
                </CardContent>
              </Card>

              {/* Location Card */}
              <Card
                elevation={4}
                sx={{
                  borderRadius: 2.5,
                  background: 'linear-gradient(100deg, #e3f0ff 0%, #ffffff 100%)',
                  boxShadow: '0 4px 16px rgba(25,118,210,0.08)',
                  minWidth: 210,
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <CardContent sx={{ p: 2.5, flex: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <LocationOnIcon sx={{ color: accent, mr: 2, fontSize: '2rem' }} />
                    <Typography variant="h6" sx={{ fontWeight: 700, color: accent }}>
                      Our Location
                    </Typography>
                  </Box>
                  <Typography variant="body1" sx={{ mb: 1, fontWeight: 500, color: '#333' }}>
                    123 Traffic Management Center<br />
                    City, State 12345
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666' }}>
                    Located in the heart of downtown, easily accessible by public transport.
                  </Typography>
                </CardContent>
              </Card>

              {/* Emergency Card */}
              <Card
                elevation={6}
                sx={{
                  borderRadius: 2.5,
                  backgroundColor: '#ffebee',
                  borderLeft: `7px solid ${emergency}`,
                  boxShadow: '0 4px 20px rgba(211,47,47,0.08)',
                  minWidth: 210,
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <CardContent sx={{ p: 2.5, flex: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <AccessTimeIcon sx={{ color: emergency, mr: 2, fontSize: '2rem' }} />
                    <Typography variant="h6" sx={{ fontWeight: 700, color: emergency }}>
                      Emergency Services
                    </Typography>
                  </Box>
                  <Typography variant="body1" sx={{ mb: 1, fontWeight: 500, color: emergency }}>
                    Call 911 for emergencies
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666' }}>
                    For immediate traffic emergencies and accidents requiring urgent response.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Snackbar for form submission feedback */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{
            width: '100%',
            fontWeight: 500,
            fontSize: '1.1rem',
            letterSpacing: 0.2,
          }}
          variant="filled"
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;