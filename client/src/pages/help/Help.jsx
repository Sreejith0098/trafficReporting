import React from 'react';
import { Box, Typography, Paper, Container, Accordion, AccordionSummary, AccordionDetails, Grid, Card, CardContent, Divider, Avatar, Fade } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpIcon from '@mui/icons-material/Help';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';

const accent = '#1976d2';

const Help = () => {
  const faqs = [
    {
      question: "How do I report a traffic incident?",
      answer: "Navigate to the User Dashboard and click on 'New Report'. Fill in the location, type of incident (accident, congestion, construction, or other), and provide a detailed description. Submit the report and it will be reviewed by authorities.",
      icon: <LiveHelpIcon />
    },
    {
      question: "How can I track the status of my report?",
      answer: "Go to 'My Reports' in your dashboard. You can see all your submitted reports with their current status: Pending, Approved, or Rejected. You'll receive updates as the status changes.",
      icon: <QuestionAnswerIcon />
    },
    {
      question: "What types of incidents can I report?",
      answer: "You can report: accidents, traffic congestion, construction work, road hazards, or any other traffic-related issues that may affect road safety or traffic flow.",
      icon: <HelpIcon />
    },
    {
      question: "Is my personal information secure?",
      answer: "Yes, we take data security seriously. Your personal information is encrypted and only used for processing your reports. We comply with data protection regulations.",
      icon: <ContactSupportIcon />
    },
    {
      question: "How long does it take for reports to be processed?",
      answer: "Most reports are reviewed within 24-48 hours. High-priority incidents like accidents are handled immediately. You can check the status in your dashboard.",
      icon: <LiveHelpIcon />
    },
    {
      question: "Can I edit or delete my reports?",
      answer: "You can edit reports that are still in 'Pending' status. Once a report is approved or rejected, it cannot be modified. You can delete your own reports at any time.",
      icon: <QuestionAnswerIcon />
    },
    {
      question: "How do I contact support?",
      answer: "Use the Contact page to send us a message, or email us directly at support@trafficreport.com. For urgent issues, call our support line.",
      icon: <ContactSupportIcon />
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
              <HelpIcon sx={{ fontSize: 42, color: '#fff' }} />
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
            Help & Support Center
          </Typography>
          <Typography variant="h6" sx={{ color: '#374151', maxWidth: 600, mx: 'auto', mb: 2 }}>
            Find answers to common questions and get help with using the Traffic Reporting System
          </Typography>
          <Divider sx={{ mx: 'auto', width: 220, my: 2, background: accent, height: 3, borderRadius: 1 }} />
        </Box>

        <Grid container spacing={4}>
          {/* FAQ Section */}
          <Grid item xs={12} md={8}>
            <Paper
              elevation={6}
              sx={{
                borderRadius: 3,
                background: 'linear-gradient(120deg, #ffffff 70%, #e3f0ff 100%)',
                boxShadow: '0 8px 24px rgba(25,118,210,0.08)',
                overflow: 'hidden'
              }}
            >
              <Box
                sx={{
                  p: 4,
                  background: `linear-gradient(90deg, ${accent} 60%, #84b8ff 100%)`,
                  color: 'white'
                }}
              >
                <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
                  Frequently Asked Questions
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.9 }}>
                  Click on any question to expand and see the answer
                </Typography>
              </Box>

              <Box sx={{ p: 3 }}>
                {faqs.map((faq, index) => (
                  <Accordion
                    key={index}
                    sx={{
                      mb: 2,
                      borderRadius: 2,
                      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                      border: '1px solid rgba(0,0,0,0.08)',
                      '&:before': { display: 'none' },
                      '&:hover': {
                        boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                        transform: 'translateY(-2px)',
                        transition: 'all 0.3s ease'
                      },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon sx={{ color: accent }} />}
                      sx={{
                        '&:hover': { backgroundColor: '#f8fafc' },
                        minHeight: 72,
                        borderRadius: 2
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box sx={{
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          background: `linear-gradient(90deg, ${accent} 60%, #84b8ff 100%)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white'
                        }}>
                          {faq.icon}
                        </Box>
                        <Typography variant="h6" sx={{ fontWeight: 500, color: '#1a1f36' }}>
                          {faq.question}
                        </Typography>
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails sx={{
                      backgroundColor: '#fafbfc',
                      borderTop: '1px solid #e0e7ff',
                      p: 3
                    }}>
                      <Typography variant="body1" sx={{ color: '#374151', lineHeight: 1.6 }}>
                        {faq.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Box>
            </Paper>
          </Grid>

        
        </Grid>
      </Container>
    </Box>
  );
};

export default Help;
