import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-bottom: 30px;
    .pdf-btn-wrap{
        background-color: rgba(0,0,0,.9);
        height: 30px;
        border-radius: 5px;
        width: 100%;
        padding: 0 15px;
        height: 50px;
        margin-bottom: 30px;
        font-size: 18px;
        color: #fff;
        button{
            background: none;
            border:none;
            color: #fff;
            font-size: 16px;
            &:disabled{
                opacity: .6;
            }
        }
        .next-prev{
            width: 80px;
        }
        .download-wrap{
            width: 80px;
        }
        .download{
            z-index: 2;
            font-size: 16px;
            a{
                color: #fff;
            }
        }
    }
    .container{ 
        position: relative;
        padding-top:90px;
        .box{
            position: absolute;
            top:0;
            left: 0;
            width: 100%;
            margin:0 !important
        }
    }
    
`