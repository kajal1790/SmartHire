import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import LoginPage from './component/Login';
import AdminHomepage from './component/HrHomepage';
import Navbar from './component/NavBar';
import CohortMemberRegistration from './component/CohortRegistration';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div>
        <LoginPage/>
        <AdminHomepage/>
        <CohortMemberRegistration/>
      </div> 
      {/* <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/admin-homepage" element={<><Navbar /><AdminHomepage /></>} />
          <Route path="/cohort-member-registration" element={<><Navbar /><CohortMemberRegistration /></>} />
        </Routes>
      </div>
    </Router> */}
    </div>
  );
}

export default App;
