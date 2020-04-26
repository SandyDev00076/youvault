import React, { forwardRef } from "react";

import css from "./Input.module.scss";

const Input = forwardRef(({ className = "", ...props }, ref) => {
  return <input className={`${css.input} ${className}`} ref={ref} {...props} />;
});

export default Input;
