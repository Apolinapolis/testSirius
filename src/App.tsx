import { Routes, Route } from 'react-router-dom'
import { RegisterPage } from './components/pages/SignUp/SignUp';
import { Login } from './components/pages/Login/Login';
import {SchedulePage} from './components/pages/Schedule/SchedulePage';


function App() {
  return (
    <Routes>
      <Route path="/calendar" element={<SchedulePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
