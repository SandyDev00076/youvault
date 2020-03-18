export const getDirectory = () => {
  return fetch("http://localhost:3501/data").then(res => res.json());
};
