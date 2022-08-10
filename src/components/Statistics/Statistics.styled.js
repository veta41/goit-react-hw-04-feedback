import styled from 'styled-components';

export const  StatisticSection = styled.div`

padding: ${p => p.theme.space[4]}px;
`

export const Item = styled.li`
  padding: ${p => p.theme.space[3]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.body}
`;

export const Text = styled.p`
  margin: ${p => p.theme.space[0]}px;;
  font-size: ${p => p.theme.fontSizes.m};
`;