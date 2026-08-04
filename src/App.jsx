import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Futuras rutas */}
        {/* <Route path="/client-portal" element={<ClientPortal />} /> */}
        {/* <Route path="/lawyer-portal" element={<LawyerPortal />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
