import { Routes, Route } from 'react-router-dom'
import { RegisterPage } from './components/SignUp';
import { Login } from './components/Login';
import {SchedulePage} from './components/pages/SchedulePage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<SchedulePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
