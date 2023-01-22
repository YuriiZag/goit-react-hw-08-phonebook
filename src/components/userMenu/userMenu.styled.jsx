import styled from "styled-components";

export const UserMenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
`

export const Salutation = styled.p`
    font-size: ${p => p.theme.fontSizes.m}px;
    margin: 0 0 15px 0;

`

export const UserName = styled.span`
  font-size: ${p => p.theme.fontSizes.m}px;
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const LogOutButton = styled.button`
    width: 120px;
`