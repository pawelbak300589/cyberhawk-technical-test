import React from 'react';
import { Box, Skeleton } from '@mui/material';

const PageLoader = () => {
  return (
    <Box display="flex" flexDirection="column" justifyContent="space-between" alignItems="stretch">
      {
        [1, 2, 3, 4, 5].map(i => (
          <Box mb={1} key={i}>
            <Skeleton variant="rectangular" height={80} />
          </Box>
        ))
      }
    </Box>
  );
};

export default PageLoader;