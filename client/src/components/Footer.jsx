import React from 'react';
import { Box, Typography, Grid, Link, Button, Tooltip } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';
import HelpIcon from '@mui/icons-material/Help';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import SecurityIcon from '@mui/icons-material/Security';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Footer.css';

const Footer = () => (
  <footer className="app-footer">
    <Box sx={{
      width: '100%',

      px: 3,
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',

    }}>


      <Grid container spacing={30} sx={{ alignItems: 'stretch'}}>
       
        {/* Quick Links */}
        <Grid item xs={6} md={4} sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="subtitle2" sx={{ color: '#ffffff', fontWeight: 600, mb: 1.5, fontSize: '0.85rem' }}>
            Quick Links
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.8, flex: 1 }}>
            <Tooltip title="Learn more about us" arrow placement="right">
              <Link
                component={RouterLink}
                to="/about"
                sx={{
                  color: '#e2e8f0',
                  textDecoration: 'none',
                  fontSize: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.7,
                  py: 0.3,
                  px: 0.5,
                  borderRadius: '4px',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: '#60a5fa',
                    backgroundColor: 'rgba(96, 165, 250, 0.1)',
                    transform: 'translateX(3px)'
                  }
                }}
              >
                <InfoIcon sx={{ fontSize: '0.9rem' }} />
                About
              </Link>
            </Tooltip>
            <Tooltip title="Get help and FAQs" arrow placement="right">
              <Link
                component={RouterLink}
                to="/help"
                sx={{
                  color: '#e2e8f0',
                  textDecoration: 'none',
                  fontSize: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.7,
                  py: 0.3,
                  px: 0.5,
                  borderRadius: '4px',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: '#60a5fa',
                    backgroundColor: 'rgba(96, 165, 250, 0.1)',
                    transform: 'translateX(3px)'
                  }
                }}
              >
                <HelpIcon sx={{ fontSize: '0.9rem' }} />
                Help
              </Link>
            </Tooltip>
            <Tooltip title="Contact us" arrow placement="right">
              
              <Link
                component={RouterLink}
                to="/contact"
                sx={{
                  color: '#e2e8f0',
                  textDecoration: 'none',
                  fontSize: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.7,
                  py: 0.3,
                  px: 0.5,
                  borderRadius: '4px',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: '#60a5fa',
                    backgroundColor: 'rgba(96, 165, 250, 0.1)',
                    transform: 'translateX(3px)'
                  }
                }}
              >
                <ContactMailIcon sx={{ fontSize: '0.9rem' }} />
                Contact
              </Link>
            </Tooltip>
            <Tooltip title="Privacy Policy" arrow placement="right">
              <Link
                component={RouterLink}
                to="/privacy"
                sx={{
                  color: '#e2e8f0',
                  textDecoration: 'none',
                  fontSize: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.7,
                  py: 0.3,
                  px: 0.5,
                  borderRadius: '4px',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: '#60a5fa',
                    backgroundColor: 'rgba(96, 165, 250, 0.1)',
                    transform: 'translateX(3px)'
                  }
                }}
              >
                <SecurityIcon sx={{ fontSize: '0.9rem' }} />
                Privacy
              </Link>
            </Tooltip>
          </Box>
        </Grid>

        {/* Contact Info */}
        <Grid item xs={6} md={4} sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="subtitle2" sx={{ color: '#ffffff', fontWeight: 600, mb: 1.5, fontSize: '0.85rem' }}>
            Get In Touch
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.8, flex: 1 }}>
            <Tooltip title="Send us an email" arrow placement="right">
              <Link
                href="mailto:support@trafficreport.com"
                sx={{
                  color: '#e2e8f0',
                  textDecoration: 'none',
                  fontSize: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.7,
                  py: 0.3,
                  px: 0.5,
                  borderRadius: '4px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: '#60a5fa',
                    backgroundColor: 'rgba(96, 165, 250, 0.1)',
                    transform: 'translateX(3px)'
                  }
                }}
              >
                <EmailIcon sx={{ fontSize: '0.9rem', color: '#60a5fa' }} />
                <Typography variant="caption" sx={{ color: 'inherit', fontSize: '0.7rem' }}>
                  support@trafficreport.com
                </Typography>
              </Link>
            </Tooltip>
            <Tooltip title="Call us" arrow placement="right">
              <Link
                href="tel:+15551234567"
                sx={{
                  color: '#e2e8f0',
                  textDecoration: 'none',
                  fontSize: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.7,
                  py: 0.3,
                  px: 0.5,
                  borderRadius: '4px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: '#60a5fa',
                    backgroundColor: 'rgba(96, 165, 250, 0.1)',
                    transform: 'translateX(3px)'
                  }
                }}
              >
                <PhoneIcon sx={{ fontSize: '0.9rem', color: '#60a5fa' }} />
                <Typography variant="caption" sx={{ color: 'inherit', fontSize: '0.7rem' }}>
                  +1 (555) 123-4567
                </Typography>
              </Link>
            </Tooltip>
            <Tooltip title="Our location" arrow placement="right">
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.7,
                py: 0.3,
                px: 0.5,
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(96, 165, 250, 0.1)',
                  transform: 'translateX(3px)'
                }
              }}>
                <LocationOnIcon sx={{ fontSize: '0.9rem', color: '#60a5fa' }} />
                <Typography variant="caption" sx={{ color: '#e2e8f0', fontSize: '0.7rem' }}>
                  123 Traffic Center, City, ST
                </Typography>
                <Typography variant="caption" sx={{ color: '#e2e8f0', fontSize: '0.7rem' }}>
                  kerala, India
                </Typography>
              </Box>
            </Tooltip>
          </Box>
        </Grid>

        {/* Social Media & Copyright */}
        <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="subtitle2" sx={{ color: '#ffffff', fontWeight: 600, mb: 1.5, fontSize: '0.85rem' }}>
            Follow Us
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
            <Tooltip title="Follow us on Facebook" arrow>
              <Button
                sx={{
                  minWidth: 'auto',
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  backgroundColor: 'rgba(96, 165, 250, 0.2)',
                  color: '#60a5fa',
                  '&:hover': {
                    backgroundColor: '#60a5fa',
                    color: '#1e3a8a',
                    transform: 'scale(1.1)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                <FacebookIcon sx={{ fontSize: '1.1rem' }} />
              </Button>
            </Tooltip>
            <Tooltip title="Follow us on Twitter" arrow>
              <Button
                sx={{
                  minWidth: 'auto',
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  backgroundColor: 'rgba(96, 165, 250, 0.2)',
                  color: '#60a5fa',
                  '&:hover': {
                    backgroundColor: '#60a5fa',
                    color: '#1e3a8a',
                    transform: 'scale(1.1)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                <TwitterIcon sx={{ fontSize: '1.1rem' }} />
              </Button>
            </Tooltip>
            <Tooltip title="Connect on LinkedIn" arrow>
              <Button
                sx={{
                  minWidth: 'auto',
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  backgroundColor: 'rgba(96, 165, 250, 0.2)',
                  color: '#60a5fa',
                  '&:hover': {
                    backgroundColor: '#60a5fa',
                    color: '#1e3a8a',
                    transform: 'scale(1.1)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                <LinkedInIcon sx={{ fontSize: '1.1rem' }} />
              </Button>
            </Tooltip>
          </Box>
          
        </Grid>
      </Grid>
    </Box>
  </footer>
);

export default Footer;