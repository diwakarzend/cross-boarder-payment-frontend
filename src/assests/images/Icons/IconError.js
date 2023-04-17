import React from "react";

function IconError(props) {
  return (
    <svg width="15" viewBox="0 0 15 15" {...props}>
      <defs>
        <style>{`.icon-error-1{fill:#ed1c24;}.icon-error-2{fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;}`}</style>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <g id="Error">
            <circle cx="7.5" cy="7.5" r="7.5" className="icon-error-1"></circle>
            <path d="M4.35 10.65L10.65 4.35" className="icon-error-2"></path>
            <path d="M10.65 10.65L4.35 4.35" className="icon-error-2"></path>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default IconError;
