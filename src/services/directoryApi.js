import uniqid from "uniqid";

export const getRootDir = () => {
  return JSON.parse(localStorage.getItem("almanac")) ?? [];
};

export const setRootDir = items => {
  localStorage.setItem("almanac", JSON.stringify(items));
};

export const getDir = id => {
  const dirItems = getRootDir().filter(item => item.parent === id);
  return dirItems;
};

export const addItem = item => {
  let rootItems = getRootDir();
  rootItems.push({
    id: uniqid("alamanac-"),
    ...item
  });
  setRootDir(rootItems);
};

export const delItem = id => {
  let dirItems = getRootDir();
  dirItems.splice(
    dirItems.findIndex(item => item.id === id),
    1
  );
  setRootDir(dirItems);
};
