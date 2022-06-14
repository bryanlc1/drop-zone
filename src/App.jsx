import { DropProvider } from './context/DropContext'

import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
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
