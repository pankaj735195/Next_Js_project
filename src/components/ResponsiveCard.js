import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const ResponsiveCard = ({ title, description }) => {
  return (
    <Card
      sx={{
        flex: '1 1 calc(33% - 16px)', // Adjusted for 3 cards per row
        minWidth: 250,
        maxWidth: 400,
        margin: '8px',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        background: 'linear-gradient(145deg, #ffffff, #f0f0f0)', // Light gradient
        borderRadius: '16px', // Rounded corners
        boxShadow: '5px 5px 10px #d1d1d1, -5px -5px 10px #ffffff', // Neumorphic shadow effect
        '&:hover': {
          transform: 'translateY(-10px)', // Lift effect on hover
          boxShadow: '10px 10px 20px #d1d1d1, -10px -10px 20px #ffffff', // More pronounced shadow
        },
      }}
    >
      <CardContent>
        <Box
          sx={{
            textAlign: 'center', // Center-align text
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 'bold',
              mb: 1,
              color: 'primary.main',
              textTransform: 'uppercase', // Uppercase title for better emphasis
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: '0.9rem',
              lineHeight: 1.5,
            }}
          >
            {description}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ResponsiveCard;
