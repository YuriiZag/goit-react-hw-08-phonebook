import { register } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import { AuthButton, AuthContainer, AuthForm, AuthInput, AuthLabel } from 'components/loginForm/loginForm.styled';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = evt => {
    const { email, password, name } = evt.currentTarget.elements;
    evt.preventDefault();
    dispatch(
      register({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );
  };

  return (
    <AuthContainer>
      <AuthForm autoComplete="off" onSubmit={handleSubmit}>
        <AuthLabel htmlFor="name">
          <span>Insert name:</span>
          <AuthInput name="name" type="text" />
        </AuthLabel>
        <AuthLabel htmlFor="email">
          <span>Insert email:</span>
          <AuthInput name="email" type="email" />
        </AuthLabel>
        <AuthLabel htmlFor="password">
          <span>Insert password:</span>
          <AuthInput name="password" type="password" />
        </AuthLabel>
        <AuthButton type="submit">Register</AuthButton>
      </AuthForm>
    </AuthContainer>
  );
};

export default RegisterForm;
