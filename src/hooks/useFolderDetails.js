import { useEffect, useState } from "react";
import { getFolders, getFiles } from "../api/directory.Api";

const useFolderDetails = (folderID) => {
  const [folderDetails, setFolderDetails] = useState({
    folders: [],
    files: [],
    description: "",
    path: [],
    folderName: "",
  });

  function getFolderPath(folders, folderID) {
    let path = [];
    function getPath(id) {
      // find parent of folder with folderID.
      const folderParentID = folders.find((folder) => folder.id === id).parent;
      // find parent folder name
      const folderParentName = folders.find(
        (folder) => folder.id === folderParentID
      ).name;
      path.push({
        name: folderParentName,
        id: folderParentID,
      });
      if (folderParentID === "/") return;
      getPath(folderParentID);
    }
    // if folderID passed is HOME
    if (folderID === "/") return [];
    getPath(folderID);
    return path.reverse();
  }

  useEffect(() => {
    async function getRecords() {
      const folders = await getFolders();
      const currentFolder = folders.find((folder) => folder.id === folderID);
      let folderName = currentFolder.name ?? "Home";
      let description = currentFolder.description ?? "--";
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
