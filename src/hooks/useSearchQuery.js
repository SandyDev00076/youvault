import { useEffect, useState } from "react";
import { getAll } from "../api/directory.Api";

const useSearchQuery = ({
  query = "",
  filesOnly = false,
  foldersOnly = false,
}) => {
  const [result, setResult] = useState([]);
  useEffect(() => {
    async function getAllRecords() {
      try {
        const everything = await getAll();
        let result = [];
        if (!filesOnly && !foldersOnly) {
          result = everything
            .filter((item) => {
              let itemName = item.name ?? "";
              return itemName.toLowerCase().includes(query.toLowerCase());
            })
            .map((item) => {
              return {
                name: item.name,
                idToGoto: item.type === "folder" ? item.id : item.parent,
                type: item.type,
              };
            });
        } else if (foldersOnly) {
          // folders only
          result = everything.filter((item) => {
            let itemName = item.name ?? "";
            return (
              itemName.toLowerCase().includes(query.toLowerCase()) &&
              item.type === "folder"
            );
          });
        } else {
          // files only
          result = everything.filter((item) => {
            let itemName = item.name ?? "";
            return (
              itemName.toLowerCase().includes(query.toLowerCase()) &&
              item.type !== "folder"
            );
          });
        }
        setResult(result);
      } catch (e) {
        console.log("Something went wrong while fetching everything");
        console.error(e);
      }
    }
    if (query !== "") getAllRecords();
  }, [filesOnly, foldersOnly, query]);

  return {
    searchResult: query !== "" ? result : [],
  };
};

export default useSearchQuery;
