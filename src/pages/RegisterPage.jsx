import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { useFirebase } from '../context/Firebase';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const { signupUserWithEmailAndPassword, loginWithGoogle, isLoggedIn } =
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
    console.log('signing user...');
    await signupUserWithEmailAndPassword(email, password);
    console.log('Successfull');
  };

  return (
    <div className="container mt-5">
      <h1 className="my-5">Register</h1>
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
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
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
          Create Account
        </Button>
      </Form>

      <h2 className="my-5">OR</h2>

      <Button variant="danger" onClick={loginWithGoogle}>
        Signup with Google
      </Button>
    </div>
  );
};

export default RegisterPage;
