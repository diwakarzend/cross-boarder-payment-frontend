import styled from "styled-components";
import theme from "./theme";

const themeName = "admin";

export const Text = styled.div`
  ${({ size }) =>
    size &&
    `
    font-size: ${theme[themeName].font.fontSize[size]};
    line-height: ${theme[themeName].font.lineHeight[size]};
    @media (max-width: 1400px) {
      font-size: ${
        theme[themeName].font.fontSize[
          size == "xxxl" ? "xxl" : size == "xxl" ? "xl" : ["md", "rg"].includes(size) ? "sm" : size
        ]
      };
      line-height: ${
        theme[themeName].font.lineHeight[size == "xxxl" ? "xxl" : ["md", "rg"].includes(size) ? "sm" : size]
      };
    }
  `}
  color: ${(props) => (props.color ? theme[themeName].color[props.color] : theme[themeName].color.color6)};
  font-weight: ${(props) =>
    props.fw ? theme[themeName].font.fontWeight[props.fw] : theme[themeName].font.fontWeight.regular};
`;

export const MaterialInputWrapper = styled.div`
  position: relative;
  flex: 1;
  .form-item {
    position: relative;
  }
  &.without-icon {
    .item-text,
    .item-text + .item-label-wrapper,
    .item-textarea,
    .item-textarea + .item-label-wrapper,
    .item-select + .item-label-wrapper,
    .item-select .select__control .select__value-container {
      padding-left: 20px;
    }
    .item-text:focus + .item-label-wrapper .item-label,
    .item-text.has-value ~ .item-label-wrapper .item-label,
    .item-text.has-file ~ .item-label-wrapper .item-label,
    .item-text:not([value=""]) + .item-label-wrapper .item-label,
    .item-select.focused + .item-label-wrapper .item-label,
    .item-select.has-value + .item-label-wrapper .item-label {
    //   transform: translate(0, -22px);
    }
    .item-textarea:focus + .item-label-wrapper .item-label,
    .item-textarea:not([value=""]) + .item-label-wrapper .item-label {
      transform: translate(0, -52px);
    }
  }

  .item-text {
    width: 100%;
    height: 60px;
    background-color: ${theme[themeName].color.color7};
    border: none;
    border-bottom: 1px solid ${theme[themeName].color.color2};
    border-radius: 4px;
    padding: 30px 0 5px 53px;
    font-size: 15px;
    color: ${theme[themeName].color.color3};
    &.has-file {
      padding-right: 70px;
    }
    & + .item-label-wrapper {
      position: absolute;
      background-color: transparent;
      pointer-events: none;
      display: flex;
      align-items: center;
      padding: 5px 16px 5px 20px;
      white-space: nowrap;
      top: 0px;
      .item-label {
        font-size: 12px;
        transform: translate(0, 0);
        transition: all 300ms;
        color: ${theme[themeName].color.color1};
      }
      .item-icon {
        position: absolute;
        left: 20px;
        top: 30px;
        width: 100%;
        height: 100%;
      }
    }
    &:hover {
      border-color: ${theme[themeName].color.color2};
    }
    &:focus,
    &:not([value=""]) {
      border-color: ${theme[themeName].color.color2};
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.13);
      & + .item-label-wrapper {
        .item-label {
          font-size: 12px;
          /* transform: translate(-40px, -31px); */
        //   transform: translate(-40px, -22px);
          // line-height: 25px;
          padding: 0;
          &:before {
            content: "";
            position: absolute;
            left: 0;
            top: 13px;
            width: 100%;
            height: 2px;
            background-color: #f7f8f9;
            z-index: -1;
          }
        }
      }
    }
  }
  .item-textarea {
    width: 100%;
    height: 96px;
    background-color: ${theme[themeName].color.color7};
    border: 1px solid ${theme[themeName].color.color5};
    border-radius: 4px;
    padding: 5px 16px 5px 56px;
    font-size: 14px;
    color: ${theme[themeName].color.color1};
    & + .item-label-wrapper {
      position: absolute;
      top: 0;
      background-color: transparent;
      pointer-events: none;
      display: flex;
      align-items: center;
      padding: 5px 16px 5px 20px;
      white-space: nowrap;
      .item-label {
        font-size: 12px;
        transform: translate(0, -36px);
        transition: all 300ms;
        color: ${theme[themeName].color.color5};
      }
      .item-icon {
        position: absolute;
        left: 20px;
        top: 30px;
        width: 100%;
        height: 100%;
        display: flex;
      }
    }
    &:focus,
    &:not([value=""]) {
      border-color: ${theme[themeName].color.color2};
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.13);
      & + .item-label-wrapper {
        .item-label {
          font-size: 12px;
          transform: translate(-40px, -61px);
          // line-height: 25px;
          padding: 0px;
          &:before {
            content: "";
            position: absolute;
            left: 0;
            top: 13px;
            width: 100%;
            height: 2px;
            background-color: #f7f8f9;
            z-index: -1;
          }
        }
      }
    }
  }
  .item-select {
    .select__control {
      width: 100%;
      min-height: 60px;
      border-radius: 4px;
      background-color: ${theme[themeName].color.color7};
      border: none;
      border-bottom: 1px solid ${theme[themeName].color.color5};
      box-shadow: none;
      color: ${theme[themeName].color.color1};
      &:hover,
      .select__control--menu-is-open {
        border-color: ${theme[themeName].color.color2};
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.13);
      }
      .select__indicator-separator {
        display: none;
      }
      .select__value-container {
        padding-left: 56px;
        font-size: 14px;
      }
    }
    & + .item-label-wrapper {
      position: absolute;
      top: 0;
      background-color: transparent;
      pointer-events: none;
      display: flex;
      align-items: center;
      padding: 5px 16px 5px 20px;
      white-space: nowrap;
      .item-label {
        font-size: 12px;
        transform: translate(0, 0);
        transition: all 300ms;
        color: ${theme[themeName].color.color1};
      }
      .item-icon {
        position: absolute;
        left: 20px;
        top: 30px;
        width: 100%;
        height: 100%;
        display: flex;
      }
    }
    &.focused,
    &.has-value {
      .select__control {
        border-color: ${theme[themeName].color.color2};
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.13);
      }
      & + .item-label-wrapper {
        .item-label {
          font-size: 12px;
          transform: translate(0px, 0px);
          // line-height: 25px;
          padding: 0px;
          &:before {
            content: "";
            position: absolute;
            left: 0;
            top: 13px;
            width: 100%;
            height: 2px;
            background-color: #f7f8f9;
            z-index: -1;
          }
        }
      }
    }
    .select__option {
      padding: 8px 20px;
      font-size: 14px;
      color: ${theme[themeName].color.color1};
      text-transform: capitalize;
      &.select__option--is-focused {
        background-color: ${theme[themeName].color.color14};
      }
      &.select__option--is-selected {
        background-color: rgb(0, 90, 163, 0.6);
        color: ${theme[themeName].color.color7};
      }
    }
  }
  .form-date {
    .item-label-wrapper {
      position: absolute;
      background-color: transparent;
      pointer-events: none;
      display: flex;
      align-items: center;
      padding: 5px 16px 5px 20px;
      white-space: nowrap;
      top:0;
      .item-label {
        font-size: 12px;
        transform: translate(0, 0);
        transition: all 300ms;
        color: ${theme[themeName].color.color1};
      }
      .item-icon {
        position: absolute;
        left: 20px;
        top: 30px;
        width: 100%;
        height: 100%;
        display: flex;
      }
    }
    &.focused,
    &.has-value {
      .item-label-wrapper {
        .item-label {
          font-size: 12px;
          transform: translate(0px, 0px);
          // line-height: 25px;
          padding: 0px;
          &:before {
            content: "";
            position: absolute;
            left: 0;
            top: 13px;
            width: 100%;
            height: 2px;
            background-color: #f7f8f9;
            z-index: -1;
          }
        }
      }
    }
  }
  .item-file {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    & ~ .remove-file {
      position: absolute;
      right: 10px;
      top: 14px;
      cursor: pointer;
    }
    & ~ .file-loader {
      position: absolute;
      right: 0;
      top: -15px;
      transform: scale(0.5);
    }
  }
`;

