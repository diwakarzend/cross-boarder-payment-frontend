import styled from "styled-components";

export const pagination = styled.div`
  display: flex;
  align-items: center;
  .next-btn,
  .prev-btn {
    width: 30px;
    height: 30px;
    position: relative;
    cursor: pointer;
    border: none;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.17);
    color: #333;
    &.disabled {
      cursor: not-allowed;
      /* color: #e8e8e8; */
    }
  }

  .next-btn {
    margin-left: 24px;
    &:before {
      content: "";
      position: absolute;
      width: 8px;
      height: 8px;
      transform: rotate(45deg);
      left: 0;
      right: 4px;
      top: 0;
      bottom: 0;
      margin: auto;
      border-right: 1px solid currentColor;
      border-top: 1px solid currentColor;
    }
  }
  .prev-btn {
    margin-right: 24px;
    &:before {
      content: "";
      position: absolute;
      width: 8px;
      height: 8px;
      transform: rotate(45deg);
      left: 4px;
      top: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      border-left: 1px solid currentColor;
      border-bottom: 1px solid currentColor;
    }
  }
  .pagination-nav {
    width: 30px;
    height: 30px;
    border: none;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.17);
    color: #333;
    text-align: center;
    margin: 0 6px;
    cursor: pointer;
    &.active {
      box-shadow: 0 2px 4px 0 rgba(199, 199, 199, 0.5);
      background-color: #005aa3;
      color: #fff;
    }
    &.disabled {
      cursor: not-allowed;
      background: transparent;
    }
  }
  .threeLine {
    color: #333;
    font-size: 16px;
    padding-left: 2px;
    .pagination-nav {
      margin-left: 3px;
    }
  }
`;
