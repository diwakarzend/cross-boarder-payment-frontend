import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import IconDropbox from '../../assests/images/Icons/IconDropbox';
import { AlertMessage } from '../UI/AlertMessage';
import { UploadFileWrapper } from './style';

export function UploadFile({
    onUploadFile = () => { },
    uploadText = "Upload File",
    bulkUploadRequest = () => { },
    accept = "",
}) {
    const [alertMessage, setAlertMessage] = useState({
        type: "",
        messageList: [],
    });

    const onDrop = useCallback(acceptedFiles => {
        const formData = new FormData();
        formData.append("file", acceptedFiles[0])
        bulkUploadRequest(formData).then((response) => {
            console.log("alertMessage response = ", response);
            setAlertMessage({type: response?.data?.success ? 'success' : 'error', messageList: [response?.data?.msg]});
            onUploadFile(response?.data);
        })
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    console.log("alertMessage = ", alertMessage);

    return (
        <UploadFileWrapper className='upload-file-wrapper'>
            <AlertMessage alertMessage={alertMessage} />
            <div className='upload-file-wrapper' {...getRootProps()}>
                <input {...getInputProps()} />
                <IconDropbox />
                {
                    isDragActive ?
                        <p>Drop the files here ...</p> :
                        <p>Drag 'n' drop some files here, or click to select files</p>
                }
            </div>
        </UploadFileWrapper>
    )
}