export const CheckFieldWrapper = styled.div`
  .form-item {
    position: relative;
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .item-check {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    &:checked {
      & ~ .checkmark {
        background-color: #2ac940;
        border-color: #2ac940;
        &:after {
          display: block;
        }
      }
    }
  }
  .checkmark {
    position: relative;
    height: 16px;
    width: 16px;
    border: 1px solid #828282;
    border-radius: 2px;
    background-color: ${theme[themeName].color.color7};
    &:after {
      content: "";
      display: none;
      position: absolute;
      left: 0;
      top: -3px;
      right: 0;
      bottom: 0;
      margin: auto;
      width: 4px;
      height: 8px;
      border: solid white;
      border-width: 0 2px 2px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
`;

export const ButtonSolid = styled.button`
  width: ${({ width }) => width || "auto"};
  padding: 0 15px;
  border: none;
  font-family: ${theme[themeName].font.fontFamily.poppins};
  font-weight: ${theme[themeName].font.fontWeight.semiBold};
  padding: 0 20px;
  cursor: pointer;
  ${({ primary }) =>
    primary &&
    `
  color: ${theme[themeName].button.solid.primary.color};
  background-color: ${theme[themeName].button.solid.primary.bgColor};
  `}
  ${({ secondary }) =>
  secondary &&
    `
  color: ${theme[themeName].button.solid.secondary.color};
  background-color: ${theme[themeName].button.solid.secondary.bgColor};
  `}
  ${({ disabled }) =>
    disabled &&
    `
  color: ${theme[themeName].button.solid.disabled.color};
  background-color: ${theme[themeName].button.solid.disabled.bgColor};
  cursor: not-allowed;
  `}
  ${({ xl }) =>
    xl &&
    `
    height: ${theme[themeName].button.height.xl};
    font-size: ${theme[themeName].button.fontSize.xl};
  `}
  ${({ lg }) =>
    lg &&
    `
    height: ${theme[themeName].button.height.lg};
    border-radius: ${theme[themeName].button.rounded.lg};
    font-size: ${theme[themeName].button.fontSize.lg};
  `}
  ${({ md }) =>
    md &&
    `
    height: ${theme[themeName].button.height.md};
    border-radius: ${theme[themeName].button.rounded.md};
    font-size: ${theme[themeName].button.fontSize.md};
  `}
  ${({ rg }) =>
    rg &&
    `
    height: ${theme[themeName].button.height.rg};
    border-radius: ${theme[themeName].button.rounded.rg};
    font-size: ${theme[themeName].button.fontSize.rg};
  `}
`;

