import React, { forwardRef } from "react";

import css from "./Textarea.module.scss";

const Textarea = forwardRef(({ full = false, rows = 2, ...props }, ref) => {
  return (
    <textarea
      rows={rows}
      className={`${css.textarea} ${full && css.full}`}
      {...props}
      ref={ref}
    ></textarea>
  );
});

export default Textarea;
