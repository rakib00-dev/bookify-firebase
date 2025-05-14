import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { useFirebase } from '../context/Firebase';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const { loginUserWithEmailAndPass, loginWithGoogle, isLoggedIn } =
    useFirebase();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      return navigate('/');
    }
  }, [isLoggedIn]);

  console.log(isLoggedIn);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('loging in user...');
    const result = await loginUserWithEmailAndPass(email, password);
    console.log('login Successfull');
    console.log(result);
  };

  return (
    <div className="container mt-5">
      <h1 className="my-5 auto">Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            minLength={6}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>

      <h2 className="my-5">OR</h2>

      <Button variant="danger" onClick={loginWithGoogle}>
        Login with Google
      </Button>
    </div>
  );
};

export default LoginPage;
