import { useEffect, useState } from "react";
import { getAllItems } from "../api/dirApi";

const useSearchQuery = ({ text = "" }) => {
  const [filteredItems, setFilteredRecords] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const records = await getAllItems();
        const recordsToSet = records
          .filter(item => item.name.toLowerCase().includes(text.toLowerCase()))
          .map(item => {
            let parentRecord = records.find(ele => ele.id === item.parent);
            let parentName = parentRecord ? parentRecord.name : "Home";
            const { id, name, type, parent } = item;
            return {
              id,
              name,
              type,
              parent,
              parentName
            };
          });
        setFilteredRecords(recordsToSet);
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
    filteredItems
  };
};

export default useSearchQuery;
