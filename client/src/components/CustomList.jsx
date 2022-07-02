import React from 'react';
import { List } from '@mui/material';

const CustomList = ({ children }) => {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {children}
    </List>
  );
};

export default CustomList;