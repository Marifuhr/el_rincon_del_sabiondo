import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { Form, Button } from 'react-bootstrap';
import styles from './Login.module.css';

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button onClick={() => loginWithRedirect()}>Login</button>
  );
};

export default function Login() {
  const { handleSubmit } = useAuth0();

  return (
    <div className={styles.myCustomClass}>
      <Form onSubmit={handleSubmit}>
        {/* Rest of the code */}
        <div>
          <p className="mb-0">Dont have an account? <Link to="/signup" className="text-white-50 fw-bold">Sign Up</Link></p>
        </div>
        <div>
          <Button variant="outline-light" size="lg" className="px-5" type="button">
            <Link to="/" className="text-white">Back</Link>
          </Button>
        </div>
        {/* Rest of the code */}
      </Form>
    </div>
  );
}
