export const getLocalStorageItem = (key) =>
  JSON.parse(localStorage.getItem(key));

export const setLocalStorageItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const localeClear = () => localStorage.clear();
