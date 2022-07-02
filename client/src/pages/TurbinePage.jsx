import React from 'react';
import { useParams } from "react-router-dom";

import PageLayout from '../components/PageLayout';

const TurbinePage = () => {
  let { turbineId } = useParams();

  return (
    <PageLayout title="Turbine">
      {turbineId}
    </PageLayout>
  );
};

export default TurbinePage;