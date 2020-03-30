import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useFiles from "./useFiles";
import { getAllItems } from "../api/dirApi";

const useCurrentFolder = () => {
  const [folder, setFolder] = useState({});
  const { id } = useParams();
  const { items } = useFiles(getAllItems());

  useEffect(() => {
    const folderToFind = items.find(item => item.id === id);
    if (folderToFind) setFolder(folderToFind);
  }, [id, items]);

  return {
    folder
  };
};

export default useCurrentFolder;
