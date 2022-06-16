import useDrivePicker from 'react-google-drive-picker/dist';
import useDrop from '../hooks/useDrop';

import { FaGoogle } from "react-icons/fa";

const BtonGDrive = () => {
    const [openPicker, authResponse] = useDrivePicker();
    const { setFiles } = useDrop();

    const key = import.meta.env.VITE_APP_CLIENTID;
    const developer = import.meta.env.VITE_APP_DEVELOPERKEY;

    const handleOpenDrive = () => {
        openPicker({
            clientId: key,
            developerKey: developer,
            viewId: 'DOCS_IMAGES',
            showUploadView: true,
            showUploadFolders: true,
            supportDrives: true,
            multiselect: true,
            callbackFunction: ({ docs }) => {
                if (docs) {
                    setFiles(docs);
                }
            },
        })
    }

    return (
        <button className='btonLogin' onClick={() => handleOpenDrive()} ><span><FaGoogle /> Subir archivos de drive</span></button>
    )
}

export default BtonGDrive;