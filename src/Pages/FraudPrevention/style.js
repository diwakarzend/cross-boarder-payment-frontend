import styled from "styled-components"
export const Wrapper = styled.div`

   padding-left: 30px;
   padding-right: 30px;

      .text{
        margin-top:12.8px;
       }
       .table-wrapper{
        margin-top: 14px;
        background-color: #FFE9EA;
        padding: 27px 0 0 27px;
        box-shadow: 0px 1px 2px #00000047;
        opacity: 1;
        cursor: pointer;
        .tabBox.active{
          border-bottom: 3px solid #ED1C24;
          .text-block{
            color: #101010;
           }
           svg{
            path{
              fill:  #ED1C24;
            }
           }
        }
        .text-fraud{
            color: #000000;
            font-size: 20px;
            font-weight: bold;
            font-family: Roboto;
        }
        .tabs-wrapper{
        //  padding-bottom: 15px;
          padding-top: 34px;
        }
        .icon{
          color: #707070;
        }
        .text-block{
          padding-top: 10.5px;
          color: #707070;
          font-size: 13px;
          font-weight: bold;
        }
        .text-block::after{
          border-bottom: 3px solid red;
        }
        
       }
       .tab-container{
        margin-top: 29.5px;
        .searchvalue{
          width: 215px ;
          height: 35px;
          background-color:#FFFFFF ;
          box-shadow: 0px 1px 2px #00000026;
          border: none;
          padding: 9px 0 8px 11px;
        }
        .btn {
          width: 111px;
          height: 35px;
        }
        .file{
           display: none;
        }
        .upload_file{
          width: 677px;
           background: #FFFFFF;
             height: 56px;
           box-shadow: 0px 1px 2px #00000026;
           padding: 16px 13px 21px 21px;
        }
       }



   









`