import React from 'react';
import { Box, Skeleton } from '@mui/material';

const PageLoader = () => {
  return (
    <Box display="flex" flexDirection="column" justifyContent="space-between" alignItems="stretch">
      {
        [...Array(5)].map(i => (
          <Box mb={1}>
            <Skeleton variant="rectangular" height={80} />
          </Box>
        ))
      }
    </Box>
  );
};

export default PageLoader;