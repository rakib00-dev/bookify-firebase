import { Route, Routes, BrowserRouter } from 'react-router-dom';

// Pages
import RegisterPage from './pages/RegisterPage';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1 className="container">home</h1>} />
        <Route path="/login" element={<h1>login</h1>} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
