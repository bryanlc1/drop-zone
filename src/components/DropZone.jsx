import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button } from 'react-bootstrap';
import '../styles/DropZone.css'

const DropZone = () => {
    const [files, setFiles] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/*': ['.png', '.gif', '.jpeg', '.jpg'],
            'application/pdf': ['.pdf']
        },
        onDrop: (acceptedFiles) => {
            setFiles(
                acceptedFiles.map(file => Object.assign(file, {
                    preview: URL.createObjectURL(file)
                }))
            )

            console.log(acceptedFiles)
        }
    })

    const currentFiles = files?.length !== 0;
    console.log(files.length)
    const notCurrentFiles = files?.length === 0;
    return (
        <div className='contDrop'>
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
            <Button variant="success" {...getRootProps()}>
                <input
                    {...getInputProps()}
                />
                Subir archivos
            </Button>
        </div>

    )
}

export default DropZone;