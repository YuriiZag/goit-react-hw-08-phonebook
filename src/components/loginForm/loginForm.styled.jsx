import styled from 'styled-components';

export const AuthContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 300px;
`;

export const AuthLabel = styled.label`
  font-weight: ${p => p.theme.fontWeights.normal};
  display: flex;
  justify-content: space-between;
`

export const AuthInput = styled.input`
    border-top: none;
    border-right: none;
    border-left: none;
    :hover, :focus {
        border-color: ${p => p.theme.colors.red};
        outline: none;
    }
`

export const AuthButton = styled.button`
    width: 150px;
    margin: 30px auto 0 auto;
    display: block;
`