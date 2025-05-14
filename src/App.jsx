import { Route, Routes, BrowserRouter } from 'react-router-dom';

// Components
import MyNavbar from './components/MyNavbar';

// Pages
import RegisterPage from './pages/RegisterPage';
import ListingPage from './pages/ListingPage';

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
          <Route path="/book/listing" element={<ListingPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
