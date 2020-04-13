import { useEffect, useState } from "react";
import { getFolders, getFiles } from "../api/directory.Api";

const useFolderDetails = (folderID) => {
  const [folderDetails, setFolderDetails] = useState({});

  useEffect(() => {
    async function getRecords() {
      let path = [];

      const folders = await getFolders();
      const currentFolder = folders.find((folder) => folder.id === folderID);
      let description =
        currentFolder.description ?? "No description found for this folder.";
      let folderArray = folders.filter((folder) => folder.parent === folderID);

      const files = await getFiles();
      let fileArray = files.filter((file) => file.parent === folderID);

      setFolderDetails({
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
