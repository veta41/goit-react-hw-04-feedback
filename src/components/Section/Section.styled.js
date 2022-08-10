import styled from 'styled-components';

export const Sections = styled.section`
/* margin:  ${p => p.theme.space[0]}px; */
width: 600px;
`;


export const Title = styled.h2`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.lineHeights.heading};
  padding: ${p => p.theme.space[5]}px;
  text-align: center;
  color: $p{p => p.theme.colors.black};
`