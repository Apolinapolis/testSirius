import { Routes, Route } from 'react-router-dom'
import { RegisterPage } from './pages/SignUp/SignUp';
import { Login } from './pages/Login/Login';
import {SchedulePage} from './pages/Schedule/SchedulePage';
import { MainPage } from './pages/Main/MainPage'

const App:React.FC = () => {
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
