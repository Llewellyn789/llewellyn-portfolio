// import React from 'react';
import { useEffect } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

// Import the page components
import VansPage from './components/VansPage';
import KitchensPage from './components/KitchensPage';
import WebDevPage from './components/WebDevPage';
import ProjectDetailPage from './components/ProjectDetailPage';

function App() {
  useEffect(() => {
    document.title = 'Llewellyn Portfolio';
  }, []);

  return (
    <div className="app-container">
      <nav>
        <ul>
          <li>
            <NavLink
              to="/vans"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              Vans
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/kitchens"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              Kitchens
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/web-development"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              Web Development
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<div style={{ marginTop: '20px' }}>Please select a category above.</div>} />
        <Route path="/vans" element={<VansPage />} />
        <Route path="/kitchens" element={<KitchensPage />} />
        <Route path="/web-development" element={<WebDevPage />} />
        <Route path="/project/:projectId" element={<ProjectDetailPage />} />
      </Routes>
      </div>
  );
}

export default App;
