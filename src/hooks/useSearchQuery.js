import { useEffect, useRef } from "react";
import { getAllItems } from "../api/dirApi";

const useSearchQuery = ({ text = "" }) => {
  const searchRecords = useRef("");

  useEffect(() => {
    async function fetchData() {
      try {
        const records = await getAllItems();
        searchRecords.current = records.filter(item =>
          item.name.toLowerCase().includes(text.toLowerCase())
        );
      } catch (e) {
        console.log(e);
      } finally {
      }
    }
    fetchData();
  }, [text]);

  if (!text)
    return {
      filteredItems: []
    };

  return {
    filteredItems: searchRecords.current
  };
};

export default useSearchQuery;
