import { useEffect, useCallback, useRef, useMemo } from "react";

export const INITIATED = "initiated";
export const PENDING = "pending";
export const SUCCESS = "success";
export const FAILED = "failed";

const useFiles = promiseToFetchFiles => {
  const fetchState = useRef(INITIATED);
  const items = useRef([]);

  useEffect(() => {
    async function fetchData() {
      try {
        fetchState.current = PENDING;
        items.current = await promiseToFetchFiles;
        console.log("here");
      } catch (e) {
        fetchState.current = FAILED;
      }
    }
    fetchData();
  }, [promiseToFetchFiles]);

  console.log("and here");
  return {
    items: items.current,
    fetchState: fetchState.current
  };
};

export default useFiles;
