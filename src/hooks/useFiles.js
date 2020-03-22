import { useState } from "react";

export const INITIATED = "initiated";
export const PENDING = "pending";
export const SUCCESS = "success";
export const FAILED = "failed";

const useFiles = promiseToFetchFiles => {
  const [result, setResult] = useState({
    items: [],
    fetchState: INITIATED
  });

  useState(() => {
    const fetchData = async () => {
      let result = {
        items: [],
        fetchState: PENDING
      };
      promiseToFetchFiles
        .then(data => {
          result.items = data;
          result.fetchState = SUCCESS;
          setResult(result);
        })
        .catch(e => {
          console.log(e);
          result.fetchState = FAILED;
          setResult(result);
        });
    };
    fetchData();
  }, []);

  return result;
};

export default useFiles;
