import React, { useState, useEffect, useCallback } from 'react';
import moment from 'moment';
import WindPowerIcon from '@mui/icons-material/WindPower';

import { getAllItems } from '../services/windFarmsApi/apiGetters';
import PageLayout from '../components/PageLayout';
import CustomList from '../components/CustomList';
import CustomListItem from '../components/CustomListItem';

const pageBreadcrumbs = [
  { text: 'Turbines' },
];

const TurbinesPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [turbines, setTurbines] = useState([]);

  const getFarmWithTurbinesData = useCallback(async () => {
    setLoading(true);
    setError(false);
    try {
      let turbinesResponse = await getAllItems('turbines');
      let componentsResponse = await getAllItems('components');
      let inspectionsResponse = await getAllItems('inspections');
      const turbinesWithAssociations = turbinesResponse.map(turbine => {
        const components = componentsResponse.filter(component => component.turbine_id === turbine.id);
        const inspections = inspectionsResponse.filter(inspection => inspection.turbine_id === turbine.id);
        return ({
          ...turbine,
          componentsNum: components.length,
          inspectionsNum: inspections.length,
          lastInspection: inspections.sort((a, b) => new Date(a.inspection_at) - new Date(b.inspection_at)).pop(),
        })
      });
      setTurbines(turbinesWithAssociations);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    getFarmWithTurbinesData();
  }, [getFarmWithTurbinesData]);

  return (
    <PageLayout title="All Turbines" loading={loading} error={error} breadcrumbs={pageBreadcrumbs}>
      <CustomList>
        {turbines.map(turbine => (
          <CustomListItem
            key={turbine.id}
            Icon={WindPowerIcon}
            title={turbine.name}
            subtitle={`Components: ${turbine.componentsNum} | Inspections: ${turbine.inspectionsNum} (Last: ${moment(turbine.lastInspection.inspection_at).fromNow()})`}
            link={`/turbines/${turbine.id}`}
          />
        ))}
      </CustomList>
    </PageLayout>
  );
};

export default TurbinesPage;