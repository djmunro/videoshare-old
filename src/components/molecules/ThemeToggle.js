import React from 'react'
import styled from '@emotion/styled'
import {darken, lighten} from 'polished'
import {Sun, Moon} from 'react-feather'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem 0;
`

const ToggleContainer = styled.div`
  cursor: pointer;
`;

const ToggleBackground = styled.div`
  width: 4rem;
  height: 2rem;
  background-color: ${({ theme }) => darken(0.1, theme.app.background)};
  border-radius: 16px;
  transition: background-color 0.2s;
  margin: 0 1rem;
`;

const TogglePin = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: ${({ theme }) =>
    theme.name === `light` ? `#fafafa` : lighten(0.1, theme.colors.primary)};
  transform: translateX(
    ${({ theme }) => (theme.name === `light` ? 0 : `2rem`)}
  );
  transition: transform 0.2s, background-color 0.2s;
  border-radius: 16px;
  box-shadow: 0px 8px 4px rgba(0, 0, 0, 0.05);
`;

// TODO: DRY
const SunIcon = styled(Sun)`
  color: ${({ theme }) =>
    theme.name === `light` ? theme.colors.black : theme.colors.primary};
  transition: all 0.2s;
  opacity: ${({ theme }) => (theme.name === `light` ? 0.6 : 1)};
`;

const MoonIcon = styled(Moon)`
  color: ${({ theme }) =>
    theme.name === `light` ? theme.colors.black : theme.colors.primary};
  transition: all 0.2s;
  opacity: ${({ theme }) => (theme.name === `light` ? 0.6 : 1)};
`;

const ThemeToggle = ({setCurrentTheme}) => (
  <Container>
    <SunIcon />
    <ToggleContainer onClick={setCurrentTheme}>
      <ToggleBackground>
        <TogglePin />
      </ToggleBackground>
    </ToggleContainer>
    <MoonIcon />
  </Container>
)

export default ThemeToggle
