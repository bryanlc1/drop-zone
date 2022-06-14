import '../styles/PreLogin.css';
import { Button, Row, Col } from "react-bootstrap";


const PreLogin = () => {
    return(
        <Col xs={12} lg={4} className='contWelcome'>
            <div className="welcome">
                <h3>Bienvenido a Drop</h3>
                <p>Para subir tus archivos a traves de drive, puedes hacer logina traves de google</p>
            </div>
            <button className='btonLogin'>Login con Google</button>
        </Col>
    )
}

export default PreLogin;