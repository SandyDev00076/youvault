import { useEffect, useState } from "react";
import { getFolders, getFiles } from "../api/directory.Api";

const useFolderDetails = (folderID, { fileType = "" }) => {
  const [folderDetails, setFolderDetails] = useState({
    folders: [],
    files: [],
    description: "",
    path: [],
    folderName: "",
    fileTypes: [],
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

      let set = new Set();
      set.add(""); // for All option
      fileArray.forEach((file) => set.add(file.type));
      let fileTypeArray = Array.from(set);

      if (fileType !== "")
        fileArray = fileArray.filter((file) => file.type === fileType);

      setFolderDetails({
        folderName,
        path,
        description,
        folders: folderArray,
        files: fileArray,
        fileTypes: fileTypeArray,
      });
    }
    getRecords();
  }, [fileType, folderID]);

  return folderDetails;
};

export default useFolderDetails;
