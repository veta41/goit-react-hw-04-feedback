import styled from 'styled-components';

export const NotificText = styled.p`
 font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.lineHeights.heading};
  padding: ${p => p.theme.space[5]}px;
  text-align: center;
  color: ${p => p.theme.colors.accent};

`