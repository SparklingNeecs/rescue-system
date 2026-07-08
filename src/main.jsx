import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

// Import all your components
import App from './App.jsx'
import Login from './auth/login.jsx'
import Signup from './auth/signup.jsx'
import Dashboard from './RescueTeam/dashboard.jsx'
import IncidentManagement from './RescueTeam/incidentmanagement.jsx'
import IncidentDetails from './RescueTeam/incidentdetails.jsx'
import ApplicantDetails from './RescueTeam/applicantdetails.jsx'
import Volunteer from './RescueTeam/volunteer.jsx'

// Civilian Pages
import Overview from './Civilian/overview.jsx'
import Step1 from './Civilian/report.jsx'
import TrackReports from './Civilian/trackreports.jsx'
import EditProfile from './Civilian/editprofile.jsx'
import AddPhoto from './Civilian/addphoto.jsx';
import Details from './Civilian/details.jsx'
import Review from './Civilian/review.jsx';
import Submit from './Civilian/submit.jsx'

import VolunteerApplication from './Volunteer/volunteerapplication.jsx'

import Settings from './RescueTeam/settings.jsx'
import Units from './RescueTeam/units.jsx'

// Admin Imports
import AdminOverview from './Admin/adminoverview.jsx'
import SystemSettings from './Admin/systemsettings.jsx'
import Profile from './Admin/profile.jsx'
import SystemMaintenance from './Admin/systemmaintenance.jsx'
import IncidentReports from './Admin/incidentreports.jsx'
import UserAccount from './Admin/useraccount.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* Civilian Routes */}
        <Route path="/civilian-dashboard" element={<Overview />} />
        <Route path="/report" element={<Step1 />} />
        <Route path="/track-reports" element={<TrackReports />} />  
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/addphoto" element={<AddPhoto />} />
        <Route path="/details" element={<Details />} />
        <Route path="/review" element={<Review />} />
        <Route path="/submit" element={<Submit />} />   
        
        {/* Rescue Team Routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/incidents" element={<IncidentManagement />} />
        <Route path="/volunteer-application" element={<VolunteerApplication />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/applicant-details/:id" element={<ApplicantDetails />} />
        <Route path="/incidents/:id" element={<IncidentDetails />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/units" element={<Units />} />

        {/* Admin Routes - Separate routes (NOT nested) */}
        <Route path="/admin/overview" element={<AdminOverview />} />
        <Route path="/admin/systemsettings" element={<SystemSettings />} />
        <Route path="/admin/profile" element={<Profile />} />
        <Route path="/admin/systemmaintenance" element={<SystemMaintenance />} />
        <Route path="/admin/incidentreports" element={<IncidentReports />} />
        <Route path="/admin/useraccounts" element={<UserAccount />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)