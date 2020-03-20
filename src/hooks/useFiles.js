import { useState, useEffect } from "react";

export const INITIATED = "initiated";
export const PENDING = "pending";
export const SUCCESS = "success";
export const FAILED = "failed";

const useFiles = promiseToFetchFiles => {
  const [fetchState, setFetchState] = useState(INITIATED);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setFetchState(PENDING);
    promiseToFetchFiles
      .then(data => {
        setItems(data);
        setFetchState(SUCCESS);
      })
      .catch(() => {
        setFetchState(FAILED);
      });
  }, [promiseToFetchFiles]);

  return {
    items,
    fetchState
  };
};

export default useFiles;
