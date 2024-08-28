
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,

} from 'react-router-dom'
import Login from './screens/Login';



import Navbar from './components/Navbar';
import Resumeform from './screens/Resumeform';
import Resumelist from './screens/Resumelist';
import Signup from './screens/Signup';
function App() {
  return (
    <Router>
      <div>
        <Routes>

          <Route path="/home" element={<Navbar/>}/>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/resumeform" element={<Resumeform/>} />
          <Route path='/resumelist' element={<Resumelist/>}/>
        </Routes>
      </div>
    </Router>
   
  );
}

export default App;
