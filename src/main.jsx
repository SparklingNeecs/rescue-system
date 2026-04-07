import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

// Import all your components
import App from './App.jsx'
import Login from './login.jsx'
import Signup from './signup.jsx'
import Dashboard from './dashboard.jsx'
import CivilianDashboard from './civiliandashboard.jsx'
import IncidentManagement from './incidentmanagement.jsx'
import VolunteerApplication from './volunteerapplication.jsx'
import VolunteerApproval from './volunteerapproval.jsx'
import ApplicantDetails from './applicantdetails.jsx'
import EditProfile from './editprofile.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* Protected Routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/civilian-dashboard" element={<CivilianDashboard />} />
        <Route path="/incidents" element={<IncidentManagement />} />
        <Route path="/volunteer-application" element={<VolunteerApplication />} />
        <Route path="/volunteer-approval" element={<VolunteerApproval />} />
        <Route path="/applicant-details/:id" element={<ApplicantDetails />} />
        <Route path="/edit-profile" element={<EditProfile />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)