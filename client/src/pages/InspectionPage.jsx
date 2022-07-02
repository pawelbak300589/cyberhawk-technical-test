import React from 'react';
import { useParams } from "react-router-dom";

const InspectionPage = () => {
  let { inspectionId } = useParams();

  return (
    <>
      Inspection Page {inspectionId}
    </>
  );
};

export default InspectionPage;