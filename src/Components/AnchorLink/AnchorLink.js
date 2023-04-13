import React from "react";
import { Link } from "react-router-dom";

const AnchorLink = (props) => {
  const { href, clicked, className } = props;
  return clicked ? (
    <Link
      to={href}
      onClick={(event) => clicked(event, href)}
      className={className}
    >
      {props.children}
    </Link>
  ) : (
    <Link to={href}>{props.children}</Link>
  );
};

export default AnchorLink;
