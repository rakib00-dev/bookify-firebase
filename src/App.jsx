import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <h1 className="container">
              home
              <Button variant="info" className="">
                click me
              </Button>
            </h1>
          }
        />
        <Route path="/login" element={<h1>login</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
