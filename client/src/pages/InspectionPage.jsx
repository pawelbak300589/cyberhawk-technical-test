import React from 'react';
import { useParams } from "react-router-dom";

import PageLayout from '../components/PageLayout';

const InspectionPage = () => {
  let { inspectionId } = useParams();

  return (
    <PageLayout title="Inspection">
      {inspectionId}
    </PageLayout>
  );
};

export default InspectionPage;