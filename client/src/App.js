import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import HomePage from './pages/HomePage';
import FarmsPage from './pages/FarmsPage';
import FarmPage from './pages/FarmPage';
import TurbinesPage from './pages/TurbinesPage';
import TurbinePage from './pages/TurbinePage';
import InspectionsPage from './pages/InspectionsPage';
import InspectionPage from './pages/InspectionPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route path="farms">
            <Route path=":farmId" element={<FarmPage />} />
            <Route index element={<FarmsPage />} />
          </Route>
          <Route path="turbines">
            <Route path=":turbineId" element={<TurbinePage />} />
            <Route index element={<TurbinesPage />} />
          </Route>
          <Route path="inspections">
            <Route path=":inspectionId" element={<InspectionPage />} />
            <Route index element={<InspectionsPage />} />
          </Route>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
