import React from 'react';
import { Box, Container, TextField, Typography, Avatar, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ResponsiveCard from '@/components/ResponsiveCard';

const Home = () => {
  return (
    <Container maxWidth="xl">
      {/* Header Section */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        border="1px solid green"
        padding={2}
        mb={4}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          border: '1px solid green',
          padding: 2,
          mb: 4,
          borderRadius: '8px',
          backgroundColor: 'background.paper',
          '@media (max-width: 600px)': {
            padding: 1,
          },
        }}
      >
        {/* Brand Name */}
        <Typography
          variant="h6"
          component="h1"
          color="primary"
          sx={{
            transition: 'transform 0.2s ease',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        >
          Brand Name
        </Typography>

        {/* Search Bar */}
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexGrow: 1,
            mx: 2,
          }}
        >
          <TextField
            variant="outlined"
            placeholder="Search..."
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton sx={{ color: 'text.primary' }}>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: 'background.paper',
              },
              '& .MuiInputBase-input': {
                color: 'text.primary',
              },
            }}
          />
        </Box>

        {/* User Profile */}
        <Box display="flex" alignItems="center" gap={1}>
          <Avatar
            sx={{
              bgcolor: 'blue',
              transition: 'transform 0.2s ease',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          >
            J
          </Avatar>
          <Typography
            variant="body1"
            sx={{ display: { xs: 'none', sm: 'block' }, color: 'text.primary' }}
          >
            John
          </Typography>
        </Box>
      </Box>

      {/* Card Section */}
      <Box
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        flexWrap="wrap"
        gap={2}
      >
        <ResponsiveCard title="Card 1" description="Discover the power of simplicity with Card 1." />
        <ResponsiveCard title="Card 2" description="Unleash creativity with the dynamic features of Card 2." />
        <ResponsiveCard title="Card 3" description="Card 3 offers seamless functionality at your fingertips." />
        <ResponsiveCard title="Card 4" description="Dive into the world of innovation with Card 4." />
        <ResponsiveCard title="Card 5" description="Experience next-level design with Card 5." />
        <ResponsiveCard title="Card 6" description="Card 6: Built for speed and efficiency." />
        <ResponsiveCard title="Card 7" description="Explore endless possibilities with Card 7." />
        <ResponsiveCard title="Card 8" description="Card 8 combines elegance with practicality." />
        <ResponsiveCard title="Card 9" description="Your journey to excellence starts with Card 9." />
        <ResponsiveCard title="Card 10" description="Card 10 redefines how you achieve success." />
        <ResponsiveCard title="Card 11" description="Innovation meets style in Card 11." />
        <ResponsiveCard title="Card 12" description="Card 12 is your gateway to a brighter future." />
      </Box>
    </Container>
  );
};

export default Home;
