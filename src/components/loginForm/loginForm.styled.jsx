import styled from 'styled-components';

export const AuthContainer = styled.div`
  display: flex;

  justify-content: center;
  background-image: repeating-linear-gradient(
    to bottom,
    ${p => p.theme.colors.lightBackground},
    ${p => p.theme.colors.lightBackground} 20px,
    ${p => p.theme.colors.darkBackground} 20px,
    ${p => p.theme.colors.darkBackground} 40px
  );
  height: 90%;
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 280px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 60px;
`;

export const AuthLabel = styled.label`
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  font-size: ${p => p.theme.fontSizes.xs}px;
`;

export const AuthInput = styled.input`
  font-weight: 500;
  font-size: ${p => p.theme.fontSizes.xs}px;
  background-color: transparent;
  border-top: none;
  border-right: none;
  border-left: none;
  :hover,
  :focus {
    border-color: ${p => p.theme.colors.red};
    outline: none;
  }
`;
export const AuthButton = styled.button`
  width: 150px;
  height: 40px;
  border: none;
  color: white;
  margin: 30px auto 0 auto;
  display: block;
  font-weight: 500;
  font-size: ${p => p.theme.fontSizes.xs}px;
  background-color: ${p => p.theme.colors.headerBackground};
  border-radius: ${p => p.theme.radii.normal}px;
  :hover,
  :focus {
    text-decoration: underline 1px;
    scale: 105%;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
  }
`;