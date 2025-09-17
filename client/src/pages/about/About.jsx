import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Container,
  Grid,
  Card,
  CardContent,
  Divider,
  Avatar,
  Fade,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import SecurityIcon from '@mui/icons-material/Security';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';

const accent = '#1976d2';

const About = () => {
  const features = [
    {
      icon: <GpsFixedIcon sx={{ fontSize: 28, color: accent }} />,
      title: "Real-time Reporting",
      description: "Report traffic incidents instantly with GPS location tracking for accurate reporting"
    },
    {
      icon: <TrackChangesIcon sx={{ fontSize: 28, color: accent }} />,
      title: "Status Tracking",
      description: "Monitor the progress of your reports with real-time status updates"
    },
    {
      icon: <DashboardIcon sx={{ fontSize: 28, color: accent }} />,
      title: "Admin Dashboard",
      description: "Comprehensive dashboard for authorities to manage and respond to reports"
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 28, color: accent }} />,
      title: "Secure Platform",
      description: "Advanced security measures to protect user data and ensure privacy"
    }
  ];

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
              <InfoIcon sx={{ fontSize: 42, color: '#fff' }} />
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
            About Traffic Reporting System
          </Typography>
          <Typography variant="h6" sx={{ color: '#374151', maxWidth: 600, mx: 'auto', mb: 2 }}>
            Making roads safer through community-driven traffic incident reporting
          </Typography>
          <Divider sx={{ mx: 'auto', width: 220, my: 2, background: accent, height: 3, borderRadius: 1 }} />
        </Box>

        <Grid container spacing={4}>
          {/* Mission Section */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={6}
              sx={{
                p: 4,
                borderRadius: 3,
                background: 'linear-gradient(120deg, #ffffff 70%, #e3f0ff 100%)',
                boxShadow: '0 8px 24px rgba(25,118,210,0.08)',
                height: '100%'
              }}
            >
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 3
              }}>
                <Box sx={{
                  width: 50,
                  height: 50,
                  borderRadius: '50%',
                  background: `linear-gradient(90deg, ${accent} 60%, #84b8ff 100%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mr: 2,
                  boxShadow: '0 4px 12px rgba(25,118,210,0.12)'
                }}>
                  <TrackChangesIcon sx={{ color: 'white', fontSize: 24 }} />
                </Box>
                <Typography variant="h4" sx={{ fontWeight: 600, color: accent }}>
                  Our Mission
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ color: '#374151', lineHeight: 1.6, mb: 2 }}>
                The Traffic Reporting System is designed to improve road safety and traffic management by enabling citizens to report traffic incidents, congestion, and road hazards in real-time.
              </Typography>
              <Typography variant="body1" sx={{ color: '#374151', lineHeight: 1.6 }}>
                Our platform connects users with local authorities to ensure prompt response and resolution, creating safer roads for everyone.
              </Typography>
            </Paper>
          </Grid>

          {/* How It Works Section */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={6}
              sx={{
                p: 4,
                borderRadius: 3,
                background: 'linear-gradient(120deg, #ffffff 70%, #e3f0ff 100%)',
                boxShadow: '0 8px 24px rgba(25,118,210,0.08)',
                height: '100%'
              }}
            >
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 3
              }}>
                <Box sx={{
                  width: 50,
                  height: 50,
                  borderRadius: '50%',
                  background: `linear-gradient(90deg, ${accent} 60%, #84b8ff 100%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mr: 2,
                  boxShadow: '0 4px 12px rgba(25,118,210,0.12)'
                }}>
                  <LocationOnIcon sx={{ color: 'white', fontSize: 24 }} />
                </Box>
                <Typography variant="h4" sx={{ fontWeight: 600, color: accent }}>
                  How It Works
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ color: '#374151', lineHeight: 1.6, mb: 2 }}>
                Users can easily report traffic issues through our intuitive web interface. Reports are categorized and prioritized, then forwarded to the appropriate authorities for immediate action.
              </Typography>
              <Typography variant="body1" sx={{ color: '#374151', lineHeight: 1.6 }}>
                Our system ensures transparency and accountability in traffic management, keeping communities informed about road conditions and safety improvements.
              </Typography>
            </Paper>
          </Grid>

          {/* Key Features Section */}
          <Grid item xs={12}>
            <Paper
              elevation={6}
              sx={{
                p: 4,
                borderRadius: 3,
                background: 'linear-gradient(120deg, #ffffff 70%, #e3f0ff 100%)',
                boxShadow: '0 8px 24px rgba(25,118,210,0.08)'
              }}
            >
              <Box sx={{
                textAlign: 'center',
                mb: 4
              }}>
                <Typography variant="h4" sx={{ fontWeight: 600, color: accent, mb: 2 }}>
                  Key Features
                </Typography>
                <Divider sx={{ mx: 'auto', width: 100, background: accent, height: 3, borderRadius: 1 }} />
              </Box>

              <Grid container spacing={3}>
                {features.map((feature, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Card
                      elevation={2}
                      sx={{
                        borderRadius: 2,
                        background: 'linear-gradient(100deg, #f7fbff 0%, #ffffff 100%)',
                        boxShadow: '0 4px 12px rgba(25,118,210,0.04)',
                        border: '1px solid #e3f0ff',
                        height: '100%',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: '0 8px 25px rgba(25,118,210,0.08)'
                        }
                      }}
                    >
                      <CardContent sx={{ p: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          {feature.icon}
                          <Typography variant="h6" sx={{ fontWeight: 600, color: accent, ml: 2 }}>
                            {feature.title}
                          </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ color: '#6b7280', lineHeight: 1.5 }}>
                          {feature.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
