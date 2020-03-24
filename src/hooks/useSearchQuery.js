import { useState, useEffect } from "react";
import { getAllItems } from "../api/dirApi";

const useSearchQuery = ({ text }) => {
  const [queryRecords, setQueryRecords] = useState([]);

  useEffect(() => {
    const getFilteredResults = async () => {
      getAllItems().then(data => {
        let records = data.filter(item => {
          let itemName = item.name ?? "";
          console.log("Item Name - ", itemName);
          console.log("text - ", text);
          return itemName.includes(text);
        });
        setQueryRecords(records);
      });
    };
    getFilteredResults();
  }, [text]);

  return {
    filteredItems: queryRecords
  };
};

export default useSearchQuery;
