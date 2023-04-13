import styled from "styled-components";

export const FormWrapper = styled.form`
  
  .form-control-wrap {
    .input-group {
      max-width: 180px;
      margin-right: 10px;
      position: relative;
      .form-control {
        width: 100%;
        padding-right: 40px;
        border-radius: 4px;
      }
      .input-group-append {
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        z-index: 3;
      }
    }
    .input-group-text {
      background: none;
      border-width: 0;
      color: #555;
      opacity: 0.5;
    }
    select {
      max-width: 180px;
    }
  }
  .no-border {
    border-color: transparent;
  }
  label {
    margin-bottom: 0;
    margin-right: 10px;
  }
  .active {
    color: #06be00;
  }
  .inacive {
    color: #e30514;
  }
  h3 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 15px;
  }
  .label-name {
    font-size: 13px;
  }
  .value {
    font-weight: 700;
  }
  .mapping-details-wrapper {
    overflow: auto;

  }
  .mapping-details{
    border-radius: 4px;
    background-color: var(--ip-topbar-user-bg);
    border: 1px solid rgba(0, 0, 0, 0.125);
  }
  
  .addmore-btn-wrap {
    padding: 16px 0;
    .max-char {
      font-size: 14px;
      margin-left: 10px;
    }
  }
  .message-text {
    margin-left: 50px;
    font-weight: 400;
    color: #0aaaba;
    &.error {
      color: #ff333c;
    }
  }
  .file-control-wrapper {
    position: relative;
    z-index: 2;
    input[type="file"] {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
    }
  }
  .QR-wrap {
  }
  .QR-Image {
    height: 232px;
    width: 300px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input[type="file"] {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      cursor: pointer;
    }
    img {
      max-width: 150px;
      max-height: 150px;
      margin-bottom: 15px;
    }
  }
  .upload {
    text-align: center;
    .fa-upload {
      font-size: 36px;
    }
  }
  .qr-pic {
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
  .center {
    text-align: center;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .themebtn {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ChangeQrWrapper = styled.div`
  max-width: 300px;
  margin: 0 auto;
  .qr-image {
    padding: 24px 0;
    img {
      width: 300px;
      max-width: 100%;
    }
  }
`
