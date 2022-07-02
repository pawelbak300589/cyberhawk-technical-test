import React from 'react';
import { useParams } from "react-router-dom";

const FarmPage = () => {
  let { farmId } = useParams();

  return (
    <>
      Farm page {farmId}
    </>
  );
};

export default FarmPage;