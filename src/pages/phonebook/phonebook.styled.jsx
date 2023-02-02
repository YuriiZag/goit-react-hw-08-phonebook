import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  height: 90%;
  background-image: repeating-linear-gradient(
    to bottom,
    ${p => p.theme.colors.lightBackground},
    ${p => p.theme.colors.lightBackground} 20px,
    ${p => p.theme.colors.darkBackground} 20px,
    ${p => p.theme.colors.darkBackground} 40px
  ); ;
`;
export const Header = styled.p`
  margin: 5px 0 30px 0;
  font-size: ${p => p.theme.fontSizes.l}px;
  font-weight: 700;
  color: ${p => p.theme.colors.white};
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
`;

export const AddButton = styled.button`
  margin-bottom: 20px;
  width: 150px;
  height: 40px;
  border: none;
  color: white;
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
