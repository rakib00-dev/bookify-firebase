import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1 className="container">home</h1>} />
        <Route path="/login" element={<h1>login</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
