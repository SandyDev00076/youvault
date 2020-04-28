import React, { forwardRef } from "react";

import css from "./TextArea.module.scss";

const TextArea = forwardRef(({ className = "", rows = 2, ...props }, ref) => {
  return (
    <textarea
      className={`${css.textarea} ${className}`}
      ref={ref}
      {...props}
      rows={rows}
    ></textarea>
  );
});

export default TextArea;
