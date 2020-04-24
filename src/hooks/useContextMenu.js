import { useState } from "react";

const useContextMenu = () => {
  const [contextMenu, setContextMenu] = useState(() => {
    return {
      x: null,
      y: null,
    };
  });

  function openContextMenu(evt) {
    evt.preventDefault();
    setContextMenu({
      x: evt.clientX,
      y: evt.clientY,
    });
  }

  function closeContextMenu() {
    setContextMenu(null);
  }

  return {
    showMenu: contextMenu.x && contextMenu.y ? true : false,
    xCoord: contextMenu.x,
    yCoord: contextMenu.y,
    openContextMenu,
    closeContextMenu,
  };
};
