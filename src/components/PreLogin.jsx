import { useState } from 'react';

import Login from './Login';

import { Col } from "react-bootstrap";
import '../styles/PreLogin.css';

const PreLogin = () => {
    const [modalShow, setModalShow] = useState(false);

    const gotoLogin = () => {
        setModalShow(true);
    }

    return (
        <Col xs={12} lg={4} className='contWelcome'>
            <div className="welcome">
                <h3>Bienvenido a DDrop</h3>
                <p>Para subir tus archivos a traves de drive, puedes hacer logina traves de google</p>
            </div>
            <button className='btonLogin' onClick={() => gotoLogin()}>Login</button>

            <Login
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </Col>
    )
}

export default PreLogin;