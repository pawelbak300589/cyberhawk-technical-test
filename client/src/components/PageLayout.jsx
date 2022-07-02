import React from 'react';
import { Box, Container, Typography, Alert } from '@mui/material';

import Navbar from './Navbar';
import PageLoader from './PageLoader';
import PageBreadcrumbs from './PageBreadcrumbs';

const PageLayout = ({ children, title, loading, error, breadcrumbs }) => {
  return (
    <Box>
      <Navbar />
      <Container>
        <Box mt={4}>
          <PageBreadcrumbs breadcrumbs={breadcrumbs} />
          <Box my={1}>
            <Typography variant="h4" gutterBottom>{title}</Typography>
          </Box>
          {error && <Alert severity="error">{error}</Alert>}
          {loading ? <PageLoader /> : children}
        </Box>
      </Container>
    </Box>
  );
};

export default PageLayout;