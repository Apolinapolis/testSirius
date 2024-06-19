import { Routes, Route } from 'react-router-dom'
import { RegisterPage } from './components/pages/SignUp/SignUp';
import { Login } from './components/pages/Login/Login';
import {SchedulePage} from './components/pages/Schedule/SchedulePage';
import { MainPage } from './components/pages/Main/MainPage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/calendar" element={<SchedulePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
