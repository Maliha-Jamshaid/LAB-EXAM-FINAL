// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'; // Import Routes
import DragonsPage from './pages/DragonsPage';
import MissionsPage from './pages/MissionsPage';
import MyProfilePage from './pages/MyProfilePage';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/dragons">Dragons</Link>
            </li>
            <li>
              <Link to="/missions">Missions</Link>
            </li>
            <li>
              <Link to="/my-profile">My Profile</Link>
            </li>
          </ul>
        </nav>

        {/* Use Routes instead of Switch */}
        <Routes>
          <Route path="/dragons" element={<DragonsPage />} />
          <Route path="/missions" element={<MissionsPage />} />
          <Route path="/my-profile" element={<MyProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
