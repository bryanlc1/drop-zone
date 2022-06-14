import DropZone from '../components/DropZone';
import PreLogin from '../components/PreLogin';
import { Row } from 'react-bootstrap';
import useDrop from '../hooks/useDrop';

const Home = () => {
    const {User} = useDrop();
    return (
        <Row className="home">
            {User.login
            ?
             <>
             <DropZone />
             </>
            :
            <>
            <DropZone />
            <PreLogin />
            </>
            }
           
        </Row>
    )
}

export default Home;