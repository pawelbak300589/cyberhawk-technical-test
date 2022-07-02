import React from 'react';
import { Box, Container, Typography } from '@mui/material';

import Navbar from './Navbar';
import PageLoader from './PageLoader';
import PageBreadcrumbs from './PageBreadcrumbs';

const PageLayout = ({ children, title, loading, breadcrumbs }) => {
  return (
    <Box>
      <Navbar />
      <Container>
        <Box mt={4}>
          <PageBreadcrumbs breadcrumbs={breadcrumbs} />
          <Box my={1}>
            <Typography variant="h4" gutterBottom>{title}</Typography>
          </Box>
          {loading ? <PageLoader /> : children}
        </Box>
      </Container>
    </Box>
  );
};

export default PageLayout;