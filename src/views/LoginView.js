import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';

import Container from '../components/Container'

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

export default function LoginView() {
  const dispatch = useDispatch()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleChange = useCallback((e) => {
      const { name, value } = e.target;
      switch (name) {
        case 'email':
          return setEmail(value);
        case 'password':
          return setPassword(value);
        default:
          console.warn(`Tipe of field_name - ${name} is not valid`);
      };
    }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
 
  }, [dispatch, email, password]);

  return (
    <Container>
      <h1>Please LogIn</h1>

      <form
        onSubmit={handleSubmit}
        style={styles.form}
        autoComplete="off"
      >
        <label style={styles.label}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label style={styles.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit">LogIn</button>
      </form>
    </Container>
  );
};
