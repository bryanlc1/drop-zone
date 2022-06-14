import { useNavigate } from 'react-router-dom';

import { Form, Button, Modal, Stack } from "react-bootstrap";
const Login = (props) => {
    const navigateTo = useNavigate();

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
                <Modal.Body closeButton>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Stack  gap={2}>
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