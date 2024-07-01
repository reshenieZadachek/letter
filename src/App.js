import React, { useState } from 'react';
import styled from 'styled-components';
import Letter from './components/Letter';
import BackgroundMusic from './components/BackgroundMusic';
import FallingPetals from './components/FallingPetals';


const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  overflow: hidden;
  max-width: 1200px;
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
  position: relative;
`;

function App() {
  const [ activate, setActivate ] = useState(false)
  return (
    <AppContainer>
      <FallingPetals />
      <BackgroundMusic activate={activate} setActivate={setActivate} />
      {activate && <Letter />}
    </AppContainer>
  );
}

export default App;