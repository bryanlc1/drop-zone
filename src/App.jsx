import { Outlet } from 'react-router-dom';

import { DropProvider } from './context/DropContext'

import { Container } from 'react-bootstrap';
function App() {

  return (
    <DropProvider>
      <Container>
        <Outlet />
      </Container>
    </DropProvider>
  )
}

export default App
