import { useRef } from "react";

export const INITIATED = "initiated";
export const PENDING = "pending";
export const SUCCESS = "success";
export const FAILED = "failed";

const useFiles = promiseToFetchFiles => {
  const fetchState = useRef(INITIATED);
  const items = useRef([]);

  const fetchData = async () => {
    fetchState.current = PENDING;
    promiseToFetchFiles
      .then(data => {
        items.current = data;
        fetchState.current = SUCCESS;
      })
      .catch(e => {
        console.log(e);
        fetchState.current = FAILED;
      });
  };

  fetchData();

  return {
    items: items.current,
    fetchState: fetchState.current
  };
};

export default useFiles;
