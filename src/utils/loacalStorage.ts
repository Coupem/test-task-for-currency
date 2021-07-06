import { LocaleStoreState } from '../types';

export const getLocalStorageItem = (key: string): string =>
  JSON.parse(<string>localStorage.getItem(key));

export const setLocalStorageItem = (
  key: string,
  value: LocaleStoreState
): void => {
  localStorage.setItem(key, JSON.stringify(value));
};
