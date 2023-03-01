import styled from 'styled-components';
import Navbar from './navbar/navbar';

import NxWelcome from './nx-welcome';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <Navbar />
    </StyledApp>
  );
}

export default App;
