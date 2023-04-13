import React from "react";
import { FooterWrapper } from "./style";

const Footer = () => {
  const d = new Date();
  return (
    <FooterWrapper className="footer flex item-center space-between">
      <span>{d.getFullYear()} © Textagram Pvt. Ltd.</span>
      <span>Design & Developed By Textagram Pvt. Ltd.</span>
    </FooterWrapper>
  );
};

export default Footer;
