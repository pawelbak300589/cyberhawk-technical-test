import React from 'react';
import { useParams } from "react-router-dom";

import PageLayout from '../components/PageLayout';

const FarmPage = () => {
  let { farmId } = useParams();

  return (
    <PageLayout title="Farm">
      {farmId}
    </PageLayout>
  );
};

export default FarmPage;