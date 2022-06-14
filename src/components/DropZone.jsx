import { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button, Row, Col } from 'react-bootstrap';
import '../styles/DropZone.css'
import ModalError from './ModalError';

const DropZone = () => {
    const [files, setFiles] = useState([]);
    const [rejectedFiles, setRejectedFiles] = useState([]);

    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/*': ['.png', '.jpg'],
            'application/pdf': ['.pdf'],
        },
        onDrop: (acceptedFiles) => {
            setFiles(
                acceptedFiles.map(file => Object.assign(file, {
                    preview: URL.createObjectURL(file)
                }))
            )
            console.log(acceptedFiles)
        },
        onDropRejected: (rejectFiles) => {
            console.log(rejectFiles)
            setRejectedFiles(
                rejectFiles.map(({ file }) => Object.assign(file, {
                    preview: URL.createObjectURL(file)
                }))
            )
            console.log(rejectFiles)

        }
    })
    console.log('rejected', rejectedFiles.length)

    const currentFiles = files?.length !== 0 && rejectedFiles?.length === 0;
    const notCurrentFiles = files?.length === 0 && rejectedFiles?.length === 0;
    const errorFiles = rejectedFiles?.length !== 0



    return (
        <>
            <Col xs={{ order: 1 }} lg={{ order: 0 }} className='contDrop order-xs-last'>
                {errorFiles ?
                    <div className='dropArea'  >
                        <ModalError reset={() => setRejectedFiles([])} />

                    </div>
                    :
                    <div className='dropArea' {...getRootProps()} >
                        <input {...getInputProps()} />

                        {notCurrentFiles && <p className="textDrop">Sube tus archivos</p>}

                        {currentFiles && (
                            <>
                                <p className="textDrop">
                                    Archivos,
                                    {files.map(file => (
                                        ` ${file.name}, `
                                    ))}
                                    subidos correctamente
                                </p>
                            </>
                        )}

                    </div>

                }

                <Button variant="success" {...getRootProps()}>
                    <input
                        {...getInputProps()}
                    />
                    Subir archivos
                </Button>
            </Col>

        </>


    )
}

export default DropZone;