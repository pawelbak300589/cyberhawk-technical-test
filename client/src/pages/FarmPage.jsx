import React, { useState, useEffect, useCallback } from 'react';
import moment from 'moment';
import { useParams } from "react-router-dom";
import WindPowerIcon from '@mui/icons-material/WindPower';

import { getAllItems, getItem } from '../services/windFarmsApi/apiGetters';
import PageLayout from '../components/PageLayout';
import CustomList from '../components/CustomList';
import CustomListItem from '../components/CustomListItem';

const pageBreadcrumbs = [
  { text: 'Farms', link: '/farms' },
  { text: 'Farm' },
];

const FarmPage = () => {
  let { farmId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [farm, setFarm] = useState(null);
  const [turbines, setTurbines] = useState([]);

  const getFarmWithTurbinesData = useCallback(async () => {
    setLoading(true);
    setError(false);
    try {
      const farmResponse = await getItem('farms', farmId);
      setFarm(farmResponse);
      let turbinesResponse = await getAllItems('turbines', { name: 'farms', id: farmId });
      let componentsResponse = await getAllItems('components');
      let inspectionsResponse = await getAllItems('inspections');
      const turbinesWithAssociations = turbinesResponse.map(turbine => {
        const components = componentsResponse.filter(component => component.turbine_id === turbine.id);
        const inspections = inspectionsResponse.filter(inspection => inspection.turbine_id === turbine.id);
        console.log('inspections', inspections);
        return ({
          ...turbine,
          componentsNum: components.length,
          inspectionsNum: inspections.length,
          lastInspection: inspections.sort((a, b) => new Date(a.inspection_at) - new Date(b.inspection_at)).pop(),
        })
      });
      console.log('turbinesWithAssociations', turbinesWithAssociations);
      setTurbines(turbinesWithAssociations);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  }, [farmId]);

  useEffect(() => {
    getFarmWithTurbinesData();
  }, [getFarmWithTurbinesData]);

  return farm && (
    <PageLayout title={farm.name} loading={loading} error={error} breadcrumbs={pageBreadcrumbs}>
      <CustomList>
        {turbines.map(turbine => (
          <CustomListItem
            key={turbine.id}
            Icon={WindPowerIcon}
            title={turbine.name}
            subtitle={`Components: ${turbine.componentsNum} | Inspections: ${turbine.inspectionsNum} (Last: ${moment(turbine.lastInspection.inspection_at).fromNow()})`}
            link={`${turbine.id}`}
          />
        ))}
      </CustomList>
    </PageLayout>
  );
};

export default FarmPage;