export const ButtonOutline = styled.button`
  width: ${(props) => (props.width ? props.width : "auto")};
  padding: 0 15px;
  border: 1px solid currentColor;
  text-transform: uppercase;
  font-family: ${theme[themeName].font.fontFamily.poppins};
  font-weight: ${theme[themeName].font.fontWeight.semiBold};
  cursor: pointer;
  ${({ primary }) =>
    primary &&
    `
  color: ${theme[themeName].button.outline.primary.color};
  background-color: ${theme[themeName].button.outline.primary.bgColor};
  `}
  ${({ disabled }) =>
    disabled &&
    `
  color: ${theme[themeName].button.outline.disabled.color};
  background-color: ${theme[themeName].button.outline.disabled.bgColor};
  cursor: not-allowed;
  `}
  ${({ xl }) =>
    xl &&
    `
    height: ${theme[themeName].button.height.xl};
    border-radius: ${theme[themeName].button.rounded.xl};
    font-size: ${theme[themeName].button.fontSize.xl};
  `}
  ${({ lg }) =>
    lg &&
    `
    height: ${theme[themeName].button.height.lg};
    border-radius: ${theme[themeName].button.rounded.lg};
    font-size: ${theme[themeName].button.fontSize.lg};
  `}
  ${({ md }) =>
    md &&
    `
    height: ${theme[themeName].button.height.md};
    border-radius: ${theme[themeName].button.rounded.md};
    font-size: ${theme[themeName].button.fontSize.md};
  `}
  ${({ rg }) =>
    rg &&
    `
    height: ${theme[themeName].button.height.rg};
    border-radius: ${theme[themeName].button.rounded.rg};
    font-size: ${theme[themeName].button.fontSize.rg};
  `}
`;

export const Heading = styled.h1`
  ${({ size }) =>
    size &&
    `
    font-size: ${theme[themeName].font.fontSize[size]};
    line-height: ${theme[themeName].font.lineHeight[size]};
    @media (max-width: 1400px) {
      font-size: ${theme[themeName].font.fontSize[size == "xxxl" ? "xxl" : size == "xxl" ? "xl" : size]};
      line-height: ${theme[themeName].font.lineHeight[size == "xxxl" ? "xxl" : size == "xxl" ? "xl" : size]};
    }
  `}
  color: ${(props) => (props.color ? theme[themeName].color[props.color] : theme[themeName].color.color8)};
  font-weight: ${(props) =>
    props.fw ? theme[themeName].font.fontWeight[props.fw] : theme[themeName].font.fontWeight.medium};
`;

export const TableWarpper = styled.div`
  position: relative;
  overflow: auto;
  .table {
    width: 100%;
    border-collapse: collapse;
    background-color: ${theme[themeName].color.color7};
    > thead {
      > tr {
        > th {
          background-color: #000;
          padding: 7px 20px;
          & + th {
            border-left: 1px solid rgba(128, 128, 128, 0.17);
          }
          &.sort {
            position: relative;
            padding-right: 30px;
            &:before,
            &:after {
              content: "";
              border-style: solid;
              position: absolute;
              right: 10px;
              border-radius: 5px;
            }
            &:before {
              border-width: 0 6px 6px 6px;
              border-color: transparent transparent #bdbdbd transparent;
              top: calc(50% - 7px);
            }
            &:after {
              border-width: 6px 6px 0 6px;
              border-color: #bdbdbd transparent transparent transparent;
              bottom: calc(50% - 7px);
            }
            &.asc {
              &:before {
                border-bottom-color: #4f4f4f;
              }
            }
            &.desc {
              &:after {
                border-top-color: #4f4f4f;
              }
            }
          }
        }
      }
    }
    > tbody {
      > tr {
        > td {
          padding: 9px 20px;
          border-top: 1px solid rgba(128, 128, 128, 0.17);
          & + td {
            border-left: 1px solid rgba(128, 128, 128, 0.17);
          }
        }
      }
    }
  }
`;

export const IconInactive = styled.i`
  position: relative;
  width: ${({ width }) => (width ? width : "16px")};
  height: ${({ width }) => (width ? width : "16px")};
  border-radius: 50%;
  border: 1px solid ${({ color }) => (color ? theme[themeName].color[color] : theme[themeName].color.color3)};
  &:after {
    content: "";
    width: 1px;
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    background-color: ${({ color }) => (color ? theme[themeName].color[color] : theme[themeName].color.color3)};
    transform: rotate(-45deg);
  }
`;