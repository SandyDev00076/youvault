export const getDirectory = id => {
  let fetchPromise = fetch("http://localhost:3501/data").then(res =>
    res.json()
  );
  return fetchPromise.then(res => res.filter(item => item.parent === id));
};

export const getPath = async id => {
  let allItems = await getDirectory("/");
  let fullPath = [];

  function getParent(idToFind) {
    if (idToFind === "/") {
      fullPath.push({
        id: "/",
        name: "Home"
      });
      return;
    }
    let currFolder = allItems.find(item => item.id === idToFind);
    fullPath.push({
      id: currFolder.id,
      name: currFolder.name
    });
    getParent(currFolder.parent);
  }
  getParent(id);

  return fullPath.reverse();
};
