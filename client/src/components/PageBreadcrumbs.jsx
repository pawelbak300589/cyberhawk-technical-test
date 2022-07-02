import React from 'react';
import { Link as RouterLink } from "react-router-dom";
import { Breadcrumbs, Typography, Link } from '@mui/material';

const PageBreadcrumbs = ({ breadcrumbs }) => {
  return breadcrumbs && (
    <Breadcrumbs maxItems={2} aria-label="breadcrumb">
      <Link underline="hover" color="inherit" component={RouterLink} to="/">
        Home
      </Link>
      {
        breadcrumbs.map((breadcrumb) => "link" in breadcrumb ? (
          <Link underline="hover" color="inherit" component={RouterLink} to={breadcrumb.link} key={breadcrumb.text}>
            {breadcrumb.text}
          </Link>
        ) : (
          <Typography color="text.primary">{breadcrumb.text}</Typography>
        ))
      }
    </Breadcrumbs>
  );
};

export default PageBreadcrumbs;