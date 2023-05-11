import React from "react";
import { FooterWrapper } from "./style";

const Footer = () => {
  const d = new Date();
  return (
    <FooterWrapper className="footer flex item-center space-between">
      <span>© {d.getFullYear()} 2023 · Terms of use · Privacy policy</span>
    </FooterWrapper>
  );
};

export default Footer;
