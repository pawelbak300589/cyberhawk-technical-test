import React from 'react';
import { useParams } from "react-router-dom";

const TurbinePage = () => {
  let { turbineId } = useParams();

  return (
    <>
      Turbine Page {turbineId}
    </>
  );
};

export default TurbinePage;