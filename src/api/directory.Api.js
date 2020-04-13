const serverPort = 3501;
const API_URL = `http://localhost:${serverPort}/data`;

export const getAll = async () => {
  const records = await fetch(API_URL).then((res) => res.json());
  return records;
};

export const getFolders = async () => {
  const records = await fetch(API_URL)
    .then((res) => res.json())
    .then((res) => res.filter((item) => item.type === "folder"));
  return records;
};

export const getFiles = async () => {
  const records = await fetch(API_URL)
    .then((res) => res.json())
    .then((res) => res.filter((item) => item.type !== "folder"));
  return records;
};
