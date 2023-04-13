import styled from "styled-components";
export const UpiCollectionsStyle = styled.div`
  .wallet-wrapper {
    background: #000 url("/images/dashboard-bg.png") no-repeat right center;
    height: 71px;
    display: flex;
    align-items: center;
    padding: 0 23px;
    border-radius: 20px;
    font-family: "Cabin", Times, serif;
    margin-bottom: 20px;
    .image {
      margin-right: 24px;
    }
    .label {
      color: #8b9ca8;
      font-size: 15px;
      line-height: 18px;
      margin-bottom: 2px;
    }
    .value {
      color: #fff;
      font-size: 20px;
      line-height: 28px;
      margin-bottom: 2px;
    }
    .list {
      align-items: center;
      &:first-child {
        padding-right: 40px;
        margin-right: 40px;
        border-right: 1px dashed #dfdfdf;
      }
      .refresh {
        button {
          background-color: #ff6600;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          margin-left: 36px;
          i {
            color: #fff;
          }
        }
      }
    }
  }
  .filter-table {
    gap: 16px;
    width: 100%;
    .left {
      .border-btn {
        margin-right: 10px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
    .right {
      .form-control {
        background: transparent;
        border: none;
        border-radius: none;
        font-size: 15px;
        height: 40px;
      }
      .form-wrapper {
        height: 40px;
        background-color: #fff;
        border: 1px solid rgba(223, 223, 223, 1);
        border-radius: 20px;
      }
      span {
        color: rgba(139, 156, 168, 0.5);
        font-size: 14px;
      }
      .csv-link {
        width: 31px;
        height: 31px;
        border: 1px solid rgba(8, 91, 81, 1);
        background-color: rgba(12, 136, 121, 1);
        margin-right: 5px;
        color: #fff;
        font-size: 14px;
        &:hover {
          color: #fff;
        }
      }
    }
  }
  .card-title {
    font-size: 20px;
    font-weight: 700;
    color: rgba(6, 49, 81, 1);
    font-family: "Cabin", sans-serif;
  }
  .status-wrap {
    height: 50px;
    align-items: center;
  }
  .status {
    margin-left: 50px;
    span {
      padding-left: 16px;
      font-size: 14px;
      font-weight: 500;
      color: #000;
      font-family: "Cabin", sans-serif;
      position: relative;
      padding-right: 22px;
      margin-right: 22px;
      border-right: 1px solid rgba(0, 0, 0, 0.05);
      :last-child {
        padding-right: 0;
        margin-right: 0;
        border-right: none;
      }
      &:before {
        content: "";
        width: 11px;
        height: 11px;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
      }
      &.upi {
        &:before {
          background-color: rgba(255, 102, 0, 1);
        }
      }
      &.QR {
        &:before {
          background-color: rgba(12, 136, 121, 1);
        }
      }
      &.NEFT {
        &:before {
          background-color: #ffba33;
        }
      }
      &.RTGS {
        &:before {
          background-color: #7832e6;
        }
      }
    }
  }
  .upi-n-qr-collection {
    padding: 20px 24px;
    flex-wrap: wrap;

    > .flex {
      width: 100%;
      justify-content: space-between;
      padding: 0 10px;
      margin-bottom: 20px;
      .primary-btn {
        margin-right: 40px;
      }
      .form-control {
        height: 40px;
        background-color: #fff;
        border: 1px solid rgba(223, 223, 223, 1);
        border-radius: 20px;
        font-size: 14px;
        width: 250px;
        font-weight: 500;
        font-family: "Cabin", sans-serif;
      }
    }
  }
  .chart-container {
    width: calc(100% - 285px);
    img {
      width: 100%;
    }
  }
  .right-container {
    width: 100%;
    max-width: 285px;
    .collection-info {
      &:nth-child(3),
      &:nth-child(4) {
        margin-bottom: 0;
      }
    }
  }
  .container-pie-chart {
    div {
      max-width: 100%;
      max-height: 290px;
    }
    img,
    svg {
      width: 100%;
      max-height: 290px;
    }
  }
  .collection-info-wrapper {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    width: 100%;
  }
  .collection-info {
    padding: 14px 20px;
    border-radius: 10px 10px 0 10px;
    margin-bottom: 2px;
    display: flex;
    width: 124px;
    max-width: 48%;
    height: 140px;
    background: rgba(250, 250, 250, 1);
    border: 1px solid rgba(223, 223, 223, 1);
    margin-bottom: 10px;
    margin-left: 10px;
    font-size: "Cabin", sans-serif;
    &:hover,
    &.active {
      background: transparent
        linear-gradient(
          219deg,
          rgba(12, 136, 121, 1) 0%,
          rgba(105, 44, 255, 1) 100%
        )
        0% 0% no-repeat padding-box;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.17);
      color: #fff;
      .info-left {
        strong {
          color: #fff;
        }
      }
    }
    &.info {
      width: 24%;
      height: 70px;
      margin-bottom: 40px;
    }
    .info-left {
      flex: 1;
      align-items: flex-start;
      flex-direction: column;
      justify-content: center;
      .image {
        height: 38px;
        margin-bottom: 20px;
      }
      strong {
        font-size: 14px;
        font-weight: 500;
        color: #063151;
      }
      .text {
        display: flex;
        align-items: center;
        font-size: 15px;
        line-height: 18px;
        margin-bottom: 6px;
      }
    }
  }
  .container-pie-chart {
    margin: 0 auto;
    max-width: 100%;
    canvas {
      max-height: 260px;
      max-width: 400px;
    }
    .pie-direct {
      width: 100%;
      max-width: 180px;
      .total {
        background-color: #fafafa;
        border-radius: 5px;
        margin-bottom: 3px;
        padding: 10px 12px;
        color: #000;
        span {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          margin-right: 8px;
        }
        &.tranction {
          span {
            background-color: #692cff;
          }
        }
        &.amount {
          span {
            background-color: #2a9cdb;
          }
        }
        &.synced {
          span {
            background-color: #f7b84b;
          }
        }
        &.credited {
          span {
            background-color: #d92650;
          }
        }
      }
    }
  }
  .csv-link {
    width: 39px;
    height: 39px;
    border-radius: 50%;
    background-color: #eaeef2;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #aaa;
    font-size: 20px;
    transition: all 500ms ease-in-out;
    &:hover {
      background-color: rgb(41, 156, 219, 0.4);
      color: rgb(41, 156, 219, 0.8);
    }
  }
`;
