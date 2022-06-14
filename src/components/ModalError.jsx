import '../styles/ModalError.css'
import {Button } from "react-bootstrap";

const ModalError = ({reset}) => {
    return (
        <div className="modalError">
            <h4>Ups algo a ido mal </h4>
            <p>No hemos podido subir tu archivo, revisa el formato o bien intentalo de nuevo</p>
            <Button variant="success" onClick={reset}>Cerrar</Button>
        </div>
    )
}

export default ModalError;