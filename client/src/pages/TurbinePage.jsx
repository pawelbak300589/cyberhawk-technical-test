import React, { useState, useEffect, useCallback } from 'react';
import moment from 'moment';
import { useParams } from "react-router-dom";
import { Box, Typography } from '@mui/material';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import SettingsIcon from '@mui/icons-material/Settings';

import { getAllItems, getItem } from '../services/windFarmsApi/apiGetters';
import PageLayout from '../components/PageLayout';
import CustomList from '../components/CustomList';
import CustomListItem from '../components/CustomListItem';

const TurbinePage = () => {
  const { turbineId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [farm, setFarm] = useState(null);
  const [turbine, setTurbine] = useState(null);
  const [components, setComponents] = useState([]);
  const [inspections, setInspections] = useState([]);

  const getTurbineWithAdditionalData = useCallback(async () => {
    setLoading(true);
    setError(false);
    try {
      const turbineResponse = await getItem('turbines', turbineId);
      setTurbine(turbineResponse);
      const farmsResponse = await getAllItems('farms');
      const properFarm = farmsResponse.find(farm => farm.id === turbineResponse.farm_id);
      setFarm(properFarm);
      let inspectionsResponse = await getAllItems('inspections', { name: 'turbines', id: turbineId });
      setInspections(inspectionsResponse.sort((a, b) => new Date(b.inspection_at) - new Date(a.inspection_at)));
      let componentsResponse = await getAllItems('components', { name: 'turbines', id: turbineId });
      let componentTypesResponse = await getAllItems('component-types');
      const componentsWithAssociations = componentsResponse.map(component => ({ ...component, type: componentTypesResponse.find(componentType => component.component_type_id === componentType.id)?.name }));
      setComponents(componentsWithAssociations);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  }, [turbineId]);

  useEffect(() => {
    getTurbineWithAdditionalData();
  }, [getTurbineWithAdditionalData]);

  const pageBreadcrumbs = [
    { text: 'Farms', link: '/farms' },
    farm ? { text: farm.name, link: `/farms/${farm.id}` } : { text: 'Turbines', link: '/turbines' },
    { text: 'Turbine' },
  ];

  return turbine && (
    <PageLayout title={turbine.name} loading={loading} error={error} breadcrumbs={pageBreadcrumbs}>
      <Box display="flex" justifyContent="stretch" alignItems="space-between">
        {
          components && (
            <Box flex={1} mr={1}>
              <Typography variant="h5" gutterBottom>Components</Typography>
              <CustomList>
                {components.map(component => (
                  <CustomListItem
                    key={component.id}
                    Icon={SettingsIcon}
                    title={`${component.type}`}
                    // link={`/components/${component.id}`}
                  />
                ))}
              </CustomList>
            </Box>
          )
        }
        {
          inspections && (
            <Box flex={1} ml={1}>
              <Typography variant="h5" gutterBottom>Inspections</Typography>
              <CustomList>
                {inspections.map(inspection => (
                  <CustomListItem
                    key={inspection.id}
                    Icon={ContentPasteSearchIcon}
                    title={`Inspection from ${moment(inspection.inspection_at).fromNow()}`}
                    subtitle={`${moment(inspection.inspection_at).format('ll')}`}
                    link={`/inspections/${inspection.id}`}
                  />
                ))}
              </CustomList>
            </Box>
          )
        }
      </Box>
    </PageLayout>
  );
};

export default TurbinePage;