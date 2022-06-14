import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button,Row,Col} from 'react-bootstrap';
import '../styles/DropZone.css'

const DropZone = () => {
    const [files, setFiles] = useState([]);
    const [rejectedFiles,setRejectedFiles]= useState([]);

    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/*':['.png','.jpg'],
            'application/pdf':['.pdf'],
        },
        onDrop: (acceptedFiles) => {
            setFiles(
                acceptedFiles.map(file => Object.assign(file, {
                    preview: URL.createObjectURL(file)
                }))
            )
            console.log(acceptedFiles)
        },
        onDropRejected:(rejectFiles)=>{
            console.log(rejectFiles)
            setRejectedFiles(
                rejectFiles.map(({file}) => Object.assign(file, {
                    preview: URL.createObjectURL(file)
                }))
            )
            console.log(rejectFiles)

        }
    })

    const currentFiles = files?.length !== 0;
    console.log(files.length)
    const notCurrentFiles = files?.length === 0;
    return (
        <>
        <Col xs={{order:1}} lg={{order:0}} className='contDrop order-xs-last'>
            <div  className='dropArea' {...getRootProps()} >
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
        </Col>

        </>
        

    )
}

export default DropZone;