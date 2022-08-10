import styled from 'styled-components';

export const ButtonWrapper = styled.div`
display: flex;
justify-content: space-around; 
`

export const Button = styled.button`
display: inline-flex; 
align-items: center;
text-align: center;
gap: ${p => p.theme.space[2]}px;
margin: ${p => p.theme.space[3]}px;
padding-top: ${p => p.theme.space[3]}px;
padding-bottom: ${p => p.theme.space[3]}px;
padding-left: ${p => p.theme.space[4]}px;
padding-right: ${p => p.theme.space[4]}px;
border: ${p => p.theme.borders.none};
border-radius: ${p => p.theme.radii.sm};
background-color: ${p => p.theme.colors.primary};
color: ${p => p.theme.colors.white};
text-transform: uppercase;
transform: scale(0.95);
transition: transform 500ms ease 0s;
cursor: pointer;

:hover,
:focus{
  background-color: ${p => p.theme.colors.secondary};
  transform: scale(1);
}

`