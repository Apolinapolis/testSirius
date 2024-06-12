import { Routes, Route } from 'react-router-dom'
import { HomePage } from './components/HomePage';
import { RegisterPage } from './components/SignUp';
import { Login } from './components/Login';


function App() {
  return (
    <Routes>
      <Route path="/" element={ <HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
