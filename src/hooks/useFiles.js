import { useState } from "react";

export const INITIATED = "initiated";
export const PENDING = "pending";
export const SUCCESS = "success";
export const FAILED = "failed";

const useFiles = promiseToFetchFiles => {
  const [items, setItems] = useState([]);
  const [fetchState, setFetchState] = useState(INITIATED);

  useState(() => {
    const fetchData = async () => {
      setFetchState(PENDING);
      promiseToFetchFiles
        .then(data => {
          setItems(data);
          setFetchState(SUCCESS);
        })
        .catch(e => {
          console.log(e);
          setFetchState(FAILED);
        });
    };
    fetchData();
  }, []);

  return {
    items,
    fetchState
  };
};

export default useFiles;
