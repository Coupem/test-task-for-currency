import { CurrencyStorage } from '../types';

export const getLocalStorageItem = (key: string): string => {
  const localeStorageData = localStorage.getItem(key);

  return localeStorageData ? JSON.parse(localeStorageData) : {};
};
export const setLocalStorageItem = (
  key: string,
  value: CurrencyStorage
): void => {
  localStorage.setItem(key, JSON.stringify(value));
};
