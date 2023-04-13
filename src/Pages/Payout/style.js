import styled from "styled-components";

export const DetailsWrapper = styled.div`
  .flex {
    display: flex;
    gap: 20px;
    margin-bottom: 10px;
  }
  .label-name {
    font-weight: bold;
    min-width: 120px;
  }
  h5 {
    margin: 0;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .credited, .synced {
    text-transform: uppercase;
  }
  .credited {
    color: rgb(64,81,137);
  }
  .synced {
    color: rgb(247,184,75);
  }
  
  .modal{ 
    width: 465px;
    max-width: 100%;
    .modal-body{
      max-height: calc(100vh - 235px);
      overflow: auto;
    }
  }
  .loader{
    max-width: 40px;
  }
`;

export const Title = styled.div`
  color:#063151;
  font-Size:15px;
  font-weight: bold;
  margin-bottom: 10px;
  position: relative;
  margin-top: 23px;
  padding-right: 10px;
  &::after{
    content: '';
    height: 1px;
    width: 100%;
    border-bottom: 1px dashed #0000001A;
    position:absolute;
    top:50%;
    transform: translateY(-50%);
    left: 0;

  }
  span{
    background-color: #fff;
    position: relative;
    z-index: 2;
  }
`
export const FilterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  position: relative;
  .form-group {
    flex: 0 0 240px;
    margin-left: 20px;
    margin-top: 20px;
    margin-bottom: 0;
  }
  .form-action {
    .btn-common {
      margin-left: 20px;
    }
  }
  
`;
