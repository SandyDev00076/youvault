import { useEffect, useState } from "react";
import { getAll } from "../api/directory.Api";

const useSearchQuery = ({ query = "" }) => {
  const [result, setResult] = useState([]);
  useEffect(() => {
    async function getAllRecords() {
      try {
        const everything = await getAll();
        let result = everything
          .filter((item) =>
            item.name.toLowerCase().contains(query.toLowerCase())
          )
          .map((item) => {
            return {
              name: item.name,
              idToGoto: item.type === "folder" ? item.id : item.parent,
              type: item.type,
            };
          });
        setResult(result);
      } catch (e) {
        console.log("Something went wrong while fetching everything");
        console.error(e);
      }
    }
    if (query !== "") getAllRecords();
    else setResult([]);
  }, [query]);

  return {
    searchResult: result,
  };
};

export default useSearchQuery;
