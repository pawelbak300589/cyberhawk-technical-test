import React from 'react';
import { Box, Container, Typography } from '@mui/material';

import Navbar from './Navbar';

const PageLayout = ({ children, title }) => {
  return (
    <Box>
      <Navbar />
      <Container>
        <Box mt={4}>
          <Typography variant="h4" gutterBottom>{title}</Typography>
          {children}
        </Box>
      </Container>
    </Box>
  );
};

export default PageLayout;