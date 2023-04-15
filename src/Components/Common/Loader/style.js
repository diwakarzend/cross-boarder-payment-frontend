import styled from "styled-components";

// Loader Styles !Required!
let spinner_speed = ".675s";
let spinner_radius = "80%";
let spinner_fill_radius = "90px";

let spinner_size = 50;
let spinner_thickness = 10;
let spinner_inner_circle = spinner_size - spinner_thickness;
let spinner_color_alpha = "rgba(240, 18, 0, 0.1)";
let spinner_color = "rgba(240, 18, 0)";
let spinner_bg = "rgba(1, 80, 143, .01)";
let spinner_inner_bg = "#fff";

export const Wrapper = styled.div`
  padding: 10px;
  .spin-loader {
    border-radius: 80%;
    display: block;
    height: ${spinner_size + "px"};
    width: ${spinner_size + "px"};
    position: relative;
    animation: spin ${spinner_speed} linear 0s infinite normal;
    background: ${spinner_bg};

    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
    }

    &:before {
      border-radius: 0 ${spinner_fill_radius} ${spinner_fill_radius} 0;
      height: ${spinner_size + "px"};
      width: 50%;
      top: 0;
      right: 0;
      z-index: 1;
      background-image: linear-gradient(${spinner_color_alpha}, ${spinner_color});
    }

    &:after {
      border-radius: ${spinner_radius};
      height: ${spinner_inner_circle + "px"};
      width: ${spinner_inner_circle + "px"};
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
      background: ${spinner_inner_bg};
    }
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
