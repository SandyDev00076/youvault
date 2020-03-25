import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const portalDiv = document.getElementById("portal");

const Portal = ({ children }) => {
  const ele = useRef(document.createElement("div"));

  useEffect(() => {
    const element = ele.current;
    if (!portalDiv) throw new Error("Portal wasn't created successfully!");
    portalDiv.appendChild(element);

    return () => {
      portalDiv.removeChild(element);
    };
  }, []);

  return createPortal(children, ele.current);
};

export default Portal;
