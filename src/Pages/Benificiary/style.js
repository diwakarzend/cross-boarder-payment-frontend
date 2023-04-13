import styled from 'styled-components';

export const Wrapper = styled.div`
    .filter-wrap{
        border:1px solid #8B9CA899;
        width:100%;
        height:40px;
        border-radius: 30px;
        background-color: #fff;
        max-width: 378px;
        overflow: hidden;
        select{
            width: 38%;
            background-color: #F8F8F8;
            border:none;
            border-radius: 30px 0 0 30px;
            padding: 0 20px;
            font-size: 15px;
            font-family: 'Cabin', sans-serif;
            font-weight: 500;
        }
        input{
            width: 48%;
            border:none;
            height: 40px;
            padding: 0 20px;
            font-size: 15px;
            font-weight: 500;
            outline: none;
        }
        button{
            width: 11%;
            background: none;
            text-align: center;
            border:none;
        }
    }
`