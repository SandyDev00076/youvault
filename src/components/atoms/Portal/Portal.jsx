import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const Portal = ({ children }) => {
  const el = useRef(document.createElement("div"));

  useEffect(() => {
    const portalRoot = document.getElementById("portal");

    const element = el.current;
    if (!portalRoot) {
      throw new Error("Element with id `portal` does not exists in DOM.");
    }
    portalRoot.appendChild(element);

    return () => {
      portalRoot.removeChild(element);
    };
  }, []);

  return ReactDOM.createPortal(children, el.current);
};

export default Portal;
