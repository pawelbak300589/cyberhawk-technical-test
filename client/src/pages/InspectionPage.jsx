import React, { useState, useEffect, useCallback } from 'react';
import moment from 'moment';
import { useParams } from "react-router-dom";
import { Box, Typography, Badge, Alert } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

import { getAllItems, getItem } from '../services/windFarmsApi/apiGetters';
import PageLayout from '../components/PageLayout';
import CustomList from '../components/CustomList';
import CustomListItem from '../components/CustomListItem';
import { isTurbineBroken, getGradeStatus, getGradeColour } from '../helpers/inspectionHelper';

const InspectionPage = () => {
  let { inspectionId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [farm, setFarm] = useState(null);
  const [inspection, setInspection] = useState(null);
  const [turbine, setTurbine] = useState(null);
  const [components, setComponents] = useState([]);

  const getInspectionWithAdditionalData = useCallback(async () => {
    setLoading(true);
    setError(false);
    try {
      const inspectionResponse = await getItem('inspections', inspectionId);
      setInspection(inspectionResponse);

      const turbinesResponse = await getAllItems('turbines');
      const properTurbine = turbinesResponse.find(turbine => turbine.id === inspectionResponse.turbine_id);
      setTurbine(properTurbine);

      const farmsResponse = await getAllItems('farms');
      const properFarm = farmsResponse.find(farm => farm.id === properTurbine.farm_id);
      setFarm(properFarm);

      let componentsResponse = await getAllItems('components', { name: 'turbines', id: inspectionResponse.turbine_id });
      let componentTypesResponse = await getAllItems('component-types');
      let gradesResponse = await getAllItems('grades', { name: 'inspections', id: inspectionId });
      let gradeTypesResponse = await getAllItems('grade-types');

      const componentsWithAssociations = componentsResponse.map(component => {
        let grade = gradesResponse.find(grade => grade.component_id === component.id);
        const gradeType = gradeTypesResponse.find(gradeType => gradeType.id === grade.grade_type_id);
        grade = { ...grade, type: gradeType.name };

        const componentType = componentTypesResponse.find(componentType => component.component_type_id === componentType.id);

        return ({ ...component, type: componentType.name, grade });
      });
      setComponents(componentsWithAssociations);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  }, [inspectionId]);

  useEffect(() => {
    getInspectionWithAdditionalData();
  }, [getInspectionWithAdditionalData]);

  const pageBreadcrumbs = [
    { text: 'Farms', link: '/farms' },
    farm ? { text: farm.name, link: `/farms/${farm.id}` } : { text: 'Turbines', link: '/turbines' },
    turbine ? { text: turbine.name, link: `/turbines/${turbine.id}` } : { text: 'Inspections', link: '/inspections' },
    { text: 'Inspection' },
  ];

  return inspection && turbine && farm && (
    <PageLayout title={`Inspection on ${turbine.name}`} loading={loading} error={error} breadcrumbs={pageBreadcrumbs}>
      <Box>
        <Typography variant="h5" gutterBottom>
          {`Carried out ${moment(inspection.inspection_at).fromNow()}
          (${moment(inspection.inspection_at).format('ll')})`}
        </Typography>
      </Box>
      {
        components && (
          <Box flex={1} mr={1}>
            <Typography variant="h6" gutterBottom>Components</Typography>
            {
              isTurbineBroken(components)
                ? <Alert severity="error">Turbine is broken - some components require replacement!</Alert>
                : <Alert severity="success">Turbine is fine</Alert>
            }
            <CustomList>
              {components.map(component => (
                <CustomListItem
                  key={component.id}
                  Icon={SettingsIcon}
                  iconColour={getGradeColour(component.grade.type)}
                  title={`${component.type}`}
                  subtitle={`${getGradeStatus(component.grade.type)}`}
                // link={`/components/${component.id}`}
                />
              ))}
            </CustomList>
          </Box>
        )
      }
    </PageLayout>
  );
};

export default InspectionPage;