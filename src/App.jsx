import DropZone from './components/DropZone';
import PreLogin from './components/PreLogin';
import './App.css'
import { Container, Row } from 'react-bootstrap';
function App() {

  return (
    <Container>
      <Row  className="App">
     <DropZone/>
     <PreLogin/>
    </Row>
    </Container>
  )
}

export default App
