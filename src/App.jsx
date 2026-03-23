import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TonySnufkin from './pages/TonySnufkin';
import Wantis from './pages/Wantis';
import Space from './pages/Space';
import Unite from './pages/Unite';

export default function App() {
  return (
    <Routes>
      <Route path="/"            element={<Home />} />
      <Route path="/tonysnufkin" element={<TonySnufkin />} />
      <Route path="/wantis"      element={<Wantis />} />
      <Route path="/space"       element={<Space />} />
      <Route path="/unite"       element={<Unite />} />
    </Routes>
  );
}
