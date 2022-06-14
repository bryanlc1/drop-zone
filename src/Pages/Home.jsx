import DropZone from '../components/DropZone';
import PreLogin from '../components/PreLogin';
import { Row } from 'react-bootstrap';

const Home = () => {
    return (
        <Row className="home">
            <DropZone />
            <PreLogin />
        </Row>
    )
}

export default Home;