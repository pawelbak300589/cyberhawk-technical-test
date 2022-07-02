import React, { useState, useEffect, useCallback } from 'react';
import { Link } from "react-router-dom";
import { Box, Paper, Typography, Button, Alert } from '@mui/material';

import { getAllItems, getItem } from '../services/windFarmsApi/apiGetters';
import PageLayout from '../components/PageLayout';

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [farms, setFarms] = useState([]);
  const [turbines, setTurbines] = useState([]);
  const [inspections, setInspections] = useState([]);

  const getHomepageData = useCallback(async () => {
    setLoading(true);
    setError(false);
    try {
      const farmsResponse = await getAllItems('farms');
      setFarms(farmsResponse);

      const turbinesResponse = await getAllItems('turbines');
      setTurbines(turbinesResponse);

      const inspectionResponse = await getAllItems('inspections');
      setInspections(inspectionResponse);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    getHomepageData();
  }, [getHomepageData]);

  return (
    <PageLayout title="" loading={loading} error={error}>
      <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} justifyContent="stretch" alignItems="stretch">
        {
          farms && (<Box flex={1}>
            <Paper elevation={1}>
              <Box p={2}>
                <Typography variant="h5" gutterBottom>Wind Farms</Typography>
                <Alert severity="info">There are currently {farms.length} wind farms in the app</Alert>
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="stretch" mt={2}>
                  <Typography variant="body1" gutterBottom>To see all wind farms click a button below or use the top-right navigation</Typography>
                  <Button variant="outlined" component={Link} to="/farms">Wind Farms</Button>
                </Box>
              </Box>
            </Paper>
          </Box>
          )
        }
        {
          turbines && (
            <Box flex={1} mx={{ xs: 0, md: 1 }} my={{ xs: 1, md: 0 }}>
              <Paper elevation={1}>
                <Box p={2}>
                  <Typography variant="h5" gutterBottom>Turbines</Typography>
                  <Alert severity="info">There are currently {turbines.length} turbines in the app</Alert>
                  <Box display="flex" flexDirection="column" justifyContent="center" alignItems="stretch" mt={2}>
                    <Typography variant="body1" gutterBottom>To see all turbines click a button below or use the top-right navigation</Typography>
                    <Button variant="outlined" component={Link} to="/turbines">Turbines</Button>
                  </Box>
                </Box>
              </Paper>
            </Box>
          )
        }
        {
          inspections && (
            <Box flex={1}>
              <Paper elevation={1}>
                <Box p={2}>
                  <Typography variant="h5" gutterBottom>Inspections</Typography>
                  <Alert severity="info">There are currently {inspections.length} inspections in the app</Alert>
                  <Box display="flex" flexDirection="column" justifyContent="center" alignItems="stretch" mt={2}>
                    <Typography variant="body1" gutterBottom>To see all inspections click a button below or use the top-right navigation</Typography>
                    <Button variant="outlined" component={Link} to="/inspections">Inspections</Button>
                  </Box>
                </Box>
              </Paper>
            </Box>
          )
        }
      </Box>
    </PageLayout>
  );
};

export default HomePage;