import React, { forwardRef } from "react";

import css from "./Input.module.scss";

const Input = forwardRef(({ full = false, ...props }, ref) => {
  return (
    <input
      className={`${css.input} ${full && css.full}`}
      {...props}
      ref={ref}
    ></input>
  );
});

export default Input;
