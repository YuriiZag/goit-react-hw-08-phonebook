import styled from "styled-components";

export const Hero = styled.h1`
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.xl}px;
    color: ${p => p.theme.colors.white};
    text-shadow: 3px 3px 3px  rgba(0, 0, 0, 0.5)
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90%;
  background-image: repeating-linear-gradient(
    to bottom,
    ${p => p.theme.colors.lightBackground},
    ${p => p.theme.colors.lightBackground} 20px,
    ${p => p.theme.colors.darkBackground} 20px,
    ${p => p.theme.colors.darkBackground} 40px
  );
`;
