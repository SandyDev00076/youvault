export const getDirectory = id => {
  let fetchPromise = fetch("http://localhost:3501/data").then(res =>
    res.json()
  );
  return fetchPromise.then(res => res.filter(item => item.parent === id));
};
