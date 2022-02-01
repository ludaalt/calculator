import Calculator from './components/Calculator'

import styled from 'styled-components'

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: lightgray;

  display: flex;
  justify-content: center;
  align-items: center;
`

const App = () => {
  return (
    <AppContainer>
      <Calculator />
      
    </AppContainer>
  );
}

export default App;
