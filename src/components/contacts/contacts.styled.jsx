import styled from 'styled-components';

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${p => p.theme.colors.white};
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
`;

export const FilterField = styled.input`
  width: 150px;
  font-weight: 500;
  font-size: ${p => p.theme.fontSizes.xs}px;
  background-color: transparent;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 2px solid black;
  :hover,
  :focus {
    border-color: ${p => p.theme.colors.red};
    outline: none;
  }
`;

export const DeleteButton = styled.button`
  border: none;
  color: white;
  display: block;
  background-color: ${p => p.theme.colors.headerBackground};
  border-radius: ${p => p.theme.radii.normal}px;
  :hover,
  :focus {
    text-decoration: underline 1px;
    scale: 105%;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
  }
`;
export const ContactList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 19px;
`;
export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  width: 300px;
`
export const ContactName = styled.span`
  font-weight: 500;
`;
export const ContactNumber = styled.span`
  margin-left: 10px;
`;
