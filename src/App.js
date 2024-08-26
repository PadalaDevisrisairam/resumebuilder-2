
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,

} from 'react-router-dom'
import Login from './screens/Login';

import Home from './screens/Home';
import Pricing from './screens/Signup';
import Navbar from './components/Navbar';
import Resume_components from './components/Resume_compnent'
import ResumeDisplay from './components/Resume_display';
function App() {
  return (
    <Router>
      <div>
        <Routes>

          <Route path="/" element={<Navbar/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/pricing" element={<Pricing/>}/>
          <Route path="/resume-form" element={<Resume_components/>} />
        <Route path="/resume-display" element={<ResumeDisplay />} />
        </Routes>
      </div>
    </Router>
   
  );
}

export default App;
