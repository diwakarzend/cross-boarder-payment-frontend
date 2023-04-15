import React from "react";
import { Wrapper } from "./style";

export default function Loader({ className = "" }) {
  return (
    <Wrapper className={`${className} flex flex-center justify-center`} aria-hidden="true">
      <div className="spin-loader" aria-hidden="true"></div>
    </Wrapper>
  );
}
