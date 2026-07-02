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
import VolunteerApproval from './RescueTeam/volunteerapproval.jsx'

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
        <Route path="/volunteer-approval" element={<VolunteerApproval />} />
        <Route path="/applicant-details/:id" element={<ApplicantDetails />} />
        
        {/* Rescue Team Incident Details */}
        <Route path="/incidents/:id" element={<IncidentDetails />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)