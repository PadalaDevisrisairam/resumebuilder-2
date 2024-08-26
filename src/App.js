
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,

} from 'react-router-dom'
import Login from './screens/Login';


import Pricing from './screens/Signup';
import Navbar from './components/Navbar';
import Resumeform from './screens/Resumeform';
import Resumelist from './screens/Resumelist';
function App() {
  return (
    <Router>
      <div>
        <Routes>

          <Route path="/home" element={<Navbar/>}/>
          <Route path="/" element={<Login/>}/>
          <Route path="/pricing" element={<Pricing/>}/>
          <Route path="/resumeform" element={<Resumeform/>} />
          <Route path='/resumelist' element={<Resumelist/>}/>
        </Routes>
      </div>
    </Router>
   
  );
}

export default App;
