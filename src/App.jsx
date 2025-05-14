import { Route, Routes, BrowserRouter } from 'react-router-dom';

// Components
import MyNavbar from './components/MyNavbar';

// Pages
import RegisterPage from './pages/RegisterPage';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <>
      <MyNavbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>home</h1>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
