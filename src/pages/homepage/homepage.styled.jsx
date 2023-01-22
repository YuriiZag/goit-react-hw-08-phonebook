import styled from "styled-components";

export const Hero = styled.h1`
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.xl}px;
`
export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`