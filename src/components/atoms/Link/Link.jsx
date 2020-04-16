import React from "react";
import { Link } from "react-router-dom";

import css from "./Link.module.scss";

const CLink = ({ to, className = "", ...props }) => {
  return (
    <Link to={to} className={`${className} ${css.link}`} {...props}></Link>
  );
};

export default CLink;
