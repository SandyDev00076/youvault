import { useState } from "react";
import { getPath } from "../api/dirApi";

const useFolderPath = id => {
  const [fullPath, setFullPath] = useState([]);

  useState(() => {
    async function getFolderPath(idToSet) {
      getPath(idToSet).then(data => setFullPath(data));
    }
    getFolderPath(id);
  }, []);

  return {
    fullPath
  };
};

export default useFolderPath;
