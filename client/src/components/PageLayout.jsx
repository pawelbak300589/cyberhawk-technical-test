import React from 'react';
import { Box, Container, Typography } from '@mui/material';

import Navbar from './Navbar';
import PageLoader from './PageLoader';

const PageLayout = ({ children, title, loading }) => {
  return (
    <Box>
      <Navbar />
      <Container>
        <Box mt={4}>
          <Typography variant="h4" gutterBottom>{title}</Typography>
          {loading ? <PageLoader /> : children}
        </Box>
      </Container>
    </Box>
  );
};

export default PageLayout;