import { useEffect, useState } from "react";
import { getFolders, getFiles } from "../api/directory.Api";

const useFolderDetails = (folderID) => {
  const [folderDetails, setFolderDetails] = useState({});

  function getFolderPath(folders, folderID) {
    let path = [];
    function getPath(folderID) {
      const fol = folders.find((folder) => folder.id === folderID);
      if (!fol.parent) return;
      path.push({
        name: fol.name,
        id: fol.id,
      });
      getPath(fol.parent);
    }
    getPath(folderID);
    return path.reverse();
  }

  useEffect(() => {
    async function getRecords() {
      const folders = await getFolders();
      const currentFolder = folders.find((folder) => folder.id === folderID);
      let folderName = currentFolder.name ?? "Home";
      let description =
        currentFolder.description ?? "No description found for this folder.";
      let folderArray = folders.filter((folder) => folder.parent === folderID);
      let path = getFolderPath(folders, folderID);

      const files = await getFiles();
      let fileArray = files.filter((file) => file.parent === folderID);

      setFolderDetails({
        folderName,
        path,
        description,
        folders: folderArray,
        files: fileArray,
      });
    }
    getRecords();
  }, [folderID]);

  return folderDetails;
};

export default useFolderDetails;
