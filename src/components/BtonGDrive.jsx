import useDrivePicker from 'react-google-drive-picker/dist';
import useDrop from '../hooks/useDrop';

import { FaGoogle } from "react-icons/fa";


const BtonGDrive = () => {
    const [openPicker, authResponse] = useDrivePicker(); 
    const {setFiles} = useDrop();

    const handleOpenDrive = () => {
        openPicker({
            clientId:'532686612730-eicmrp91dm9n90223fa16r4jvf914gm1.apps.googleusercontent.com',
            developerKey:'AIzaSyDW8CouzaPL8VuqeXaMYRTZTTPr4MNzeR4',
            viewId: 'DOCS_IMAGES',
            showUploadView:true,
            showUploadFolders:true,
            supportDrives:true,
            multiselect:true,
            callbackFunction: ({docs}) => {
                setFiles(docs);
                console.log(authResponse)
            },
        })
    }

    return(
        <button className='btonLogin' onClick={()=> handleOpenDrive()} ><span><FaGoogle /></span> Subir archivos de drive</button>
    )

}

export default BtonGDrive;