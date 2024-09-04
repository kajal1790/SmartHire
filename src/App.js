import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import LoginPage from './component/Login';
import AdminHomepage from './component/HrHomepage';
import Navbar from './component/NavBar';
import CohortMemberRegistration from './component/CohortRegistration';
import CreateInterviewSchedule from './component/CreateInterviewSchedule';
import UpcomingInterview from './component/CohortMember/UpcomingInterview';
import SelectAvailability from './component/CohortMember/SelectAvailability';
import InterviewHistory from './component/CohortMember/InterviewHistory';
import CohortMemberHomePage from './component/CohortMember/CohortMemberHomePage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <div>
        <LoginPage/>
        <AdminHomepage/>
        <CohortMemberRegistration/>
        <CreateInterviewSchedule/>
      </div>  */}
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/admin-homepage" element={<AdminHomepage />}/>
          <Route path="/cohort-member-registration" element={<CohortMemberRegistration/>} />
          <Route path="/create-new-schedule" element={<CreateInterviewSchedule/>} />
          <Route path="/cohort-member" element={<CohortMemberHomePage/>} />
          <Route path="/upcoming-schedule" element={<UpcomingInterview/>} />
          <Route path="/select-availability" element={<SelectAvailability/>} />
          <Route path="/interview-history" element={<InterviewHistory/>} />
        </Routes>

    </Router>
    </div>
  );
}

export default App;
