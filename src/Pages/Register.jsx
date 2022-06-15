import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useDrop from "../hooks/useDrop";

import { Form, Button } from "react-bootstrap";
import '../styles/Register.css'

const Register = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigateTo = useNavigate();
    const { setUser } = useDrop();

    const handelsubmit = event => {
        event.preventDefault();
        setUser({
            email: email,
            password: password,
            login: true
        });
        navigateTo("/");
    }

    return (
        <div className="contForm">
            <Form className="formRegister" onSubmit={handelsubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Nombre" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Apellido" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Button variant="secondary" type='submit'> Registrarse </Button>
            </Form>
        </div>
    )
}

export default Register;