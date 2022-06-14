import '../styles/PreLogin.css';
import { FaGoogle } from "react-icons/fa";
import { Col } from "react-bootstrap";
import Login from './Login';
import { useState } from 'react';

const PreLogin = () => {
    const [modalShow, setModalShow] = useState(false)
    const gotoLogin = () => {
        console.log('hola')
        setModalShow(true);
    }
    return (
        <Col xs={12} lg={4} className='contWelcome'>
            <div className="welcome">
                <h3>Bienvenido a DDrop</h3>
                <p>Para subir tus archivos a traves de drive, puedes hacer logina traves de google</p>
            </div>
            <button className='btonLogin' onClick={() => gotoLogin()}>Login</button>
            <button className='btonLogin'><span><FaGoogle /></span> Login con Google</button>

            <Login
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </Col>
    )
}

export default PreLogin;