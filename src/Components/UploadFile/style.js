import styled from 'styled-components';

export const UploadFileWrapper = styled.div`
    
    .uplaod-file-inner {
        position: relative;
        .form-file {
            position: absolute;
            left: 0;
            top: 0;
            z-index: 2;
            opacity: 0;
            width: 100%;
            height: 100%;
        }
        .file-name {
            border: 1px solid #ddd;
            width: 100%;
            height: 42px;
            display: inline-block;
            vertical-align: top;
        }
    }
    
`