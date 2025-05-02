import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Face from './Components/Face';
import Mouse from './pages/Mouse';
import DataV from './pages/DataV';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Faces" element={<Face />} />
        <Route path="/Mouse" element={<Mouse />} />
        <Route path="/DataV" element={<DataV />} />
      </Routes>
    </Router>
  );
};

export default App;
