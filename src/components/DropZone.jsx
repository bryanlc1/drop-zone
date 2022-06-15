import { useEffect, useState } from 'react';

import { useDropzone } from 'react-dropzone';
import { Button, Row, Col, Stack } from 'react-bootstrap';
import '../styles/DropZone.css'
import useDrop from '../hooks/useDrop';
import ModalError from './ModalError';
import BtonGDrive from './BtonGDrive';

const DropZone = () => {
    const { Files, setFiles } = useDrop();
    //const [files, setFiles] = useState([]);
    const [rejectedFiles, setRejectedFiles] = useState([]);

    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/*': ['.png', '.jpg'],
            'application/pdf': ['.pdf'],
        },
        onDrop: (acceptedFiles) => {
            setFiles(
                acceptedFiles.map(file => Object.assign(file, {
                    url: URL.createObjectURL(file),
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

    const currentFiles = Files?.length !== 0 && rejectedFiles?.length === 0;
    const notCurrentFiles = Files?.length === 0 && rejectedFiles?.length === 0;
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
                                    {Files?.map(file => (
                                        ` ${file.name}, `
                                    ))}
                                    subidos correctamente
                                </p>
                            </>
                        )}

                    </div>

                }

                <Stack gap={2}>
                    <Button variant="success" {...getRootProps()}>
                        <input
                            {...getInputProps()}
                        />
                        Subir archivos
                    </Button>
                    <BtonGDrive />
                </Stack>
            </Col>
        </>
    )
}

export default DropZone;