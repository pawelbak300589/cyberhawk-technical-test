import React, { useState, useEffect, useCallback } from 'react';
import AirIcon from '@mui/icons-material/Air';

import { getAllItems } from '../services/windFarmsApi/apiGetters';
import PageLayout from '../components/PageLayout';
import CustomList from '../components/CustomList';
import CustomListItem from '../components/CustomListItem';

const pageBreadcrumbs = [
  { text: 'Farms' }
];

const FarmsPage = () => {
  const [loading, setLoading] = useState(false);
  const [farms, setFarms] = useState([]);
  const [error, setError] = useState(false);

  const getFarmsWithTurbinesNumber = useCallback(async () => {
    setLoading(true);
    setError(false);
    try {
      let farmsResponse = await getAllItems('farms');
      let turbinesResponse = await getAllItems('turbines');
      const farmsWithTurbines = farmsResponse.map(farm => ({ ...farm, turbinesNum: turbinesResponse.filter(turbine => turbine.farm_id === farm.id).length }));
      setFarms(farmsWithTurbines);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  }, [])

  useEffect(() => {
    getFarmsWithTurbinesNumber();
  }, [getFarmsWithTurbinesNumber]);

  return (
    <PageLayout title="Wind Farms" loading={loading} breadcrumbs={pageBreadcrumbs}>
      {error}
      <CustomList>
        {farms.map(farm => (
          <CustomListItem key={farm.id} Icon={AirIcon} title={farm.name} subtitle={`Turbines: ${farm.turbinesNum}`} link={`${farm.id}`} />
        ))}
      </CustomList>
    </PageLayout>
  );
};

export default FarmsPage;