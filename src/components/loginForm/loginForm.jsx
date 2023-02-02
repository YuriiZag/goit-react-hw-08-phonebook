import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';
import { AuthButton, AuthContainer, AuthForm, AuthInput, AuthLabel } from './loginForm.styled';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    const { email, password } = evt.currentTarget.elements;
    evt.preventDefault();
    dispatch(
      login({
        email: email.value,
        password: password.value,
      })
    );
  };

  return (
    <AuthContainer>
      <AuthForm autoComplete="off" onSubmit={handleSubmit}>
        <AuthLabel htmlFor="email">
          <span>Email:</span>
          <AuthInput name="email" type="email" />
        </AuthLabel>
        <AuthLabel htmlFor="password">
          <span>Password:</span>
          <AuthInput name="password" type="password" />
        </AuthLabel>
        <AuthButton type="submit">Login</AuthButton>
      </AuthForm>
    </AuthContainer>
  );
};

export default LoginForm