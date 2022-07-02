import React, { useState, useEffect, useCallback } from 'react';
import moment from 'moment';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';

import { getAllItems } from '../services/windFarmsApi/apiGetters';
import PageLayout from '../components/PageLayout';
import CustomList from '../components/CustomList';
import CustomListItem from '../components/CustomListItem';

const pageBreadcrumbs = [
  { text: 'Inspections' },
];

const InspectionsPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [inspections, setInspections] = useState([]);

  const getInspectionsData = useCallback(async () => {
    setLoading(true);
    setError(false);
    try {
      let turbinesResponse = await getAllItems('turbines');
      let inspectionsResponse = await getAllItems('inspections');
      const inspectionsWithAssociations = inspectionsResponse.map(inspection => ({ ...inspection, turbine: turbinesResponse.find(turbine => turbine.id === inspection.turbine_id) }));
      setInspections(inspectionsWithAssociations.sort((a, b) => new Date(b.inspection_at) - new Date(a.inspection_at)));
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    getInspectionsData();
  }, [getInspectionsData]);

  return (
    <PageLayout title="All Inspections" loading={loading} error={error} breadcrumbs={pageBreadcrumbs}>
      <CustomList>
        {inspections.map(inspection => (
          <CustomListItem
            key={inspection.id}
            Icon={ContentPasteSearchIcon}
            title={`Inspection on ${inspection.turbine.name}`}
            subtitle={`${moment(inspection.inspection_at).fromNow()} (${moment(inspection.inspection_at).format('ll')})`}
            link={`/inspections/${inspection.id}`}
          />
        ))}
      </CustomList>
    </PageLayout>
  );
};

export default InspectionsPage;