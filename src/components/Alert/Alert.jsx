import React, { useEffect, useState, useRef } from "react";

import css from "./Alert.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DURATION = 4000;

const Alert = ({ success = false, error = false, msg = null }) => {
  const [showAlert, setAlert] = useState(() => false);
  const timerId = useRef(null);

  useEffect(() => {
    // clear if there was any existing timeout
    if (timerId.current) window.clearTimeout(timerId.current);
    setAlert(true);
    timerId.current = window.setTimeout(() => {
      setAlert(false);
    }, DURATION);
  }, [msg]);

  if (msg && showAlert)
    return (
      <div className={`${success && css.success} ${error && css.error}`}>
        <FontAwesomeIcon
          icon={success ? "check-circle" : "exclamation-circle"}
          className={css.alertIcon}
        />
        {msg}
      </div>
    );
  return null;
};

export default Alert;
