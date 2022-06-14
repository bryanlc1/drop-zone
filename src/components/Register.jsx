import { useNavigate } from 'react-router-dom';

import { Form, Button, Stack } from "react-bootstrap";

import '../styles/Register.css'
const Register = () => {
    const navigateTo = useNavigate();

    return (
        <div className="contForm">
            <Form className="formRegister">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Nombre" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Apellido" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                    <Button variant="secondary" onClick={() => navigateTo("/")}> Registrarse </Button>
            </Form>
        </div>
    )
}

export default Register;