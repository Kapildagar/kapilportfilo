import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Home } from './HOME/Home.jsx';

import { ProjectPage } from './container/ProjectPage.jsx';
import SkillPage from './Skills/SkillPage.jsx';
import ContactPage from './Contact/ContactPage.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="project" element={<ProjectPage />} />
      <Route path="skills" element={<SkillPage />} />
      <Route path="contact" element={<ContactPage />} />

      {/* ... etc. */}
    </Route>
  )
);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
