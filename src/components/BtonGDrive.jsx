import useDrivePicker from 'react-google-drive-picker/dist';
import useDrop from '../hooks/useDrop';

import { FaGoogle } from "react-icons/fa";


const BtonGDrive = () => {
    const [openPicker, authResponse] = useDrivePicker(); 
    const {setFiles} = useDrop();

    const key = import.meta.env.VITE_APP_KEY;
    const developer = import.meta.env.VITE_APP_DEVELOPER;
    
    console.log(key,developer);
    const handleOpenDrive = () => {
        openPicker({
            clientId:key,
            developerKey:developer,
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