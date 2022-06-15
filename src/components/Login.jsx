import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import useDrop from "../hooks/useDrop";

import { Form, Button, Modal, Stack } from "react-bootstrap";

const Login = (props) => {
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
        })
        props.onHide();
    }

    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handelsubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>
                        <Stack gap={2}>
                            <Button variant="success" type="submit"> Login </Button>
                            <Button variant="secondary" onClick={() => navigateTo("/register")}> Registrarse </Button>
                        </Stack>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Login;